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

  <div class="botones">
  <RouterLink to="/turnos" class="btn-menu">
    Solicitar turno
  </RouterLink>

  <RouterLink to="/mis-turnos" class="btn-menu">
    Ver mis turnos
  </RouterLink>
</div>
  </div>
</template>

<style scoped>
.botones {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 30px;
}

.btn-menu {
  display: inline-block;
  width: 220px;
  padding: 14px 28px;

  background-color: #10b981;
  color: white;
  text-decoration: none;

  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;

  transition: 0.2s;
}

.btn-menu:hover {
  background-color: #059669;
  transform: translateY(-2px);
}
</style>