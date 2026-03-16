<script setup>

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductoStore } from '../stores/useProductoStore'

const route=useRoute()

const productoStore=useProductoStore()

const producto=ref(
productoStore.obtenerProductoPorId(route.params.id)
)

const actualizar=()=>{

productoStore.actualizarProducto(
route.params.id,
producto.value
)

}

</script>

<template>

<div class="card p-4">

<h2>Editar Producto</h2>

<div class="mb-3">

<label>Nombre</label>

<input
v-model="producto.nombre"
class="form-control">

</div>

<div class="mb-3">

<label>Precio</label>

<input
v-model="producto.precio"
class="form-control">

</div>

<button
class="btn btn-primary"
@click="actualizar">

Actualizar

</button>

</div>

</template>