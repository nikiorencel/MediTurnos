<template>
  <div class="register-page">
    <div class="register-container">
      <h1>Crear Cuenta</h1>

      <form @submit.prevent="handleRegister" class="register-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="correo@email.com"
            class="medical-input"
          />
        </div>

        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Mínimo 6 caracteres"
            minlength="6"
            class="medical-input"
          />
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            placeholder="Repetí tu contraseña"
            class="medical-input"
          />
        </div>

        <button type="submit" :disabled="loading" class="register-btn">
          {{ loading ? 'Registrando...' : 'Registrarse' }}
        </button>

        <div v-if="error" class="error-message">
          {{ error }}
        </div>
      </form>

      <p class="login-link">
        ¿Ya tenés cuenta? <router-link to="/login">Iniciá sesión</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const { register } = useAuth()

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const loading = ref(false)
const error = ref('')

const handleRegister = () => {
  error.value = ''

  if (password.value !== confirmPassword.value) {
    error.value = 'Las contraseñas no coinciden'
    return
  }

  if (password.value.length < 6) {
    error.value = 'La contraseña debe tener al menos 6 caracteres'
    return
  }

  loading.value = true

  setTimeout(() => {
    const resultado = register({
      email: email.value,
      password: password.value
    })

    if (resultado.success) {
      router.push('/')
    } else {
      error.value = resultado.error
    }

    loading.value = false
  }, 500)
}
</script>

<style scoped>

.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 2rem;
  background-color: #f4f8fa; 
}


.register-container {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2.5rem;
  width: 100%;
  max-width: 400px;
 
  box-shadow: 0 4px 6px -1px rgba(14, 165, 233, 0.05), 0 2px 4px -2px rgba(14, 165, 233, 0.05);
}

h1 {
  color: #1e293b;
  text-align: left;
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  border-left: 4px solid #0ea5e9; 
  padding-left: 12px;
}

.form-group {
  margin-bottom: 1.5rem;
}


.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  text-align: left;
  color: #1e293b;
  font-size: 14px;
}


.form-group input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #fafafa;
  color: #1e293b;
  font-size: 1rem;
  box-sizing: border-box;
  transition: all 0.2s ease;
}


.form-group input:focus {
  outline: none;
  border-color: #0ea5e9;
  background-color: #ffffff;
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15);
}


.register-btn {
  width: 100%;
  padding: 1rem;
  background-color: #0ea5e9;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  transition: background-color 0.2s ease;
}

.register-btn:hover {
  background-color: #0284c7; 
}

.register-btn:disabled {
  opacity: 0.5;
  background-color: #94a3b8;
  cursor: not-allowed;
}


.error-message {
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #fca5a5;
  font-size: 14px;
  font-weight: 500;
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 1rem;
}


.login-link {
  text-align: center;
  color: #64748b;
  font-size: 14px;
  margin-top: 1rem;
  margin-bottom: 0;
}


.login-link a {
  color: #0d9488;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.login-link a:hover {
  color: #0f766e;
  text-decoration: underline;
}
</style>