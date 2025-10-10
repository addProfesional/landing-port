# =============================
# 1️⃣ Etapa de construcción
# =============================
FROM node:20-alpine AS builder

# Crear directorio de la app
WORKDIR /app

# Copiar dependencias e instalar
COPY package*.json ./
RUN npm install

# Copiar el resto del código y construir
COPY . .
RUN npm run build

# =============================
# 2️⃣ Etapa de ejecución
# =============================
FROM nginx:1.27-alpine

# Copiar build al contenedor Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración personalizada (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]