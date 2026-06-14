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

    <router-link to="/turnos" class="btn-turno">
    Solicitar turno
    </router-link>
    <br><br>

  </div>
</template>

<style scoped>
.btn-turno {
  display: inline-block;
  margin-top: 15px;
  padding: 12px 24px;

  background-color: #0ea5e9;
  color: white;
  text-decoration: none;

  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;

  transition: 0.2s;
}

.btn-turno:hover {
  background-color: #0284c7;
  transform: translateY(-2px);
}
</style>