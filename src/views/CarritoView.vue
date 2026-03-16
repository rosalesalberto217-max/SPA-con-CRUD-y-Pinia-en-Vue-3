<script setup>

import { useCarritoStore } from '../stores/useCarritoStore'

const carritoStore = useCarritoStore()

</script>

<template>

<h2>Carrito</h2>

<div v-if="carritoStore.carrito.length===0"
class="alert alert-info">

No hay productos en el carrito

</div>

<ul class="list-group mb-3">

<li
class="list-group-item d-flex justify-content-between"
v-for="producto in carritoStore.carrito"
:key="producto.id">

{{ producto.nombre }} - ${{ producto.precio }}

<button
class="btn btn-danger btn-sm"
@click="carritoStore.eliminarDelCarrito(producto.id)">
Eliminar
</button>

</li>

</ul>

<h4>Total: ${{ carritoStore.totalPrecio }}</h4>

<button
class="btn btn-warning"
@click="carritoStore.vaciarCarrito">
Vaciar carrito
</button>

</template>