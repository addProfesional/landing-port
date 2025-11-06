
<script setup lang="ts">
import { ref } from 'vue'

// Estados del formulario (sin lógica por ahora)
const formData = ref({
  fullName: 'Juan Perez',
  email: 'juan@contoso.com',
  company: 'Contoso S.A de C.V',
  message: ''
})
</script>

<template>
  <section class="contact-container">
    <!-- Título de la sección -->
    <div class="contact-header">
      <h2 class="contact-title">Contacto</h2>
    </div>

    <!-- Contenido principal -->
    <div class="contact-content">
      <!-- Descripción -->
      <div class="contact-description">
        <h3 class="description-title">Datos de contacto</h3>
        <p class="description-text">
          Por favor envíe su contacto para responderle
        </p>
      </div>

      <!-- Formulario -->
      <div class="contact-form-container">
        <form class="contact-form">
          <!-- Nombre completo -->
          <div class="form-group">
            <label for="fullName" class="form-label">Nombre completo *</label>
            <input
              id="fullName"
              v-model="formData.fullName"
              type="text"
              class="form-input"
              placeholder="Juan Perez"
            />
          </div>

          <!-- Email -->
          <div class="form-group">
            <label for="email" class="form-label">Email *</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              class="form-input"
              placeholder="juan@contoso.com"
            />
          </div>

          <!-- Empresa -->
          <div class="form-group">
            <label for="company" class="form-label">Empresa</label>
            <input
              id="company"
              v-model="formData.company"
              type="text"
              class="form-input"
              placeholder="Contoso S.A de C.V"
            />
          </div>

          <!-- Mensaje -->
          <div class="form-group">
            <label for="message" class="form-label">Mensaje</label>
            <textarea
              id="message"
              v-model="formData.message"
              class="form-textarea"
              rows="5"
              placeholder="Escriba su mensaje aquí..."
            ></textarea>
          </div>

          <!-- Botón de envío -->
          <div class="form-actions">
            <button type="submit" class="submit-button">
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Línea separadora -->
    <div class="contact-divider"></div>
  </section>
</template>

<style scoped>
.contact-container {
  width: 100%;
  background-color: var(--color-night);
  padding: 4rem 0;
}

/* Header */
.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-davy-gray-50);
  margin: 0;
}

/* Content */
.contact-content {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Description */
.contact-description {
  text-align: left;
  margin-bottom: 2rem;
}

.description-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-davy-gray-50);
  margin: 0 0 1rem 0;
}

.description-text {
  font-size: 1.125rem;
  color: var(--color-davy-gray-200);
  line-height: 1.5;
  margin: 0;
}

/* Form */
.contact-form-container {
  background-color: var(--color-gunmetal);
  border: 1px solid var(--color-rich-black);
  border-radius: 12px;
  padding: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-davy-gray-100);
}

.form-input,
.form-textarea {
  padding: 0.75rem;
  background-color: var(--color-night);
  border: 1px solid var(--color-rich-black);
  border-radius: 6px;
  color: var(--color-davy-gray-50);
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-lapis);
  box-shadow: 0 0 0 2px rgba(41, 101, 135, 0.2);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--color-davy-gray-300);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
}

/* Submit Button */
.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.submit-button {
  padding: 0.875rem 2rem;
  background-color: var(--color-lapis);
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 150px;
}

.submit-button:hover {
  background-color: var(--color-lapis-300);
  transform: translateY(-2px);
}

.submit-button:active {
  transform: translateY(0);
}

/* Divider */
.contact-divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-rich-black);
  margin-top: 4rem;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-container {
    padding: 3rem 0;
  }
  
  .contact-title {
    font-size: 1.75rem;
  }
  
  .contact-content {
    padding: 0 1rem;
  }
  
  .contact-form-container {
    padding: 1.5rem;
  }
  
  .description-title {
    font-size: 1.25rem;
  }
  
  .description-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .contact-header {
    margin-bottom: 2rem;
  }
  
  .contact-title {
    font-size: 1.5rem;
  }
  
  .contact-form-container {
    padding: 1rem;
  }
  
  .form-input,
  .form-textarea {
    padding: 0.625rem;
  }
  
  .submit-button {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}

/* Animaciones */
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

.contact-description {
  animation: fadeInUp 0.8s ease-out;
}

.contact-form-container {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}
</style>