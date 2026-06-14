<script setup>
import { ref } from 'vue'

import { supabase } from '../service/supabaseClient'
import useAuthStore from '../store/useAuth'

const authStore = useAuthStore()

const fecha = ref('')
const hora = ref('')
const mensaje = ref('')
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

  const { data, error } = await supabase
  .from('turnos')
  .insert([
    {
      paciente_id: authStore.user.id,
      fecha: fecha.value,
      hora: hora.value,
      estado: 'pendiente'
    }
  ])

  console.log("DATA:", data)
  console.log("ERROR:", error)

 if (error) {
  mensaje.value = 'Error al reservar el turno'
} else {
  mensaje.value = 'Turno reservado correctamente'
}

 setTimeout(() => {
      mensaje.value = ''
    }, 3000)
}
</script>

<template>
  <div class="horario-container">

    <h1>Solicitar turno</h1>

    <input
      type="date"
      v-model="fecha"
      class="fecha-input"
    />

    <h3>Seleccioná un horario</h3>

    <select v-model="hora" class="horario-select">
      <option disabled value="">
        Elegí una hora
      </option>

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
  gap: 20px;
  margin-top: 40px;
}

.horario-select {
  width: 180px;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
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
}

.btn-reservar:hover {
  background-color: #1976d2;
  transform: scale(1.03);
}
.fecha-input {
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
}
</style>