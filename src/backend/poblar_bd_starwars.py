from sqlalchemy import Column, Integer, String, DateTime, create_engine, Text  # Cambia aquí a Text
from sqlalchemy.orm import declarative_base, sessionmaker
from werkzeug.security import generate_password_hash
from datetime import datetime
import requests
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
from models import Usuario, Planeta, Personaje, FavoritoPlaneta, FavoritoPersonaje, FavoritoVehiculo, Vehiculo

# URL de conexión MySQL
engine = create_engine('mysql+pymysql://starwars_admin:12345@localhost/starwars', echo=True)

# Crea las tablas
from models import Base
Base.metadata.create_all(bind=engine)

# Crea una sesión de base de datos
Session = sessionmaker(bind=engine)
session = Session()

# Obtén la fecha y hora actuales
fecha_actual = datetime.utcnow()

# Agregar un usuario administrador
admin_user = Usuario(
    email='admin@example.com',
    password=generate_password_hash('admin_password'),  # Asegúrate de utilizar una contraseña segura
    fecha_subscripcion=fecha_actual.isoformat() + 'Z',  # Utiliza la fecha y hora actuales
    nombre='Admin',
    apellido='User'
)

session.add(admin_user)
session.commit()

# Función para obtener datos de la API por URL específica
def obtener_datos_por_url(url):
    respuesta = requests.get(url)
    datos = respuesta.json()
    return datos.get('result', {}).get('properties', {})

# Función para poblar la base de datos con elementos de una categoría específica
def poblar_categoria(url_categoria, clase_modelo):
    respuesta = requests.get(url_categoria)
    datos_categoria = respuesta.json()

    if not datos_categoria or 'results' not in datos_categoria:
        print(f'No se pudieron obtener datos para la categoría: {url_categoria}')
        return

    for resultado in datos_categoria['results']:
        url_elemento = resultado['url']
        datos_elemento = obtener_datos_por_url(url_elemento)

        if not datos_elemento:
            print(f'No se pudieron obtener datos para el elemento: {url_elemento}')
            continue

        session.add(clase_modelo(
            **datos_elemento
        ))
    session.commit()

# URL de la categoría de planetas
url_planetas = 'https://www.swapi.tech/api/planets'
poblar_categoria(url_planetas, Planeta)

# URL de la categoría de personajes
url_personajes = 'https://www.swapi.tech/api/people'
poblar_categoria(url_personajes, Personaje)

# URL de la categoría de vehículos
url_vehiculos = 'https://www.swapi.tech/api/vehicles'
poblar_categoria(url_vehiculos, Vehiculo)



















