<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Importar iconos específicos del ProjectsGrid
import { faCode, faExternalLinkAlt, faPlay, faFileText } from '@fortawesome/free-solid-svg-icons'

// Estado para filtros (sin lógica por ahora)
const activeFilter = ref('Full Stack')
const filters = ['Front', 'Full Stack', 'Backend', 'Mobile']

// Proyectos de ejemplo (basados en tu mockup)
const projects = [
  {
    id: 1,
    title: 'Proyecto 1',
    description: 'Descripción asociada al proyecto actual',
    category: 'Full Stack',
    hasCode: true,
    hasDemo: true,
    hasVideo: false,
    hasDescription: false,
    image: '/api/placeholder/300/200'
  },
  {
    id: 2,
    title: 'Proyecto 2', 
    description: 'Descripción asociada al proyecto actual',
    category: 'Full Stack',
    hasCode: true,
    hasDemo: true,
    hasVideo: false,
    hasDescription: false,
    image: '/api/placeholder/300/200'
  },
  {
    id: 3,
    title: 'Proyecto 3',
    description: 'Proyecto sin enlace a código fuente',
    category: 'Frontend',
    hasCode: false,
    hasDemo: true,
    hasVideo: true,
    hasDescription: true,
    image: '/api/placeholder/300/200'
  },
  {
    id: 4,
    title: 'Proyecto 4',
    description: 'Descripción asociada al proyecto actual',
    category: 'Backend',
    hasCode: true,
    hasDemo: true,
    hasVideo: false,
    hasDescription: false,
    image: '/api/placeholder/300/200'
  },
  {
    id: 5,
    title: 'Proyecto 5',
    description: 'Descripción asociada al proyecto actual',
    category: 'Mobile',
    hasCode: true,
    hasDemo: true,
    hasVideo: false,
    hasDescription: false,
    image: '/api/placeholder/300/200'
  },
  {
    id: 6,
    title: 'Proyecto 6',
    description: 'Descripción asociada al proyecto actual',
    category: 'Full Stack',
    hasCode: true,
    hasDemo: true,
    hasVideo: false,
    hasDescription: false,
    image: '/api/placeholder/300/200'
  }
]
</script>

<template>
  <section class="projects-container">
    <!-- Título de la sección -->
    <div class="projects-header">
      <h2 class="projects-title">Projects</h2>
    </div>

    <!-- Filtros de categorías -->
    <div class="filters-container">
      <div class="filters-wrapper">
        <button
          v-for="filter in filters"
          :key="filter"
          class="filter-button"
          :class="{ 'filter-active': filter === activeFilter }"
        >
          {{ filter }}
        </button>
      </div>
    </div>

    <!-- Grid de proyectos -->
    <div class="projects-grid">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card"
      >
        <!-- Imagen del proyecto -->
        <div class="project-image">
          <div class="project-placeholder">
            <!-- Placeholder para imagen -->
          </div>
        </div>

        <!-- Contenido del proyecto -->
        <div class="project-content">
          <!-- Título y descripción -->
          <div class="project-info">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
          </div>

          <!-- Tecnologías/Tags (círculos blancos como en el mockup) -->
          <div class="project-tags">
            <div class="tag-circle"></div>
            <div class="tag-circle"></div>
            <div class="tag-circle" v-if="project.id === 3"></div>
          </div>

          <!-- Botones de acción -->
          <div class="project-actions">
            <!-- Botón Código -->
            <button 
              v-if="project.hasCode"
              class="action-button action-primary"
            >
              <FontAwesomeIcon :icon="faCode" class="action-icon" />
              Código
            </button>

            <!-- Botón Proyecto/Demo -->
            <button 
              v-if="project.hasDemo"
              class="action-button action-primary"
            >
              <FontAwesomeIcon :icon="faExternalLinkAlt" class="action-icon" />
              Proyecto
            </button>

            <!-- Botón Video (solo proyecto 3) -->
            <button 
              v-if="project.hasVideo"
              class="action-button action-secondary"
            >
              <FontAwesomeIcon :icon="faPlay" class="action-icon" />
              Video
            </button>

            <!-- Botón Descripción (solo proyecto 3) -->
            <button 
              v-if="project.hasDescription"
              class="action-button action-secondary"
            >
              <FontAwesomeIcon :icon="faFileText" class="action-icon" />
              Descripción
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Línea separadora -->
    <div class="projects-divider"></div>
  </section>
