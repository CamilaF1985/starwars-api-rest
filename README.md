# Star Wars Blog

Este repositorio contiene una aplicación web llamada Star Wars Blog, que proporciona información sobre personajes, planetas y vehículos de Star Wars. La aplicación está implementada como una API RESTful con un backend en Flask (Python) y un frontend en React.

## Tecnologías Utilizadas

- **Backend:**
  - Flask
  - SQLAlchemy
  - Flask-RESTful
  - Flask-CORS
  - Werkzeug

- **Frontend:**
  - React
  - Axios (para realizar solicitudes HTTP)

## Instrucciones de Uso

### 1. Configuración de la Base de Datos Local

Asegúrate de tener un servidor MySQL en ejecución. Puedes utilizar el siguiente comando para crear la base de datos y un usuario administrador:

CREATE DATABASE IF NOT EXISTS starwars;<br>
CREATE USER 'starwars_admin'@'localhost' IDENTIFIED BY '12345';<br>
GRANT ALL PRIVILEGES ON starwars.* TO 'starwars_admin'@'localhost';<br>
FLUSH PRIVILEGES;

### 2. Clonar el Repositorio

git clone https://github.com/CamilaF1985/starwars-api-rest.git<br>
cd starwars-api-rest

### 3. Instalar Dependencias del Frontend

cd src<br>
npm install

### 4. Ejecutar la Aplicación

El siguiente comando iniciará tanto el backend como el frontend, instalará las dependencias del backend, creará las tablas solo si no existen, y poblará la base de datos automáticamente:

npm start

La aplicación estará disponible en http://localhost:5000 para el frontend y en http://localhost:3000 para el backend.

### Notas Adicionales

La carpeta node_modules del frontend está en el archivo .gitignore. Por lo tanto, es necesario instalar las dependencias del frontend manualmente.
La aplicación ejecutará tanto el backend como el frontend con el comando npm start. Asegúrate de que el backend esté en ejecución antes de iniciar el frontend.
