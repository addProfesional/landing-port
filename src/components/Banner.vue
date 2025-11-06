<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Importar iconos específicos del Banner
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

// Estado para el carrusel (sin lógica por ahora)
const currentSlide = ref(0)
const totalSlides = ref(3)
</script>

<template>
  <section class="banner-container">
    <!-- Hero Section Principal -->
    <div class="hero-section">
      <!-- Contenido principal centrado -->
      <div class="hero-content">
        <h1 class="hero-title">Portafolio Dev</h1>
        <p class="hero-description">
          Some default text to fill some space, and 
          <span class="highlight-text">something more so there is more text</span>
        </p>
      </div>

      <!-- Controles de navegación (carrusel) -->
      <div class="hero-controls">
        <!-- Botón anterior -->
        <button class="nav-button nav-button-left" :disabled="currentSlide === 0">
          <FontAwesomeIcon :icon="faChevronLeft" class="nav-icon" />
        </button>

        <!-- Indicadores de slides -->
        <div class="slide-indicators">
          <div 
            v-for="(slide, index) in totalSlides" 
            :key="index"
            class="slide-dot"
            :class="{ 'slide-dot-active': index === currentSlide }"
          ></div>
        </div>

        <!-- Botón siguiente -->
        <button 
          class="nav-button nav-button-right" 
          :disabled="currentSlide === totalSlides - 1"
        >
          <FontAwesomeIcon :icon="faChevronRight" class="nav-icon" />
        </button>
      </div>
    </div>

    <!-- Línea separadora -->
    <div class="banner-divider"></div>
  </section>
</template>

<style scoped>
.banner-container {
  width: 100%;
  background-color: var(--color-night);
  position: relative;
}

/* Hero Section */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

/* Hero Content */
.hero-content {
  text-align: center;
  max-width: 800px;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-davy-gray-50);
  margin: 0 0 1.5rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--color-davy-gray-200);
  line-height: 1.6;
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.highlight-text {
  color: var(--color-lapis-300);
  font-weight: 500;
}

/* Hero Controls */
.hero-controls {
  display: flex;
  align-items: center;
  gap: 2rem;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
}

/* Navigation Buttons */
.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: var(--color-gunmetal);
  border: 1px solid var(--color-rich-black);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-button:hover:not(:disabled) {
  background-color: var(--color-lapis);
  border-color: var(--color-lapis);
  transform: translateY(-2px);
}

.nav-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.nav-button:disabled:hover {
  transform: none;
  background-color: var(--color-gunmetal);
  border-color: var(--color-rich-black);
}

.nav-icon {
  color: var(--color-davy-gray-100);
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-button:hover:not(:disabled) .nav-icon {
  color: white;
}

/* Slide Indicators */
.slide-indicators {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.slide-dot {
  width: 12px;
  height: 12px;
  background-color: var(--color-gunmetal);
  border: 1px solid var(--color-rich-black);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.slide-dot:hover {
  background-color: var(--color-davy-gray-300);
  transform: scale(1.1);
}

.slide-dot-active {
  background-color: var(--color-lapis);
  border-color: var(--color-lapis);
  transform: scale(1.2);
}

.slide-dot-active:hover {
  background-color: var(--color-lapis-300);
}

/* Banner Divider */
.banner-divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-rich-black);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    min-height: 50vh;
    padding: 3rem 1rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-controls {
    bottom: 1rem;
    gap: 1.5rem;
  }
  
  .nav-button {
    width: 40px;
    height: 40px;
  }
  
  .nav-icon {
    font-size: 0.875rem;
  }
  
  .slide-dot {
    width: 10px;
    height: 10px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    min-height: 40vh;
    padding: 2rem 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 0.875rem;
  }
  
  .hero-controls {
    gap: 1rem;
    bottom: 1rem;
  }
  
  .nav-button {
    width: 36px;
    height: 36px;
  }
  
  .slide-indicators {
    gap: 0.5rem;
  }
  
  .slide-dot {
    width: 8px;
    height: 8px;
  }
}

/* Animaciones adicionales */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content {
  animation: fadeInUp 0.8s ease-out;
}

.hero-controls {
  animation: fadeInUp 0.8s ease-out 0.3s both;
}
</style>