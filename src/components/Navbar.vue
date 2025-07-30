<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top w-100 animate-navbar">
    <div class="container-fluid px-2">

      <RouterLink to="/#" class="navbar-brand d-flex align-items-center gap-2 px-3 py-1 rounded bg-dark text-light transition-brand">
        <i class="bi bi-flower1 text-success fs-4"></i>
        <span class="fs-5 fw-semibold brand-text">PlantShop</span>
      </RouterLink>

      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 d-flex align-items-center gap-2">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link d-flex align-items-center px-3 py-2 rounded bg-gradient text-white shadow-sm transition-link">
              <i class="bi bi-box-arrow-in-right me-2 fs-5"></i>
              <span class="fw-semibold">Login</span>
            </RouterLink>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  border: none;
  padding-top: 4px;
  padding-bottom: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease-in-out;
}

.animate-navbar {
  animation: fadeSlideDown 0.6s ease-out;
}

@keyframes fadeSlideDown {
  from {
    opacity: 0;
    transform: translateY(-24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.navbar-brand {
  letter-spacing: 1px;
  font-weight: 600;
  text-shadow: 0 1px 1px rgba(0,0,0,0.2);
}

.brand-text {
  transition: color 0.3s ease;
}

.transition-brand:hover {
  background-color: #343a40;
  transform: scale(1.04);
  box-shadow: 0 0 0.5rem rgba(0, 255, 153, 0.3);
}

.navbar-toggler-icon {
  font-size: 1.2rem;
}

.navbar-nav .nav-link {
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  text-align: center;
  transition: all 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #a8e6a3 !important;
}

.transition-link:hover {
  background: linear-gradient(90deg, #6c757d, #495057);
  transform: scale(1.03);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
</style> 

























































