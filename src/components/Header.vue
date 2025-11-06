<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Importar iconos específicos del Header
import { faCube, faSun, faMoon, faGlobe } from '@fortawesome/free-solid-svg-icons'

// Theme toggle state (sin lógica por ahora)
const isDarkMode = ref(true)

// Hamburger menu state para responsive
const isMenuOpen = ref(false)
</script>

<template>
  <header class="header-container">
    <nav class="nav-container">
      <!-- Logo y título -->
      <div class="logo-section">
        <div class="logo-icon">
          <FontAwesomeIcon :icon="faCube" class="cube-icon" />
        </div>
        <h1 class="portfolio-title">My Portfolio</h1>
      </div>

      <!-- Menú de navegación -->
      <div class="nav-menu" :class="{ 'nav-menu-open': isMenuOpen }">
        <ul class="menu-list">
          <li class="menu-item">
            <a href="#projects" class="menu-link">Projects</a>
          </li>
          <li class="menu-item">
            <a href="#about" class="menu-link">About</a>
          </li>
          <li class="menu-item">
            <a href="#contact" class="menu-link">Contact</a>
          </li>
        </ul>

        <!-- Controles del lado derecho -->
        <div class="controls-section">
          <!-- Toggle Dark/Light mode -->
          <div class="theme-toggle">
            <div class="toggle-container">
              <button class="toggle-button" :class="{ 'toggle-active': isDarkMode }">
                <div class="toggle-track">
                  <div class="toggle-thumb" :class="{ 'toggle-thumb-active': isDarkMode }">
                    <FontAwesomeIcon 
                      :icon="isDarkMode ? faMoon : faSun" 
                      class="toggle-icon"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>

          <!-- Language/Globe button -->
          <div class="language-section">
            <FontAwesomeIcon :icon="faGlobe" class="globe-icon" />
          </div>
        </div>
      </div>

      <!-- Hamburger menu para móvil -->
      <div class="hamburger-menu">
        <button 
          class="hamburger-button" 
          @click="isMenuOpen = !isMenuOpen"
          :class="{ 'hamburger-active': isMenuOpen }"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </nav>

    <!-- Línea separadora -->
    <div class="header-divider"></div>
  </header>
</template>

<style scoped>
.header-container {
  width: 100%;
  background-color: var(--color-night);
  border-bottom: 1px solid var(--color-rich-black);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 60px;
}

/* Logo Section */
.logo-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--color-lapis);
  border-radius: 8px;
}

.cube-icon {
  color: white;
  font-size: 1.25rem;
}

.portfolio-title {
  color: var(--color-davy-gray-50);
  font-size: 1.875rem;
  font-weight: 700;
  margin: 0;
}

/* Navigation Menu */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.menu-list {
  display: flex;
  align-items: center;
  gap: 3rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-item {
  display: flex;
  align-items: center;
}

.menu-link {
  color: var(--color-davy-gray-100);
  font-size: 1.125rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  padding: 0.5rem 0;
}

.menu-link:hover {
  color: var(--color-lapis);
}

/* Controls Section */
.controls-section {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* Theme Toggle */
.theme-toggle {
  display: flex;
  align-items: center;
}

.toggle-container {
  position: relative;
}

.toggle-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.toggle-track {
  width: 60px;
  height: 32px;
  background-color: var(--color-gunmetal);
  border: 2px solid var(--color-rich-black);
  border-radius: 20px;
  position: relative;
  transition: all 0.3s ease;
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  background-color: var(--color-davy-gray-50);
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-thumb-active {
  transform: translateX(28px);
  background-color: var(--color-lapis);
}

.toggle-icon {
  font-size: 0.75rem;
  color: var(--color-night);
}

/* Language Section */
.language-section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
  cursor: pointer;
}

.language-section:hover {
  background-color: var(--color-gunmetal);
}

.globe-icon {
  color: var(--color-davy-gray-100);
  font-size: 1.25rem;
}

/* Header Divider */
.header-divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-rich-black);
}

/* Hamburger Menu - Hidden by default */
.hamburger-menu {
  display: none;
}

.hamburger-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background-color: var(--color-davy-gray-100);
  transition: all 0.3s ease;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-container {
    padding: 1rem;
  }
  
  .portfolio-title {
    font-size: 1.5rem;
  }
  
  .nav-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--color-night);
    border-top: 1px solid var(--color-rich-black);
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
  
  .nav-menu-open {
    display: flex;
  }
  
  .menu-list {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
  
  .controls-section {
    justify-content: center;
    width: 100%;
  }
  
  .hamburger-menu {
    display: block;
  }
  
  .hamburger-active .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .hamburger-active .hamburger-line:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger-active .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}

@media (max-width: 480px) {
  .logo-section {
    gap: 0.5rem;
  }
  
  .logo-icon {
    width: 32px;
    height: 32px;
  }
  
  .portfolio-title {
    font-size: 1.25rem;
  }
  
  .cube-icon {
    font-size: 1rem;
  }
}
</style>