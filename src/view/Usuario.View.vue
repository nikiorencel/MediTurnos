<script setup>
import useAuthStore from '../store/useAuth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

async function logout() {
  await authStore.signOut()
  router.push('/login')
}
</script>

<template>
  <div>
    <h1>Perfil del Usuario</h1>
    <p>Bienvenido, {{ authStore.user?.email }}</p>

    <router-link to="/turnos">
      Solicitar turno
    </router-link>
    <br><br>

<button @click="logout">
  Cerrar sesión
</button>
  </div>
</template>

<style scoped>

</style>