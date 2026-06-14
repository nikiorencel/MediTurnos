<script setup>
import { ref } from 'vue'

const fecha = ref('')

function solicitarTurno() {
    console.log(fecha.value)
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