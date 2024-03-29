from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_restful import Api, Resource
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Usuario, FavoritoPlaneta, FavoritoPersonaje, FavoritoVehiculo, Planeta, Personaje, Vehiculo

# Crea una instancia de la aplicación Flask
app = Flask(__name__)
# Habilita CORS para permitir solicitudes desde cualquier origen a la API
CORS(app, resources={r"/api/*": {"origins": "*"}})
# Crea una instancia de la API de Flask-RESTful
api = Api(app)

# URL de conexión MySQL
engine = create_engine('mysql+pymysql://starwars_admin:12345@localhost/starwars', echo=True)

# Crea una sesión de base de datos
Session = sessionmaker(bind=engine)

# Define el recurso para obtener información de personajes
class PersonajesResource(Resource):
    def get(self, personaje_id=None):
        session = Session()
        try:
            if personaje_id is not None:
                personaje = session.query(Personaje).filter_by(id=personaje_id).first()
                if personaje:
                    return {
                        "id": personaje.id,
                        "name": personaje.name,
                        "height": personaje.height,
                        "mass": personaje.mass,
                        "hair_color": personaje.hair_color,
                        "skin_color": personaje.skin_color,
                        "eye_color": personaje.eye_color,
                        "birth_year": personaje.birth_year,
                        "gender": personaje.gender,
                        "homeworld": personaje.homeworld,
                        "url": personaje.url,
                        "created": personaje.created,
                        "edited": personaje.edited
                    }, 200
                return {"message": "Personaje no encontrado"}, 404
            else:
                personajes_list = session.query(Personaje).all()
                result = [
                    {
                        "id": personaje.id,
                        "name": personaje.name,
                        "height": personaje.height,
                        "mass": personaje.mass,
                        "hair_color": personaje.hair_color,
                        "skin_color": personaje.skin_color,
                        "eye_color": personaje.eye_color,
                        "birth_year": personaje.birth_year,
                        "gender": personaje.gender,
                        "homeworld": personaje.homeworld,
                        "url": personaje.url,
                        "created": personaje.created,
                        "edited": personaje.edited
                    } 
                    for personaje in personajes_list
                ]
                return result, 200
        finally:
            session.close()

# Define el recurso para obtener información de planetas
class PlanetasResource(Resource):
    def get(self, planeta_id=None):
        session = Session()
        try:
            if planeta_id:
                planeta = session.query(Planeta).filter_by(id=planeta_id).first()
                if planeta:
                    return {
                        "id": planeta.id,
                        "name": planeta.name,
                        "diameter": planeta.diameter,
                        "rotation_period": planeta.rotation_period,
                        "orbital_period": planeta.orbital_period,
                        "gravity": planeta.gravity,
                        "population": planeta.population,
                        "climate": planeta.climate,
                        "terrain": planeta.terrain,
                        "surface_water": planeta.surface_water,
                        "url": planeta.url,
                        "created": planeta.created,
                        "edited": planeta.edited
                    }, 200
                return {"message": "Planeta no encontrado"}, 404
            else:
                planetas_list = session.query(Planeta).all()
                result = [
                    {
                        "id": planeta.id,
                        "name": planeta.name,
                        "diameter": planeta.diameter,
                        "rotation_period": planeta.rotation_period,
                        "orbital_period": planeta.orbital_period,
                        "gravity": planeta.gravity,
                        "population": planeta.population,
                        "climate": planeta.climate,
                        "terrain": planeta.terrain,
                        "surface_water": planeta.surface_water,
                        "url": planeta.url,
                        "created": planeta.created,
                        "edited": planeta.edited
                    } 
                    for planeta in planetas_list
                ]
                return result, 200
        finally:
            session.close()

# Define el recurso para obtener información de vehiculos
class VehiculosResource(Resource):
    def get(self, vehiculo_id=None):
        session = Session()
        try:
            if vehiculo_id:
                vehiculo = session.query(Vehiculo).filter_by(id=vehiculo_id).first()
                if vehiculo:
                    return {
                        "id": vehiculo.id,
                        "name": vehiculo.name,
                        "model": vehiculo.model,
                        "vehicle_class": vehiculo.vehicle_class,
                        "manufacturer": vehiculo.manufacturer,
                        "cost_in_credits": vehiculo.cost_in_credits,
                        "length": vehiculo.length,
                        "crew": vehiculo.crew,
                        "passengers": vehiculo.passengers,
                        "max_atmosphering_speed": vehiculo.max_atmosphering_speed,
                        "cargo_capacity": vehiculo.cargo_capacity,
                        "consumables": vehiculo.consumables,
                        "films": vehiculo.films,
                        "pilots": vehiculo.pilots,
                        "url": vehiculo.url,
                        "created": vehiculo.created,
                        "edited": vehiculo.edited
                    }, 200
                return {"message": "Vehículo no encontrado"}, 404
            else:
                vehiculos_list = session.query(Vehiculo).all()
                result = [
                    {
                        "id": vehiculo.id,
                        "name": vehiculo.name,
                        "model": vehiculo.model,
                        "vehicle_class": vehiculo.vehicle_class,
                        "manufacturer": vehiculo.manufacturer,
                        "cost_in_credits": vehiculo.cost_in_credits,
                        "length": vehiculo.length,
                        "crew": vehiculo.crew,
                        "passengers": vehiculo.passengers,
                        "max_atmosphering_speed": vehiculo.max_atmosphering_speed,
                        "cargo_capacity": vehiculo.cargo_capacity,
                        "consumables": vehiculo.consumables,
                        "films": vehiculo.films,
                        "pilots": vehiculo.pilots,
                        "url": vehiculo.url,
                        "created": vehiculo.created,
                        "edited": vehiculo.edited
                    } 
                    for vehiculo in vehiculos_list
                ]
                return result, 200
        finally:
            session.close()

