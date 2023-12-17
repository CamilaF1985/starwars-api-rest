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

### 1. Clonar el Repositorio

git clone https://github.com/CamilaF1985/starwars-api-rest.git
cd starwars-api-rest

### 2. Instalar Dependencias del Frontend

cd ../frontend
npm install


### 3. Instalar dependencias del Backend

cd src/backend
pip install -r requirements.txt

### 4. Configuración de la Base de Datos Local

Asegúrate de tener un servidor MySQL en ejecución. Puedes utilizar el siguiente comando para crear la base de datos y un usuario administrador:

CREATE DATABASE IF NOT EXISTS starwars;<br>
CREATE USER 'starwars_admin'@'localhost' IDENTIFIED BY '12345';<br>
GRANT ALL PRIVILEGES ON starwars.* TO 'starwars_admin'@'localhost';<br>
FLUSH PRIVILEGES;

### 5. Crear y Poblar la Base de Datos

Ejecutar el script poblar_bd_starwars.py en la carpeta src/backend para crear las tablas y poblar la base de datos.
python poblar_bd_starwars.py

### 6. Ejecutar la Aplicación

npm start

La aplicación estará disponible en http://localhost:5000 para el frontend y en http://localhost:3000 para el backend.

### Notas Adicionales

La carpeta node_modules del frontend está en el archivo .gitignore. Por lo tanto, es necesario instalar las dependencias del frontend utilizando el comando npm install dentro de la carpeta src.

La aplicación ejecutará tanto el backend como el frontend con el comando npm start. Asegúrate de que el backend esté en ejecución antes de iniciar el frontend.