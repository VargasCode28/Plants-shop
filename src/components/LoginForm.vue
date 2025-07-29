
<template>
  <div class="login-card bg-light p-4 rounded shadow-sm text-center w-100" style="max-width: 320px;">
    <div class="d-flex justify-content-center align-items-center gap-2 mb-4">
      <i class="bi bi-flower1 text-success fs-4"></i>
      <h2 class="text-dark m-0 fw-bold">Bienvenido</h2>
    </div>

    <form @submit.prevent="submit">
      <div class="input-group mb-3">
        <span class="input-group-text bg-success text-white">
          <i class="bi bi-person-fill"></i>
        </span>
        <input v-model="email" type="email" class="form-control" placeholder="Email" required />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text bg-success text-white">
          <i class="bi bi-lock-fill"></i>
        </span>
        <input v-model="password" type="password" class="form-control" placeholder="Contraseña" required />
      </div>

      <a href="#" class="d-block mb-3 text-decoration-none text-success small">¿Olvidaste tu clave?</a>

      <button type="submit" class="btn btn-success w-100 mb-2">
        <i class="bi bi-box-arrow-in-right me-1"></i> Ingresar
      </button>

     <button type="submit" class="btn btn-outline-dark w-100" @click="handleRegister"> 
        <i class="bi bi-person-plus me-1"></i> Registrarse
     </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'


const email = ref('')
const password = ref('')
const router = useRouter()


async function submit() {
  try {
    const result = await signInWithEmailAndPassword(auth, email.value, password.value)
    console.log('✅ Usuario logueado:', result.user)
  
  router.push('/ShopView')
  } catch (err) {
    if (err instanceof Error) {
      console.error('❌ Error de login:', err.message)
    } else {
      console.error('❌ Error desconocido:', err)
    }
  }
}





/*
function handleLogin() {
  alert(`Login attempt by: ${username.value}`)
}
*/
function handleRegister() {
  router.push('/register') 
}
</script> 

















































