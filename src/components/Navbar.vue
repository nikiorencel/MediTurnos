<script setup>
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
// ✔️ Corregido: Importamos el store con el nombre correcto de tu archivo
import useAuthStore from '../store/useAuth'

const router = useRouter()
const authStore = useAuthStore()


const isAuth = computed(() => authStore.isAuthenticated)
const userEmail = computed(() => authStore.user?.email)

const isAdmin = computed(() => {
  return authStore.user?.user_metadata?.role === 'admin' || authStore.user?.role === 'admin'
})

const handleLogout = async () => {
  try {
    await authStore.signOut() 
    router.push('/')         
  } catch (error) {
    console.error("Error al cerrar sesión:", error.message)
  }
}
</script>

<template>
  <nav>
    <RouterLink to="/">Inicio</RouterLink>
    
    <div class="auth-section">
      <template v-if="isAuth">
        <RouterLink v-if="isAdmin" to="/admin" class="admin-link">
          Admin
        </RouterLink>
        
        <span class="user-greeting">
          Hola, {{ userEmail }}
        </span>
        
        <button @click="handleLogout" class="logout-btn">
          Cerrar Sesión
        </button>
      </template>

      <template v-else>
        <RouterLink to="/login" class="nav-link">
          Iniciar Sesión
        </RouterLink>
      </template>
    </div>
  </nav>
</template>

<style scoped>

nav {
  display: flex;
  justify-content: flex-start; 
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  background-color: #ffffff; 
  border-bottom: 1px solid #e2e8f0; 
  flex-wrap: wrap;
  align-items: center;
  font-family: 'Inter', -apple-system, sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02); 
}

nav a {
  color: #64748b; 
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

nav a:hover {
  background-color: #f8fafc; 
  color: #1e293b;
}

nav a.router-link-active {
  background-color: #f0f9ff;
  color: #0ea5e9; 
  font-weight: 600;
}

.auth-section {
  margin-left: auto;
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.nav-link {
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.auth-section .nav-link[href="/login"] {
  background-color: transparent;
  color: #0ea5e9;
  border: 1px solid transparent;
}

.auth-section .nav-link[href="/login"]:hover {
  background-color: #f0f9ff;
}

.admin-link {
  font-weight: 600;
  color: #0f766e !important; 
  background-color: #f0fdfa;
  border: 1px solid #ccfbf1 !important;
}

.admin-link:hover {
  background-color: #e6fffa !important;
}

.user-greeting {
  color: #475569;
  font-size: 0.9rem;
  font-weight: 500;
  margin-right: 0.5rem;
  background-color: #f1f5f9;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
}

.logout-btn {
  background-color: #ffffff;
  border: 1px solid #cbd5e1;
  color: #64748b;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.logout-btn:hover {
  background-color: #fef2f2; 
  color: #dc2626;
  border-color: #fca5a5;
}
</style>