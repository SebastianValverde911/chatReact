FROM node:16

# Define la carpeta de trabajo
WORKDIR /app

# Copia los archivos necesarios desde `back-chat`
COPY back-chat/package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de `back-chat`
COPY back-chat .

# Expone el puerto
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["node", "api-chat.js"]
