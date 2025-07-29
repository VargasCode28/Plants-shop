
<template>
  <div class="login-background">
    <div class="login-overlay d-flex align-items-center justify-content-center">
      <div class="login-container d-flex flex-row shadow-lg rounded overflow-hidden">
        <div class="login-form p-5 bg-light text-center">
          <LoginForm />
        </div>
        <div class="login-side-image">
          <img src="@/assets/spati.webp" alt="Imagen lateral" class="img-fluid h-100 w-100 object-fit-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginForm from '@/components/LoginForm.vue'
</script>



<style scoped>
.login-background {
  position: relative;
  background-image: url('@/assets/p.webp');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
 


}

.login-background::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 1;
}

.login-overlay {
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
}

.login-container {
  max-width: 640px;
  width: 100%;
  background-color: white;
  z-index: 3;
  border-radius: 0.5rem; 

}

.login-form {
  flex: 1;
}

.login-side-image {
  flex: 1;
  min-width: 120px;
  background-color: #f8f9fa;
}
</style>



















