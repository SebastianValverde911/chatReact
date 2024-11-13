# Usa una imagen base de Node.js 
FROM node:16 

# Establece el directorio de trabajo en el contenedor 
WORKDIR /app 

# Copia el package.json y package-lock.json al directorio de trabajo 
COPY package*.json ./ 

# Instala las dependencias 
RUN npm install 

# Copia el resto del código de la aplicación al directorio de trabajo 
COPY . . 

# Expone el puerto en el que la aplicación se ejecutará 
EXPOSE 4000 

# Define el comando para ejecutar la aplicación 
CMD ["npm", "start"]