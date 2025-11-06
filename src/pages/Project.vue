<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Importar iconos específicos de la página Projects
import { 
  faCode, 
  faExternalLinkAlt, 
  faPlay, 
  faFileText,
  faFilter,
  faTh,
  faList,
  faChevronDown,
  faSearch
} from '@fortawesome/free-solid-svg-icons'

// Estados para filtros y vista
const activeFilter = ref('Todos')
const viewMode = ref('grid') // 'grid' o 'list'
const searchQuery = ref('')
const sortBy = ref('fecha') // 'fecha', 'nombre', 'categoria'
const showFilters = ref(false)

// Filtros disponibles
const filters = ['Todos', 'Frontend', 'Backend', 'Full Stack', 'Mobile', 'API', 'DevOps']
const sortOptions = [
  { value: 'fecha', label: 'Fecha' },
  { value: 'nombre', label: 'Nombre' },
  { value: 'categoria', label: 'Categoría' }
]

// Proyectos expandidos (más que en el grid principal)
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electrónico completa con panel de administración, carrito de compras, pagos integrados y sistema de inventario.',
    category: 'Full Stack',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    hasCode: true,
    hasDemo: true,
    hasVideo: true,
    hasDescription: true,
    featured: true,
    date: '2024-11',
    image: '/api/placeholder/400/250'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real, notificaciones push y sincronización offline.',
    category: 'Frontend',
    technologies: ['React', 'TypeScript', 'Firebase', 'PWA'],
    hasCode: true,
    hasDemo: true,
    hasVideo: false,
    hasDescription: true,
    featured: false,
    date: '2024-10',
    image: '/api/placeholder/400/250'
  },
  {
    id: 3,
    title: 'REST API Microservices',
    description: 'Arquitectura de microservicios escalable con autenticación JWT, rate limiting, documentación automática y monitoreo.',
    category: 'Backend',
    technologies: ['Node.js', 'Express', 'Docker', 'Redis'],
    hasCode: true,
    hasDemo: false,
    hasVideo: true,
    hasDescription: true,
    featured: true,
    date: '2024-09',
    image: '/api/placeholder/400/250'
  },
  {
    id: 4,
    title: 'Mobile Fitness Tracker',
    description: 'Aplicación móvil para seguimiento de ejercicios con integración de sensores, GPS tracking y gamificación.',
    category: 'Mobile',
    technologies: ['React Native', 'Expo', 'SQLite', 'Maps API'],
    hasCode: true,
    hasDemo: true,
    hasVideo: true,
    hasDescription: true,
    featured: false,
    date: '2024-08',
    image: '/api/placeholder/400/250'
  },
  {
    id: 5,
    title: 'Analytics Dashboard',
    description: 'Dashboard interactivo para visualización de datos con gráficos en tiempo real, filtros avanzados y exportación de reportes.',
    category: 'Frontend',
    technologies: ['Vue.js', 'D3.js', 'Chart.js', 'Tailwind'],
    hasCode: true,
    hasDemo: true,
    hasVideo: false,
    hasDescription: true,
    featured: false,
    date: '2024-07',
    image: '/api/placeholder/400/250'
  },
  {
    id: 6,
    title: 'DevOps Pipeline',
    description: 'Pipeline de CI/CD automatizado con testing, deployment y monitoreo integrado para aplicaciones containerizadas.',
    category: 'DevOps',
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'],
    hasCode: true,
    hasDemo: false,
    hasVideo: true,
    hasDescription: true,
    featured: true,
    date: '2024-06',
    image: '/api/placeholder/400/250'
  },
  {
    id: 7,
    title: 'Real-time Chat System',
    description: 'Sistema de chat en tiempo real con salas, mensajes privados, compartir archivos y moderación automática.',
    category: 'Full Stack',
    technologies: ['Socket.io', 'Vue.js', 'Express', 'PostgreSQL'],
    hasCode: true,
    hasDemo: true,
    hasVideo: false,
    hasDescription: true,
    featured: false,
    date: '2024-05',
    image: '/api/placeholder/400/250'
  },
  {
    id: 8,
    title: 'Machine Learning API',
    description: 'API para procesamiento de imágenes con machine learning, detección de objetos y clasificación automática.',
    category: 'API',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'OpenCV'],
    hasCode: false,
    hasDemo: true,
    hasVideo: true,
    hasDescription: true,
    featured: false,
    date: '2024-04',
    image: '/api/placeholder/400/250'
  }
]

// Funciones (sin lógica por ahora)
const toggleFilter = (filter: string) => {
  activeFilter.value = filter
}

const toggleViewMode = () => {
  viewMode.value = viewMode.value === 'grid' ? 'list' : 'grid'
}

const toggleFilters = () => {
  showFilters.value = !showFilters.value
}
</script>

