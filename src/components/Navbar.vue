<!-- <template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-2 px-0 m-0 border-0 w-100">
    <div class="container-fluid px-2">
      <RouterLink to="/" class="navbar-brand d-flex align-items-center gap-2 fw-bold text-light m-0">
        <i class="bi bi-flower1 text-success fs-5"></i>
        <span class="fs-5">PlantShop</span>
      </RouterLink>

      <button
        class="navbar-toggler"
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
        <ul class="navbar-nav mb-2 mb-lg-0 d-flex align-items-center ">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link text-light">
              <i class="bi bi-box-arrow-in-right me-1"></i> Login
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/dashboard" class="nav-link text-light">
              <i class="bi bi-speedometer2 me-1"></i> Dashboard
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
 body, html, #app {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
} 

.navbar {
  border: none;  
}

 .navbar-brand {
  letter-spacing: 1px;
} 

 .navbar-nav .nav-link {
  font-weight: 500;
  padding: 8px 12px;
} 

.navbar-nav .nav-link:hover {
  color: #a8e6a3 !important;
}
</style> -->





















































































<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top w-100">
    <div class="container-fluid px-2">
     <!-- <RouterLink to="/#" class="navbar-brand d-flex align-items-center gap-2 fw-bold text-light m-0">
        <i class="bi bi-flower1 text-success fs-5"></i>
        <span class="fs-5">PlantShop</span>
      </RouterLink>
-->

<RouterLink to="/" class="navbar-brand d-flex align-items-center gap-2 px-3 py-1 rounded shadow-sm bg-dark text-light transition">
  <i class="bi bi-flower1 text-success fs-4"></i>
  <span class="fs-5 fw-semibold">PlantShop</span>
</RouterLink>



      <button
        class="navbar-toggler"
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
        <ul class="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
          <li class="nav-item">
      <!--      <RouterLink to="/" class="nav-link text-light">
              <i class="bi bi-box-arrow-in-right me-2"></i> Login
            </RouterLink> -->

<RouterLink to="/" class="nav-link d-flex align-items-center px-3 py-2 rounded bg-gradient text-white shadow-sm transition">
  <i class="bi bi-box-arrow-in-right me-2 fs-5"></i>
  <span class="fw-semibold">Login</span>
</RouterLink>


          </li>
 

          <li class="nav-item">
     <!--     <RouterLink to="/ShopView" class="nav-link text-light">
              <i class="bi bi-speedometer2 me-1"></i> Shop
            </RouterLink>-->  
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
}

/* --- Navbar fija y responsive --- */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  border: none;
}

body {
  padding-top: 56px; /* Compensación visual bajo navbar */
}

.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  font-size: 1.2rem;
}

.navbar-brand {
  letter-spacing: 1px;
}

/* --- Menú responsivo --- */
.navbar-nav .nav-link {
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  text-align: center;
  transition: color 0.2s ease-in-out;
}

.navbar-nav .nav-link:hover {
  color: #a8e6a3 !important;
}







.nav-link.transition:hover {
  background: linear-gradient(90deg, #6c757d, #495057);
  transform: scale(1.02);
}

.navbar-brand.transition:hover {
  background-color: #343a40;
  transform: scale(1.03);
}

</style>