</template>

<style scoped>
.projects-container {
  width: 100%;
  background-color: var(--color-night);
  padding: 4rem 0;
}

/* Header */
.projects-header {
  text-align: center;
  margin-bottom: 3rem;
}

.projects-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-davy-gray-50);
  margin: 0;
}

/* Filtros */
.filters-container {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  padding: 0 2rem;
}

.filters-wrapper {
  display: flex;
  align-items: center;
  background-color: var(--color-gunmetal);
  border: 1px solid var(--color-rich-black);
  border-radius: 8px;
  padding: 4px;
  gap: 1px;
}

.filter-button {
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  color: var(--color-davy-gray-200);
  font-size: 1rem;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.filter-button:hover {
  color: var(--color-davy-gray-50);
  background-color: var(--color-rich-black);
}

.filter-active {
  background-color: var(--color-lapis) !important;
  color: white !important;
}

/* Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Project Card */
.project-card {
  background-color: var(--color-gunmetal);
  border: 1px solid var(--color-rich-black);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-lapis);
  box-shadow: 0 8px 25px rgba(41, 101, 135, 0.15);
}

/* Project Image */
.project-image {
  width: 100%;
  height: 200px;
  background-color: var(--color-rich-black);
  border-bottom: 1px solid var(--color-rich-black);
}

.project-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--color-rich-black) 0%, var(--color-gunmetal) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.project-placeholder::before {
  content: '';
  width: 60px;
  height: 60px;
  background-color: var(--color-davy-gray-300);
  border-radius: 6px;
  opacity: 0.3;
}

/* Project Content */
.project-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-info {
  flex: 1;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-davy-gray-50);
  margin: 0 0 0.5rem 0;
}

.project-description {
  font-size: 0.875rem;
  color: var(--color-davy-gray-200);
  line-height: 1.5;
  margin: 0;
}

/* Project Tags */
.project-tags {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.tag-circle {
  width: 12px;
  height: 12px;
  background-color: var(--color-davy-gray-50);
  border-radius: 50%;
  opacity: 0.7;
}

/* Project Actions */
.project-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-lapis);
  border-radius: 6px;
  background: none;
  color: var(--color-lapis);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.action-primary:hover {
  background-color: var(--color-lapis);
  color: white;
}

.action-secondary {
  border-color: var(--color-davy-gray-300);
  color: var(--color-davy-gray-300);
}

.action-secondary:hover {
  background-color: var(--color-davy-gray-300);
  color: var(--color-night);
}

.action-icon {
  font-size: 0.75rem;
}

/* Divider */
.projects-divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-rich-black);
  margin-top: 4rem;
}

/* Responsive */
@media (max-width: 768px) {
  .projects-container {
    padding: 3rem 0;
  }
  
  .projects-title {
    font-size: 1.75rem;
  }
  
  .filters-wrapper {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .filter-button {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
  
  .project-content {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .projects-header {
    margin-bottom: 2rem;
  }
  
  .projects-title {
    font-size: 1.5rem;
  }
  
  .filters-container {
    margin-bottom: 2rem;
  }
  
  .project-actions {
    gap: 0.5rem;
  }
  
  .action-button {
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
  }
  
  .action-icon {
    font-size: 0.625rem;
  }
}

/* Animaciones */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card {
  animation: fadeInUp 0.6s ease-out forwards;
}

.project-card:nth-child(2) { animation-delay: 0.1s; }
.project-card:nth-child(3) { animation-delay: 0.2s; }
.project-card:nth-child(4) { animation-delay: 0.3s; }
.project-card:nth-child(5) { animation-delay: 0.4s; }
.project-card:nth-child(6) { animation-delay: 0.5s; }
</style>