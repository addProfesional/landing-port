<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Importar iconos específicos del Footer
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons'

// Año actual
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer-container">
    <!-- Contenido principal del footer -->
    <div class="footer-content">
      <!-- Sección izquierda - Logo y descripción -->
      <div class="footer-brand">
        <div class="footer-logo">
          <h3 class="logo-text">My Portfolio</h3>
        </div>
        <p class="footer-description">
          Desarrollador Full Stack especializado en tecnologías modernas
          y soluciones innovadoras.
        </p>
      </div>

      <!-- Sección central - Enlaces -->
      <div class="footer-links">
        <h4 class="links-title">Navegación</h4>
        <ul class="links-list">
          <li class="link-item">
            <a href="#projects" class="footer-link">Projects</a>
          </li>
          <li class="link-item">
            <a href="#about" class="footer-link">About</a>
          </li>
          <li class="link-item">
            <a href="#contact" class="footer-link">Contact</a>
          </li>
        </ul>
      </div>

      <!-- Sección derecha - Redes sociales -->
      <div class="footer-social">
        <h4 class="social-title">Sígueme</h4>
        <div class="social-icons">
          <a href="#" class="social-link" aria-label="GitHub">
            <FontAwesomeIcon :icon="faGithub" class="social-icon" />
          </a>
          <a href="#" class="social-link" aria-label="LinkedIn">
            <FontAwesomeIcon :icon="faLinkedin" class="social-icon" />
          </a>
          <a href="#" class="social-link" aria-label="Twitter">
            <FontAwesomeIcon :icon="faTwitter" class="social-icon" />
          </a>
          <a href="#" class="social-link" aria-label="Email">
            <FontAwesomeIcon :icon="faEnvelope" class="social-icon" />
          </a>
        </div>
      </div>
    </div>

    <!-- Línea separadora -->
    <div class="footer-divider"></div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <p class="copyright-text">
        © {{ currentYear }} My Portfolio. Hecho con 
        <FontAwesomeIcon :icon="faHeart" class="heart-icon" />
        usando Vue.js + TailwindCSS
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  width: 100%;
  background-color: var(--color-rich-black);
  border-top: 1px solid var(--color-gunmetal);
}

/* Footer Content */
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

/* Footer Brand */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-davy-gray-50);
  margin: 0;
}

.footer-description {
  color: var(--color-davy-gray-200);
  line-height: 1.6;
  margin: 0;
  max-width: 300px;
}

/* Footer Links */
.footer-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.links-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-davy-gray-50);
  margin: 0 0 0.5rem 0;
}

.links-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.link-item {
  margin: 0;
}

.footer-link {
  color: var(--color-davy-gray-200);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--color-lapis);
}

/* Footer Social */
.footer-social {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-davy-gray-50);
  margin: 0 0 0.5rem 0;
}

.social-icons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--color-gunmetal);
  border: 1px solid var(--color-night);
  border-radius: 8px;
  color: var(--color-davy-gray-200);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--color-lapis);
  border-color: var(--color-lapis);
  color: white;
  transform: translateY(-2px);
}

.social-icon {
  font-size: 1.125rem;
}

/* Footer Divider */
.footer-divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-gunmetal);
}

/* Footer Bottom */
.footer-bottom {
  padding: 1.5rem 2rem;
  text-align: center;
}

.copyright-text {
  color: var(--color-davy-gray-300);
  font-size: 0.875rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;
}

.heart-icon {
  color: #ef4444;
  animation: heartbeat 2s ease-in-out infinite;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 1rem 1.5rem;
    text-align: center;
  }
  
  .footer-brand {
    align-items: center;
  }
  
  .footer-description {
    text-align: center;
    max-width: none;
  }
  
  .links-list {
    align-items: center;
  }
  
  .social-icons {
    justify-content: center;
  }
  
  .copyright-text {
    font-size: 0.8rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 1.5rem 1rem;
  }
  
  .footer-bottom {
    padding: 1rem;
  }
  
  .social-link {
    width: 36px;
    height: 36px;
  }
  
  .social-icon {
    font-size: 1rem;
  }
}

/* Animaciones */
@keyframes heartbeat {
  0%, 50%, 100% {
    transform: scale(1);
  }
  25%, 75% {
    transform: scale(1.1);
  }
}

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

.footer-brand {
  animation: fadeInUp 0.8s ease-out;
}

.footer-links {
  animation: fadeInUp 0.8s ease-out 0.1s both;
}

.footer-social {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}
</style>