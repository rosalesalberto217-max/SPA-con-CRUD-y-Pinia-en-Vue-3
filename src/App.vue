<script setup>
import { useCarritoStore } from './stores/useCarritoStore'

const carritoStore = useCarritoStore()
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
    <div class="container">
      <a class="navbar-brand fw-bold"> Tienda Jaguares </a>

      <div>
        <router-link class="btn btn-outline-light me-2" to="/"> Inicio </router-link>

        <router-link class="btn btn-outline-light me-2" to="/productos"> Productos </router-link>

        <router-link class="btn btn-outline-light me-2" to="/productos/crear">
          Crear Producto
        </router-link>

        <router-link class="btn btn-warning" to="/carrito">
          Carrito ({{ carritoStore.totalArticulos }})
        </router-link>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <router-view />
  </div>
</template>
