<template>
  <div class="container mt-4">
    <h1>MediTurnos</h1>
    <p>Sistema de gestión de turnos médicos e historias clínicas.</p>

    <div id="carouselMediTurnos" class="carousel slide" data-bs-ride="carousel" style="max-width: 1024px; margin: 0 auto; text-shadow: 1px 1px 2px #333;">
      
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselMediTurnos" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselMediTurnos" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselMediTurnos" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1024&h=480&fit=crop" class="d-block w-100" alt="Slide 1">
          <div class="carousel-caption d-none d-md-block">
            <h5>Reservá tu Turno en Minutos</h5>
            <p>Accedé a la cartilla médica del hospital, elegí tu especialista y agendá tu consulta de forma 100% online.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1024&h=480&fit=crop" class="d-block w-100" alt="Slide 2">
          <div class="carousel-caption d-none d-md-block">
            <h5>Profesionales Calificados</h5>
            <p>Contamos con un equipo médico de excelencia en todas las especialidades para cuidar de tu salud.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1024&h=480&fit=crop" class="d-block w-100" alt="Slide 3">
          <div class="carousel-caption d-none d-md-block">
            <h5>Tu Historia Clínica Digital</h5>
            <p>Revisá tus recetas electrónicas, resultados de estudios y antecedentes médicos de forma segura.</p>
          </div>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselMediTurnos" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselMediTurnos" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </div>
</template>

<script>

import { Carousel } from 'bootstrap'

export default {
  data() {
    return {
      carouselInstance: null
    }
  },
  mounted() {
   
    const carouselElement = document.getElementById('carouselMediTurnos')
    if (carouselElement) {
      this.carouselInstance = new Carousel(carouselElement, {
        interval: 4000,
        wrap: true     
      })
    }
  },
  unmounted() {
   
    if (this.carouselInstance) {
      this.carouselInstance.dispose()
    }
  }
}
</script>