# Define el recurso para obtener información de usuarios
class UsuariosResource(Resource):
    def get(self):
        session = Session()
        try:
            usuarios_list = session.query(Usuario).all()
            result = [{"id": usuario.id, "email": usuario.email} for usuario in usuarios_list]
            return result, 200
        finally:
            session.close()

# Define el recurso para manejar favoritos de planetas
class FavoritoPlanetaResource(Resource):
    def post(self, planeta_id):
        session = Session()
        try:
            user_id = 1
            nuevo_favorito = FavoritoPlaneta(usuario_id=user_id, planeta_id=planeta_id)
            session.add(nuevo_favorito)
            session.commit()
            return {"message": "Planeta agregado a favoritos"}, 201
        finally:
            session.close()

    def delete(self, planeta_id):
        session = Session()
        try:
            user_id = 1
            favorito_a_eliminar = session.query(FavoritoPlaneta).filter_by(usuario_id=user_id, planeta_id=planeta_id).first()
            if favorito_a_eliminar:
                session.delete(favorito_a_eliminar)
                session.commit()
                return {"message": "Planeta eliminado de favoritos"}, 200
            return {"message": "Planeta no encontrado en favoritos"}, 404
        finally:
            session.close()

# Define el recurso para manejar favoritos de personajes
class FavoritoPersonajeResource(Resource):
    def post(self, personaje_id):
        session = Session()
        try:
            user_id = 1
            nuevo_favorito = FavoritoPersonaje(usuario_id=user_id, personaje_id=personaje_id)
            session.add(nuevo_favorito)
            session.commit()
            return {"message": "Personaje agregado a favoritos"}, 201
        finally:
            session.close()

    def delete(self, personaje_id):
        session = Session()
        try:
            user_id = 1
            favorito_a_eliminar = session.query(FavoritoPersonaje).filter_by(usuario_id=user_id, personaje_id=personaje_id).first()
            if favorito_a_eliminar:
                session.delete(favorito_a_eliminar)
                session.commit()
                return {"message": "Personaje eliminado de favoritos"}, 200
            return {"message": "Personaje no encontrado en favoritos"}, 404
        finally:
            session.close()

# Define el recurso para manejar favoritos de vehiculos
class FavoritoVehiculoResource(Resource):  
    def post(self, vehiculo_id):
        session = Session()
        try:
            user_id = 1
            nuevo_favorito = FavoritoVehiculo(usuario_id=user_id, vehiculo_id=vehiculo_id)
            session.add(nuevo_favorito)
            session.commit()
            return {"message": "Vehiculo agregado a favoritos"}, 201
        finally:
            session.close()

    def delete(self, vehiculo_id):
        session = Session()
        try:
            user_id = 1
            favorito_a_eliminar = session.query(FavoritoVehiculo).filter_by(usuario_id=user_id, vehiculo_id=vehiculo_id).first()
            if favorito_a_eliminar:
                session.delete(favorito_a_eliminar)
                session.commit()
                return {"message": "Vehiculo eliminado de favoritos"}, 200
            return {"message": "Vehiculo no encontrado en favoritos"}, 404
        finally:
            session.close()

# Agrega los recursos a la API
api.add_resource(PersonajesResource, '/personajes', '/personajes/<int:personaje_id>')
api.add_resource(PlanetasResource, '/planetas', '/planetas/<int:planeta_id>')
api.add_resource(VehiculosResource, '/vehiculos', '/vehiculos/<int:vehiculo_id>')
api.add_resource(UsuariosResource, '/usuarios')
api.add_resource(FavoritoPlanetaResource, '/favorito/planeta/<int:planeta_id>')
api.add_resource(FavoritoPersonajeResource, '/favorito/personaje/<int:personaje_id>')
api.add_resource(FavoritoVehiculoResource, '/favorito/vehiculo/<int:vehiculo_id>')

# Configura las cabeceras de CORS para todas las respuestas
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:5000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    response.headers.add('Access-Control-Allow-Credentials', 'true')

    return response  

# Inicia la aplicación si este script es ejecutado directamente
if __name__ == '__main__':
    app.run(debug=True, port=3000)




