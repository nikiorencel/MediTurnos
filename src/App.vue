<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/Navbar.vue'
</script>


<template>
  <div id="app">
    <NavBar />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>



<style>

</style>