<template>
  <div class="projects-page">
    <!-- Header de la página -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">Mis Proyectos</h1>
        <p class="page-subtitle">
          Explora mi portafolio completo de proyectos desarrollados con tecnologías modernas
        </p>
      </div>
    </div>

    <!-- Barra de herramientas -->
    <div class="toolbar">
      <div class="toolbar-content">
        <!-- Buscador -->
        <div class="search-container">
          <div class="search-input-wrapper">
            <FontAwesomeIcon :icon="faSearch" class="search-icon" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Buscar proyectos..."
              class="search-input"
            />
          </div>
        </div>

        <!-- Controles -->
        <div class="toolbar-controls">
          <!-- Toggle de filtros -->
          <button 
            class="toolbar-button"
            @click="toggleFilters"
            :class="{ 'active': showFilters }"
          >
            <FontAwesomeIcon :icon="faFilter" class="button-icon" />
            Filtros
          </button>

          <!-- Selector de ordenamiento -->
          <div class="sort-container">
            <select v-model="sortBy" class="sort-select">
              <option 
                v-for="option in sortOptions" 
                :key="option.value" 
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
            <FontAwesomeIcon :icon="faChevronDown" class="sort-icon" />
          </div>

          <!-- Toggle de vista -->
          <button 
            class="toolbar-button view-toggle"
            @click="toggleViewMode"
          >
            <FontAwesomeIcon 
              :icon="viewMode === 'grid' ? faList : faTh" 
              class="button-icon" 
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Panel de filtros -->
    <div v-show="showFilters" class="filters-panel">
      <div class="filters-content">
        <h3 class="filters-title">Filtrar por categoría</h3>
        <div class="filters-grid">
          <button
            v-for="filter in filters"
            :key="filter"
            class="filter-chip"
            :class="{ 'filter-active': filter === activeFilter }"
            @click="toggleFilter(filter)"
          >
            {{ filter }}
          </button>
        </div>
      </div>
    </div>

    <!-- Grid/Lista de proyectos -->
    <div class="projects-container">
      <div 
        class="projects-grid" 
        :class="{ 
          'grid-view': viewMode === 'grid',
          'list-view': viewMode === 'list'
        }"
      >
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="project-card"
          :class="{ 
            'featured-card': project.featured,
            'list-card': viewMode === 'list'
          }"
        >
          <!-- Badge para proyectos destacados -->
          <div v-if="project.featured" class="featured-badge">
            Destacado
          </div>

          <!-- Imagen del proyecto -->
          <div class="project-image">
            <div class="project-placeholder">
              <!-- Placeholder mejorado -->
              <div class="placeholder-content">
                <div class="placeholder-icon"></div>
              </div>
            </div>
          </div>

          <!-- Contenido del proyecto -->
          <div class="project-content">
            <!-- Meta info -->
            <div class="project-meta">
              <span class="project-category">{{ project.category }}</span>
              <span class="project-date">{{ project.date }}</span>
            </div>

            <!-- Título y descripción -->
            <div class="project-info">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
            </div>

            <!-- Tecnologías -->
            <div class="project-technologies">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Botones de acción -->
            <div class="project-actions">
              <button 
                v-if="project.hasCode"
                class="action-button action-primary"
              >
                <FontAwesomeIcon :icon="faCode" class="action-icon" />
                Código
              </button>

              <button 
                v-if="project.hasDemo"
                class="action-button action-primary"
              >
                <FontAwesomeIcon :icon="faExternalLinkAlt" class="action-icon" />
                Demo
              </button>

              <button 
                v-if="project.hasVideo"
                class="action-button action-secondary"
              >
                <FontAwesomeIcon :icon="faPlay" class="action-icon" />
                Video
              </button>

              <button 
                v-if="project.hasDescription"
                class="action-button action-secondary"
              >
                <FontAwesomeIcon :icon="faFileText" class="action-icon" />
                Detalles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Paginación (placeholder) -->
    <div class="pagination-container">
      <div class="pagination">
        <button class="pagination-button" disabled>Anterior</button>
        <button class="pagination-button active">1</button>
        <button class="pagination-button">2</button>
        <button class="pagination-button">3</button>
        <button class="pagination-button">Siguiente</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-page {
  width: 100%;
  background-color: var(--color-night);
  min-height: 100vh;
  padding-bottom: 2rem;
}

/* Page Header */
.page-header {
  background: linear-gradient(135deg, var(--color-night) 0%, var(--color-rich-black) 100%);
  padding: 3rem 0;
  border-bottom: 1px solid var(--color-rich-black);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-davy-gray-50);
  margin: 0 0 1rem 0;
  line-height: 1.1;
}

.page-subtitle {
  font-size: 1.125rem;
  color: var(--color-davy-gray-200);
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* Toolbar */
.toolbar {
  background-color: var(--color-gunmetal);
  border-bottom: 1px solid var(--color-rich-black);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 10;
}

.toolbar-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

/* Search */
.search-container {
  flex: 1;
  min-width: 250px;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  color: var(--color-davy-gray-300);
  font-size: 0.875rem;
  z-index: 1;
}

.search-input {
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  background-color: var(--color-night);
  border: 1px solid var(--color-rich-black);
  border-radius: 8px;
  color: var(--color-davy-gray-50);
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--color-lapis);
  box-shadow: 0 0 0 2px rgba(41, 101, 135, 0.2);
}

.search-input::placeholder {
  color: var(--color-davy-gray-300);
}

