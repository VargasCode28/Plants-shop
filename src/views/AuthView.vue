<template>
  <div class="auth-background">
    <div class="auth-scroll">
      <section class="auth-section">
        <LoginForm />
        <p class="mt-3 text-muted small">Cultivando bienestar desde el primer clic</p>
      </section>
      <section class="auth-section">
        <RegisterForm />
        <p class="mt-3 text-muted small">Conectando contigo desde el primer paso</p>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/Register.vue'
</script>

<style scoped>
.auth-background {
  height: 100vh;
  width: 100vw;
  background-image: url('@/assets/p.webp');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;
}

.auth-background::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.auth-scroll {
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.auth-section {
  scroll-snap-align: start;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
</style>