<script setup>

import { ref } from 'vue'
import { useProductoStore } from '../stores/useProductoStore'

const productoStore = useProductoStore()

const producto = ref({
nombre:'',
precio:''
})

const crear = () => {

productoStore.crearProducto({
id:Date.now(),
nombre:producto.value.nombre,
precio:Number(producto.value.precio),
imagen:"logo.png"
})

producto.value.nombre=''
producto.value.precio=''

}

</script>

<template>

<div class="card shadow p-4">

<h2>Agregar Producto</h2>

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
class="btn btn-success"
@click="crear">

Guardar

</button>

</div>

</template>