/* Toolbar Controls */
.toolbar-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.toolbar-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: var(--color-night);
  border: 1px solid var(--color-rich-black);
  border-radius: 6px;
  color: var(--color-davy-gray-200);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.toolbar-button:hover {
  border-color: var(--color-lapis);
  color: var(--color-davy-gray-50);
}

.toolbar-button.active {
  background-color: var(--color-lapis);
  border-color: var(--color-lapis);
  color: white;
}

.button-icon {
  font-size: 0.75rem;
}

/* Sort Select */
.sort-container {
  position: relative;
}

.sort-select {
  appearance: none;
  padding: 0.75rem 2rem 0.75rem 1rem;
  background-color: var(--color-night);
  border: 1px solid var(--color-rich-black);
  border-radius: 6px;
  color: var(--color-davy-gray-200);
  font-size: 0.875rem;
  cursor: pointer;
  min-width: 120px;
}

.sort-select:focus {
  outline: none;
  border-color: var(--color-lapis);
}

.sort-icon {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-davy-gray-300);
  font-size: 0.75rem;
  pointer-events: none;
}

/* Filters Panel */
.filters-panel {
  background-color: var(--color-gunmetal);
  border-bottom: 1px solid var(--color-rich-black);
  padding: 1.5rem 0;
}

.filters-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.filters-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-davy-gray-50);
  margin: 0 0 1rem 0;
}

.filters-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.filter-chip {
  padding: 0.5rem 1rem;
  background-color: var(--color-night);
  border: 1px solid var(--color-rich-black);
  border-radius: 20px;
  color: var(--color-davy-gray-200);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-chip:hover {
  border-color: var(--color-lapis);
  color: var(--color-davy-gray-50);
}

.filter-active {
  background-color: var(--color-lapis) !important;
  border-color: var(--color-lapis) !important;
  color: white !important;
}

/* Projects Container */
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.projects-grid.grid-view {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.projects-grid.list-view {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Project Cards */
.project-card {
  background-color: var(--color-gunmetal);
  border: 1px solid var(--color-rich-black);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-lapis);
  box-shadow: 0 8px 25px rgba(41, 101, 135, 0.15);
}

.featured-card {
  border-color: var(--color-lapis);
  box-shadow: 0 4px 15px rgba(41, 101, 135, 0.1);
}

.list-card {
  display: flex;
  flex-direction: row;
  max-height: 200px;
}

.list-card .project-image {
  width: 300px;
  height: 200px;
  flex-shrink: 0;
}

.list-card .project-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Featured Badge */
.featured-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--color-lapis);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 1;
}

/* Project Image */
.project-image {
  width: 100%;
  height: 200px;
  background-color: var(--color-rich-black);
  border-bottom: 1px solid var(--color-rich-black);
  position: relative;
  overflow: hidden;
}

.project-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--color-rich-black) 0%, var(--color-gunmetal) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-content {
  text-align: center;
}

.placeholder-icon {
  width: 60px;
  height: 60px;
  background-color: var(--color-davy-gray-300);
  border-radius: 8px;
  opacity: 0.3;
}

/* Project Content */
.project-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.project-category {
  background-color: var(--color-lapis);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.project-date {
  color: var(--color-davy-gray-300);
  font-size: 0.75rem;
}

.project-info {
  flex: 1;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-davy-gray-50);
  margin: 0 0 0.75rem 0;
  line-height: 1.3;
}

.project-description {
  font-size: 0.875rem;
  color: var(--color-davy-gray-200);
  line-height: 1.5;
  margin: 0;
}

/* Technologies */
.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background-color: var(--color-night);
  border: 1px solid var(--color-rich-black);
  color: var(--color-davy-gray-200);
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Project Actions */
.project-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: auto;
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

/* Pagination */
.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  padding: 0 2rem;
}

.pagination {
  display: flex;
  gap: 0.5rem;
}

.pagination-button {
  padding: 0.75rem 1rem;
  background-color: var(--color-gunmetal);
  border: 1px solid var(--color-rich-black);
  border-radius: 6px;
  color: var(--color-davy-gray-200);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-button:hover:not(:disabled) {
  border-color: var(--color-lapis);
  color: var(--color-davy-gray-50);
}

.pagination-button.active {
  background-color: var(--color-lapis);
  border-color: var(--color-lapis);
  color: white;
}

.pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Responsive */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .toolbar-content {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .toolbar-controls {
    justify-content: space-between;
  }
  
  .projects-grid.grid-view {
    grid-template-columns: 1fr;
  }
  
  .list-card {
    flex-direction: column;
    max-height: none;
  }
  
  .list-card .project-image {
    width: 100%;
  }
  
  .projects-container {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .page-header {
    padding: 2rem 0;
  }
  
  .header-content {
    padding: 0 1rem;
  }
  
  .page-title {
    font-size: 1.75rem;
  }
  
  .toolbar-controls {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .toolbar-button {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
  }
  
  .project-content {
    padding: 1rem;
  }
  
  .action-button {
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
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
.project-card:nth-child(7) { animation-delay: 0.6s; }
.project-card:nth-child(8) { animation-delay: 0.7s; }
</style>