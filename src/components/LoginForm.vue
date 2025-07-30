
<template>
  <div class="login-card bg-light p-4 rounded shadow-sm text-center w-100" style="max-width: 320px;">
    <div class="d-flex justify-content-center align-items-center gap-2 mb-4">
      <i class="bi bi-flower1 text-success fs-4"></i>
      <h2 class="text-dark m-0 fw-bold">{{ isLogin ? 'Bienvenido' : 'Crear cuenta' }}</h2>
    </div>

    <form @submit.prevent="isLogin ? submitLogin() : submitRegister()">
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

      <a v-if="isLogin" href="#" class="d-block mb-3 text-decoration-none text-success small">¿Olvidaste tu clave?</a>

      <button type="submit" class="btn btn-success w-100 mb-2">
        <i :class="isLogin ? 'bi bi-box-arrow-in-right me-1' : 'bi bi-person-check me-1'"></i>
        {{ isLogin ? 'Ingresar' : 'Registrarse' }}
      </button>

      <button type="button" class="btn btn-outline-dark w-100" @click="isLogin = !isLogin">
        <i :class="isLogin ? 'bi bi-person-plus me-1' : 'bi bi-arrow-left me-1'"></i>
        {{ isLogin ? 'Crear cuenta nueva' : 'Volver a login' }}
      </button>

      <p v-if="registerSuccess" class="text-success mt-3 small">
        ✅ Cuenta creada. Ahora inicia sesión.
      </p>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const isLogin = ref(true)
const registerSuccess = ref(false)
const router = useRouter()

async function submitLogin() {
  try {
    const result = await signInWithEmailAndPassword(auth, email.value, password.value)
    console.log('✅ Usuario logueado:', result.user)
    router.push('/ShopView')
  } catch (err) {
    console.error('❌ Error de login:', err instanceof Error ? err.message : err)
  }
}

async function submitRegister() {
  try {
    const result = await createUserWithEmailAndPassword(auth, email.value, password.value)
    console.log('✅ Usuario registrado:', result.user)
    registerSuccess.value = true
    isLogin.value = true
    email.value = ''
    password.value = ''
  } catch (err) {
    console.error('❌ Error de registro:', err instanceof Error ? err.message : err)
  }
}
</script>

<style scoped>
.login-card {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease;
}
.login-card:hover {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
}
input:focus {
  box-shadow: 0 0 0 0.2rem rgba(25, 135, 84, 0.25);
  transition: box-shadow 0.2s ease;
}
</style> 











































































































