  <!-- <template>
  <div class="login-background d-flex align-items-center justify-content-center vh-100">
    <LoginForm />
  </div>
</template>

<script lang="ts" setup>
import LoginForm from '@/components/LoginForm.vue'
</script> 

<style scoped>
.login-background {
  background-image: url('@/assets/plants.avif');
  background-size: cover;
  background-position: center;
  
}
</style>  -->

































<!-- src/views/LoginView.vue -->
<template>
  <div class="login-background position-relative">
    <div class="login-overlay d-flex align-items-center justify-content-center">
      <LoginForm />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginForm from '@/components/LoginForm.vue'
</script>

<style scoped>
.login-background {
  background-image: url('@/assets/plants.avif');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
}

.login-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: brightness(0.7);
}
</style>