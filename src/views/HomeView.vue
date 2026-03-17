<template>
  <div class="hero text-center">
    <img src="/img/logo.png" width="150" class="mb-3" />

    <h1 class="display-3 titulo">Tienda Jaguares</h1>

    <p class="lead">Productos oficiales del equipo</p>

    <router-link to="/productos" class="btn btn-lg btn-warning mt-3"> Ver catálogo </router-link>
  </div>
</template>

<style>
.hero {
  padding: 100px 20px;
  background: linear-gradient(135deg, #111, #222);
  border-radius: 10px;
  color: white;
}

.titulo {
  font-weight: bold;
}
</style>
