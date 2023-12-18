# Star Wars Blog

Este repositorio contiene una aplicación web llamada Star Wars Blog, que proporciona información sobre personajes, planetas y vehículos de Star Wars. La aplicación está implementada como una API RESTful con un backend en Flask (Python) y un frontend en React.

## Requisitos

Asegúrate de tener las siguientes versiones de herramientas instaladas en tu sistema antes de ejecutar la aplicación:

- **Python:** La aplicación requiere Python 3.12.1 o superior.

- **Node.js:** El frontend de la aplicación está desarrollado en React y requiere Node.js. La versión recomendada es v18.18.0.

- **npm:** El administrador de paquetes de Node.js es necesario para instalar las dependencias del frontend. La versión recomendada es 9.8.1.

- **MySQL:** La aplicación utiliza MySQL como motor de base de datos. Asegúrate de tener un servidor MySQL en ejecución antes de configurar y ejecutar la aplicación.

Asegúrate de tener estas versiones instaladas correctamente antes de seguir con las instrucciones de uso.

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
