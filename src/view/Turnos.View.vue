<script setup>
import { ref } from 'vue'
import { supabase } from '../service/supabaseClient'
import useAuthStore from '../store/useAuth'

const authStore = useAuthStore()

// Variables reactivas para el formulario
const fecha = ref('')
const hora = ref('')
const especialidadSeleccionada = ref('')
const mensaje = ref('')

// Listado estático de especialidades
const especialidades = [
  'Cardiología',
  'Pediatría',
  'Traumatología',
  'Ginecología y Obstetricia',
  'Dermatología',
  'Neurología'
]

const horarios = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00'
]

async function solicitarTurno() {
  // Validación para que no manden campos vacíos
  if (!fecha.value || !hora.value || !especialidadSeleccionada.value) {
    mensaje.value = 'Por favor, completa todos los campos.'
    setTimeout(() => { mensaje.value = '' }, 3000)
    return
  }

  // Hacemos un ÚNICO llamado limpio a Supabase
  const { data, error } = await supabase
    .from('turnos')
    .insert([
      {
        paciente_id: authStore.user.id,
        fecha: fecha.value,
        hora: hora.value,
        especialidad: especialidadSeleccionada.value, // Asegurate que en tu base se llame "especialidad"
        estado: 'pendiente'
      }
    ])

  console.log("DATA:", data)
  console.log("ERROR:", error)

  if (error) {
    mensaje.value = 'Error al reservar el turno'
  } else {
    mensaje.value = 'Turno reservado correctamente'
    
    // Limpiamos los inputs si salió todo bien
    fecha.value = ''
    hora.value = ''
    especialidadSeleccionada.value = ''
  }

  setTimeout(() => {
    mensaje.value = ''
  }, 3000)
} // 👈 Ahora la función se cierra donde corresponde de forma correcta
</script>

<template>
  <div class="horario-container">
    <h1>Solicitar turno</h1>

    <h3>1. Seleccioná la Especialidad</h3>
    <select v-model="especialidadSeleccionada" class="formulario-select">
      <option disabled value="">Elegí una especialidad</option>
      <option 
        v-for="esp in especialidades" 
        :key="esp" 
        :value="esp"
      >
        {{ esp }}
      </option>
    </select>

    <h3>2. Seleccioná una Fecha</h3>
    <input
      type="date"
      v-model="fecha"
      class="fecha-input"
    />

    <h3>3. Seleccioná un Horario</h3>
    <select v-model="hora" class="formulario-select">
      <option disabled value="">Elegí una hora</option>
      <option
        v-for="h in horarios"
        :key="h"
        :value="h"
      >
        {{ h }}
      </option>
    </select>

    <button
      @click="solicitarTurno"
      class="btn-reservar"
    >
      Reservar turno
    </button>

    <div
      v-if="mensaje"
      class="mensaje"
    >
      {{ mensaje }}
    </div>
  </div>
</template>

<style scoped>
.mensaje {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #d1fae5;
  color: #065f46;
  padding: 20px 35px;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 600;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  z-index: 1000;
}

.horario-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 40px;
}

h3 {
  margin-top: 10px;
  font-size: 1.1rem;
  color: #495057;
}

.formulario-select {
  width: 250px;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: white;
  color: black;
}

.btn-reservar {
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 15px;
}

.btn-reservar:hover {
  background-color: #1976d2;
  transform: scale(1.03);
}

.fecha-input {
  width: 250px;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
}
</style>