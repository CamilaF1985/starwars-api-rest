from sqlalchemy import Column, Integer, String, Text, DateTime, JSON, ForeignKey
from sqlalchemy.orm import declarative_base, sessionmaker
from datetime import datetime

Base = declarative_base()

class Usuario(Base):
    __tablename__ = 'usuario'
    id = Column(Integer, primary_key=True)
    email = Column(String(250), unique=True, nullable=False)
    password = Column(String(250), nullable=False)
    fecha_subscripcion = Column(String(50), nullable=False)
    nombre = Column(String(250), nullable=False)
    apellido = Column(String(250), nullable=False)

class Planeta(Base):
    __tablename__ = 'planeta'
    id = Column(Integer, primary_key=True)
    diameter = Column(String(10), nullable=True)
    rotation_period = Column(String(10), nullable=True)
    orbital_period = Column(String(10), nullable=True)
    gravity = Column(String(255), nullable=True)
    population = Column(String(20), nullable=True)
    climate = Column(String(255), nullable=True)
    terrain = Column(String(255), nullable=True)
    surface_water = Column(String(10), nullable=True)
    name = Column(String(255), unique=True, nullable=True)
    url = Column(String(255), nullable=True)
    created = Column(String(50), nullable=False, default=datetime.utcnow().isoformat())
    edited = Column(String(50), nullable=False, default=datetime.utcnow().isoformat())

class Personaje(Base):
    __tablename__ = 'personaje'
    id = Column(Integer, primary_key=True)
    height = Column(String(10), nullable=True)
    mass = Column(String(10), nullable=True)
    hair_color = Column(String(255), nullable=True)
    skin_color = Column(String(255), nullable=True)
    eye_color = Column(String(255), nullable=True)
    birth_year = Column(String(10), nullable=True)
    gender = Column(String(20), nullable=True)
    name = Column(String(255), unique=True, nullable=True)
    homeworld = Column(String(255), nullable=True) 
    url = Column(String(255), nullable=True)
    created = Column(String(50), nullable=False, default=datetime.utcnow().isoformat())
    edited = Column(String(50), nullable=False, default=datetime.utcnow().isoformat())

class FavoritoPlaneta(Base):
    __tablename__ = 'favorito_planeta'
    id = Column(Integer, primary_key=True)
    usuario_id = Column(Integer, ForeignKey('usuario.id'))
    planeta_id = Column(Integer, ForeignKey('planeta.id'))

class FavoritoPersonaje(Base):
    __tablename__ = 'favorito_personaje'
    id = Column(Integer, primary_key=True)
    usuario_id = Column(Integer, ForeignKey('usuario.id'))
    personaje_id = Column(Integer, ForeignKey('personaje.id'))

class FavoritoVehiculo(Base):
    __tablename__ = 'favorito_vehiculo'
    id = Column(Integer, primary_key=True)
    usuario_id = Column(Integer, ForeignKey('usuario.id'))
    vehiculo_id = Column(Integer, ForeignKey('vehiculo.id'))

class Vehiculo(Base):
    __tablename__ = 'vehiculo'
    id = Column(Integer, primary_key=True)
    model = Column(String(255), nullable=True)
    vehicle_class = Column(String(255), nullable=True)
    manufacturer = Column(String(255), nullable=True)
    cost_in_credits = Column(String(20), nullable=True)
    length = Column(String(20), nullable=True)
    crew = Column(String(10), nullable=True)
    passengers = Column(String(10), nullable=True)
    max_atmosphering_speed = Column(String(10), nullable=True)
    cargo_capacity = Column(String(20), nullable=True)
    consumables = Column(String(255), nullable=True)
    films = Column(JSON, nullable=True, default=[])
    pilots = Column(JSON, nullable=True, default=[])
    created = Column(String(50), nullable=False, default=datetime.utcnow().isoformat())
    edited = Column(String(50), nullable=False, default=datetime.utcnow().isoformat())
    name = Column(String(255), unique=False, nullable=True)
    url = Column(String(255), nullable=True)












