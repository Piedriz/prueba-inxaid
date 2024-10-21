# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json a /app
COPY package.json package-lock.json ./

# Configura el tiempo de espera y reintentos para npm
RUN npm config set fetch-retries 5
RUN npm config set fetch-timeout 60000

# Instala las dependencias usando npm
RUN npm install --legacy-peer-deps

# Copia el resto del código de la aplicación a /app
COPY . .

# Construye el proyecto (solo necesario si estás en producción)
RUN npm run build || true

# Expone el puerto 3000
EXPOSE 3000

# Comando por defecto para iniciar el servidor Next.js
CMD ["npm", "start"]
