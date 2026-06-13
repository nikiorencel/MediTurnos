<script setup>
import useAuthStore from '../store/useAuth'
const authStore = useAuthStore()
</script>

<template>
  <div>
    <h1>Perfil del Usuario</h1>
    <p>Bienvenido, {{ authStore.user?.email }}</p>
  </div>
</template>

<style scoped>

</style>