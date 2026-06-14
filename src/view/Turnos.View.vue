<script setup>
import { ref } from 'vue'

const fecha = ref('')

function solicitarTurno() {
    await supabase
    .from('turnos')
    .insert([
        {
            paciente_id: authStore.user.id,
            fecha: fecha.value,
            estado: 'pendiente'
        }
    ])
}
</script>

<template>
  <div>
    <h1>Solicitar turno</h1>

    <input
      type="date"
      v-model="fecha"
    >

    <button @click="solicitarTurno">
      Reservar turno
    </button>
  </div>
</template>