<!-- <template>
  <nav class="navbar navbar-expand-lg navbar-light bg-success px-4">
    <a class="navbar-brand text-white fw-bold" href="#">🪴 PlantShop</a>
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

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link text-white">Login</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/dashboard" class="nav-link text-white">Dashboard</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script> -->













































<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <a class="navbar-brand fw-bold text-light" href="#">🪴 PlantShop</a>
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

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link text-light">Login</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/dashboard" class="nav-link text-light">Dashboard</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar-brand {
  letter-spacing: 1px;
}
</style>
