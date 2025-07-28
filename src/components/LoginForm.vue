<!-- <template>
  <div class="login-card bg-light p-4 rounded shadow">
    <h2 class="text-success mb-3">Welcome!</h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="username" class="form-label">@username</label>
        <input v-model="username" type="text" id="username" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input v-model="password" type="password" id="password" class="form-control" required />
      </div>
      <div class="mb-3 text-end">
        <a href="#" class="text-decoration-none text-success">Forgot Password?</a>
      </div>
      <button type="submit" class="btn btn-success w-100">LOGIN</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

function handleLogin() {
  alert(`Intento de login: ${username.value}`)
}
</script>

<style scoped>
.login-card {
  max-width: 400px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.9);
}
</style> -->






































<!-- src/components/LoginForm.vue -->
<template>
  <div class="login-card bg-light p-3 rounded shadow-sm text-center w-100" style="max-width: 320px;">
    <h2 class="text-dark mb-4">Welcome</h2>
    <form @submit.prevent="handleLogin">
      <div class="input-group mb-3">
        <span class="input-group-text bg-secondary text-white">
          <i class="bi bi-person-fill"></i>
        </span>
        <input v-model="username" type="text" class="form-control" placeholder="Username" required />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text bg-secondary text-white">
          <i class="bi bi-lock-fill"></i>
        </span>
        <input v-model="password" type="password" class="form-control" placeholder="Password" required />
      </div>

      <a href="#" class="d-block mb-3 text-decoration-none text-success small">Forgot Password?</a>
      <button type="submit" class="btn btn-dark w-100">LOGIN</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const username = ref('')
const password = ref('')

function handleLogin() {
  alert(`Login attempt by: ${username.value}`)
}
</script>