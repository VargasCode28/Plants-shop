  <template>
  <div class="register-card bg-light p-4 rounded shadow-sm text-center w-100" style="max-width: 320px;">
    <div class="d-flex justify-content-center align-items-center gap-2 mb-4">
      <i class="bi bi-person-plus text-success fs-4"></i>
      <h2 class="text-dark m-0 fw-bold">Crear cuenta</h2>
    </div>

    <form @submit.prevent="register">
      <div class="input-group mb-3">
        <span class="input-group-text bg-success text-white">
          <i class="bi bi-envelope-fill"></i>
        </span>
        <input v-model="email" type="email" class="form-control" placeholder="Email" required />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text bg-success text-white">
          <i class="bi bi-lock-fill"></i>
        </span>
        <input v-model="password" type="password" class="form-control" placeholder="Contraseña" required />
      </div>

      <button type="submit" class="btn btn-success w-100 mb-2">
        <i class="bi bi-person-check me-1"></i> Registrarse
      </button>

      <RouterLink to="/" class="d-block text-decoration-none text-muted small">
        ¿Ya tienes cuenta? Inicia sesión
      </RouterLink>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const router = useRouter()

async function register() {
  try {
    const result = await createUserWithEmailAndPassword(auth, email.value, password.value)
    console.log('✅ Usuario registrado:', result.user)
    router.push('/ShopView')
  } catch (err) {
    console.error('❌ Error de registro:', err instanceof Error ? err.message : err)
  }
}
</script>

<style scoped>
.register-card {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease;
}
.register-card:hover {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
}
input:focus {
  box-shadow: 0 0 0 0.2rem rgba(25, 135, 84, 0.25);
  transition: box-shadow 0.2s ease;
}
</style>  
















































































