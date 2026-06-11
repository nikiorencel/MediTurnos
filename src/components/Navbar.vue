<template>
  <nav>
    <RouterLink to="/">Inicio</RouterLink>
    

    <div class="auth-section">
      <template v-if="isAuth">
        <RouterLink v-if="isAdmin" to="/admin" class="admin-link">
          Admin
        </RouterLink>
        <span class="user-greeting">
          Hola, {{ usuario?.email }}
        </span>
        <button @click="handleLogout" class="logout-btn">
          Cerrar Sesión
        </button>
      </template>
      <template v-else>
        <RouterLink to="/login" class="nav-link">
          Iniciar Sesión
        </RouterLink>
        <RouterLink to="/register" class="nav-link">
          Registrarse
        </RouterLink>
      </template>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const { token, usuario, isAuthenticated, isAdmin: isAdminFn, logout } = useAuth()

const isAuth = computed(() => isAuthenticated())
const isAdmin = computed(() => isAdminFn())

const handleLogout = () => {
  logout()
  router.push('/')
}
</script>

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

.auth-section .nav-link[href="/register"] {
  background-color: #0ea5e9; 
  color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(14, 165, 233, 0.15);
}

.auth-section .nav-link[href="/register"]:hover {
  background-color: #0284c7;
  box-shadow: 0 4px 12px -1px rgba(14, 165, 233, 0.25);
}

/* 👑 Panel de Administrador */
.admin-link {
  font-weight: 600;
  color: #0f766e !important; 
  background-color: #f0fdfa;
  border: 1px solid #ccfbf1 !important;
}

.admin-link:hover {
  background-color: #e6fffa !important;
}

/* 👤 Saludo al Usuario Conectado */
.user-greeting {
  color: #475569;
  font-size: 0.9rem;
  font-weight: 500;
  margin-right: 0.5rem;
  background-color: #f1f5f9;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
}

/* 🚪 Botón Cerrar Sesión */
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