<script setup>
import { useProductoStore } from '../stores/useProductoStore'
import { useCarritoStore } from '../stores/useCarritoStore'

const productoStore = useProductoStore()
const carritoStore = useCarritoStore()
</script>

<template>
  <h2 class="mb-4">Catálogo</h2>

  <div class="row">
    <div class="col-md-4 mb-4" v-for="producto in productoStore.productos" :key="producto.id">
      <div class="card producto-card shadow">
        <img
          :src="`${productoStore.productos.length ? '/SPA-con-CRUD-y-Pinia-en-Vue-3/img/' + producto.imagen : ''}`"
          class="card-img-top"
          style="height: 220px; object-fit: cover"
        />

        <div class="card-body text-center">
          <h5 class="card-title">
            {{ producto.nombre }}
          </h5>

          <p class="precio">$ {{ producto.precio }}</p>

          <button class="btn btn-success me-2" @click="carritoStore.agregarAlCarrito(producto)">
            Agregar
          </button>

          <router-link class="btn btn-primary me-2" :to="'/productos/' + producto.id">
            Editar
          </router-link>

          <button class="btn btn-danger" @click="productoStore.eliminarProducto(producto.id)">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.producto-card {
  transition: 0.3s;
  cursor: pointer;
}

.producto-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.precio {
  font-size: 20px;
  font-weight: bold;
  color: #28a745;
}
</style>
