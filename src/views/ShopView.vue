<template>

  <div class="shop-hero position-relative overflow-hidden mb-5">
    <img src="/src/assets/p.webp" alt="Bienvenida a la tienda" class="hero-img" />
    <div class="hero-text text-white text-center px-4 px-md-5">
      <h2 class="fw-bold display-5">🛒 Bienvenido a la Tienda</h2>
      <p class="lead">Explora nuestras categorías y encuentra la planta perfecta</p>
      <button class="btn btn-success mt-3">Ver catálogo</button>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row">
     
      <div class="col-12 col-md-3 mb-4">
        <div class="bg-white p-3 rounded shadow-sm">
          <h5 class="fw-bold mb-3">🔍 Buscar plantas</h5>
          <input v-model="searchQuery" type="text" class="form-control mb-2" placeholder="Nombre o tipo" />
          <select class="form-select mb-2" v-model="selectedCategory">
            <option value="">Todas las categorías</option>
            <option value="interior">Interior</option>
            <option value="exterior">Exterior</option>
            <option value="suculentas">Suculentas</option>
          </select>
          <button class="btn btn-outline-success w-100">Aplicar filtro</button>
        </div>
      </div>


      <div class="col-12 col-md-9">
        <div class="row">
          <div v-for="plant in filteredPlants" :key="plant.id" class="col-6 col-lg-4 mb-4">
            <div class="card h-100 shadow-sm border-0 rounded">
              <img :src="plant.image" :alt="plant.name" class="card-img-top" />
              <div class="card-body text-center">
                <h5 class="card-title fw-semibold">{{ plant.name }}</h5>
                <p class="card-text text-muted">{{ plant.description }}</p>
                <p class="fw-bold text-success mb-2">$ {{ plant.price }}</p>
                <button class="btn btn-success btn-sm w-100" @click="agregarAlCarrito(plant)">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <footer class="footer bg-dark text-light pt-5 pb-3 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 mb-4">
          <h5 class="fw-bold text-uppercase mb-3">INFORMACIÓN</h5>
          <ul class="list-unstyled small">
            <li><a href="#" class="text-light text-decoration-none">Contacto</a></li>
            <li><a href="#" class="text-light text-decoration-none">Términos y Condiciones</a></li>
            <li><a href="#" class="text-light text-decoration-none">Políticas de cambio y devoluciones</a></li>
            <li><a href="#" class="text-light text-decoration-none">Políticas de Privacidad</a></li>
          </ul>
        </div>
        <div class="col-12 col-md-4 mb-4">
          <h5 class="fw-bold text-uppercase mb-3">CATEGORÍAS</h5>
          <ul class="list-unstyled small">
            <li><a href="#" class="text-light text-decoration-none">Plantas</a></li>
            <li><a href="#" class="text-light text-decoration-none">Árboles</a></li>
            <li><a href="#" class="text-light text-decoration-none">Maceteros</a></li>
            <li><a href="#" class="text-light text-decoration-none">Flores Secas</a></li>
            <li><a href="#" class="text-light text-decoration-none">Jardinería</a></li>
            <li><a href="#" class="text-light text-decoration-none">Paisajismo</a></li>
          </ul>
        </div>
        <div class="col-12 col-md-4 mb-4">
          <h5 class="fw-bold text-uppercase mb-3">CONTÁCTANOS</h5>
          <p class="small mb-1">📞 000000000</p>
          <p class="small mb-1">tienda online de plantas y jardín</p>
          <p class="small">Oficina: <br />Arica y Parinacota - Chile</p>
        </div>
      </div>

      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center border-top pt-3 mt-3">
        <p class="small mb-2 mb-md-0">© 2025 PlantShop. Todos los derechos reservados.</p>
        <div class="d-flex gap-3">
          <a href="#" class="text-light fs-5"><i class="bi bi-instagram"></i></a>
          <a href="#" class="text-light fs-5"><i class="bi bi-facebook"></i></a>
          <a href="#" class="text-light fs-5"><i class="bi bi-youtube"></i></a>
          <a href="#" class="btn btn-success btn-sm">Envíanos un mensaje de WhatsApp</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { getAuth } from 'firebase/auth'
import { db } from '@/firebase/firebase'
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore'

const auth = getAuth()
const searchQuery = ref('')
const selectedCategory = ref('')



const plants = ref([
  { id: 1, name: 'Ficus', category: 'interior', description: 'Planta elegante para interiores', image: '/src/assets/Ficus.png', price: 8990 },
  { id: 2, name: 'Suculenta', category: 'suculentas', description: 'Compacta y resistente', image: '/src/assets/Sucu.webp', price: 4990 },
  { id: 3, name: 'Orquídea', category: 'interior', description: 'Floración vibrante', image: '/src/assets/Orquidea1.webp', price: 13990 },
  { id: 4, name: 'Helecho', category: 'exterior', description: 'Frondoso y fresco', image: '/src/assets/Helecho.webp', price: 7990 }
])

const filteredPlants = computed(() =>
  plants.value.filter(plant =>
    plant.name.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
    (selectedCategory.value === '' || plant.category === selectedCategory.value)
  )
)

const agregarAlCarrito = async (plant: any) => {
  const user = auth.currentUser
  if (!user) {
    alert('Debes iniciar sesión para agregar al carrito 🚫')
    return
  }

  try {
    const q = query(
      collection(db, 'productos'),
      where('uid', '==', user.uid),
      where('nombre', '==', plant.name)
    )
    const resultado = await getDocs(q)
    if (!resultado.empty) {
      alert('🟡 Este producto ya está en tu carrito')
      return
    }

    await addDoc(collection(db, 'productos'), {
      uid: user.uid,
      nombre: plant.name,
      precio: plant.price,
      imageUrl: plant.image
    })
    alert('✅ Producto agregado al carrito')
  } catch (err) {
    console.error('Error al agregar:', err)
  }
}
</script>

<style scoped>
.shop-hero {
  position: relative;
  height: 400px;
  width: 100%;
  background-color: #000;
}
.hero-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
  z-index: 1;
}
.hero-text {
  position: relative;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
  max-width: 720px;
  margin: 0 auto;
}
.card-img-top {
  object-fit: cover;
  height: 180px;
}
.footer a:hover {
  text-decoration: underline;
  color: #a8e6a3;
}
</style>     

























































































































































































































































































