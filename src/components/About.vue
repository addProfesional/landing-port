<script setup lang="ts">
// Sin lógica por ahora, solo UI
</script>

<template>
  <section class="about-container">
    <!-- Título de la sección -->
    <div class="about-header">
      <h2 class="about-title">About</h2>
    </div>

    <!-- Contenido principal -->
    <div class="about-content">
      <div class="about-text">
        <p class="about-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p class="about-paragraph">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </div>

    <!-- Línea separadora -->
    <div class="about-divider"></div>
  </section>
</template>

<style scoped>
.about-container {
  width: 100%;
  background-color: var(--color-night);
  padding: 4rem 0;
}

/* Header */
.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.about-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-davy-gray-50);
  margin: 0;
}

/* Content */
.about-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-text {
  text-align: center;
}

.about-paragraph {
  font-size: 1rem;
  color: var(--color-davy-gray-200);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}

.about-paragraph:last-child {
  margin-bottom: 0;
}

/* Divider */
.about-divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-rich-black);
  margin-top: 4rem;
}

/* Responsive */
@media (max-width: 768px) {
  .about-container {
    padding: 3rem 0;
  }
  
  .about-title {
    font-size: 1.75rem;
  }
  
  .about-content {
    padding: 0 1rem;
  }
  
  .about-paragraph {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .about-header {
    margin-bottom: 2rem;
  }
  
  .about-title {
    font-size: 1.5rem;
  }
  
  .about-text {
    text-align: left;
  }
}

/* Animación */
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

.about-content {
  animation: fadeInUp 0.8s ease-out;
}
</style>