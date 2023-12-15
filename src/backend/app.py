from flask import Flask
from flask_restful import Api, Resource
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Usuario, Favorito, Planeta, Personaje, Vehiculo

app = Flask(__name__)
api = Api(app)

# URL de conexión MySQL
engine = create_engine('mysql+pymysql://starwars_admin:12345@localhost/starwars', echo=True)

# Crea una sesión de base de datos
Session = sessionmaker(bind=engine)
session = Session()

class PersonajesResource(Resource):
    def get(self, personaje_id=None):
        if personaje_id:
            personaje = session.query(Personaje).filter_by(id=personaje_id).first()
            if personaje:
                return {
                    "id": personaje.id,
                    "name": personaje.name,
                }, 200
            return {"message": "Personaje no encontrado"}, 404
        else:
            personajes_list = session.query(Personaje).all()
            result = [{"id": personaje.id, "name": personaje.name} for personaje in personajes_list]
            return result, 200

class PlanetasResource(Resource):
    def get(self, planeta_id=None):
        if planeta_id:
            planeta = session.query(Planeta).filter_by(id=planeta_id).first()
            if planeta:
                return {
                    "id": planeta.id,
                    "name": planeta.name,
                }, 200
            return {"message": "Planeta no encontrado"}, 404
        else:
            planetas_list = session.query(Planeta).all()
            result = [{"id": planeta.id, "name": planeta.name} for planeta in planetas_list]
            return result, 200

class VehiculosResource(Resource):
    def get(self, vehiculo_id=None):
        if vehiculo_id:
            vehiculo = session.query(Vehiculo).filter_by(id=vehiculo_id).first()
            if vehiculo:
                return {
                    "id": vehiculo.id,
                    "name": vehiculo.name,
                }, 200
            return {"message": "Vehículo no encontrado"}, 404
        else:
            vehiculos_list = session.query(Vehiculo).all()
            result = [{"id": vehiculo.id, "name": vehiculo.name} for vehiculo in vehiculos_list]
            return result, 200

class UsuariosResource(Resource):
    def get(self):
        usuarios_list = session.query(Usuario).all()
        result = [{"id": usuario.id, "email": usuario.email} for usuario in usuarios_list]
        return result, 200

class FavoritosResource(Resource):
    def get(self):
        user_id = 1
        favoritos_list = session.query(Favorito).filter_by(usuario_id=user_id).all()
        result = [{"id": fav.id, "planeta_id": fav.planeta_id, "personaje_id": fav.personaje_id, "vehiculo_id": fav.vehiculo_id} for fav in favoritos_list]
        return result, 200

class FavoritoPlanetaResource(Resource):
    def post(self, planeta_id):
        user_id = 1
        nuevo_favorito = Favorito(usuario_id=user_id, planeta_id=planeta_id)
        session.add(nuevo_favorito)
        session.commit()
        return {"message": "Planeta agregado a favoritos"}, 201

    def delete(self, planeta_id):
        user_id = 1
        favorito_a_eliminar = session.query(Favorito).filter_by(usuario_id=user_id, planeta_id=planeta_id).first()
        if favorito_a_eliminar:
            session.delete(favorito_a_eliminar)
            session.commit()
            return {"message": "Planeta eliminado de favoritos"}, 200
        return {"message": "Planeta no encontrado en favoritos"}, 404

class FavoritoPersonajeResource(Resource):
    def post(self, personaje_id):
        user_id = 1
        nuevo_favorito = Favorito(usuario_id=user_id, personaje_id=personaje_id)
        session.add(nuevo_favorito)
        session.commit()
        return {"message": "Personaje agregado a favoritos"}, 201

    def delete(self, personaje_id):
        user_id = 1
        favorito_a_eliminar = session.query(Favorito).filter_by(usuario_id=user_id, personaje_id=personaje_id).first()
        if favorito_a_eliminar:
            session.delete(favorito_a_eliminar)
            session.commit()
            return {"message": "Personaje eliminado de favoritos"}, 200
        return {"message": "Personaje no encontrado en favoritos"}, 404

class FavoritoVehiculoResource(Resource):  # Corregí el nombre de la clase
    def post(self, vehiculo_id):
        user_id = 1
        nuevo_favorito = Favorito(usuario_id=user_id, vehiculo_id=vehiculo_id)
        session.add(nuevo_favorito)
        session.commit()
        return {"message": "Vehiculo agregado a favoritos"}, 201

    def delete(self, vehiculo_id):
        user_id = 1
        favorito_a_eliminar = session.query(Favorito).filter_by(usuario_id=user_id, vehiculo_id=vehiculo_id).first()
        if favorito_a_eliminar:
            session.delete(favorito_a_eliminar)
            session.commit()
            return {"message": "Vehiculo eliminado de favoritos"}, 200
        return {"message": "Vehiculo no encontrado en favoritos"}, 404

# Agrega los recursos a la API
api.add_resource(PersonajesResource, '/personajes', '/personajes/<int:personaje_id>')
api.add_resource(PlanetasResource, '/planetas', '/planetas/<int:planeta_id>')
api.add_resource(VehiculosResource, '/vehiculos', '/vehiculos/<int:vehiculo_id>')
api.add_resource(UsuariosResource, '/usuarios')
api.add_resource(FavoritosResource, '/usuarios/favoritos')
api.add_resource(FavoritoPlanetaResource, '/favorito/planeta/<int:planeta_id>')
api.add_resource(FavoritoPersonajeResource, '/favorito/personaje/<int:personaje_id>')
api.add_resource(FavoritoVehiculoResource, '/favorito/vehiculo/<int:vehiculo_id>')  # Agregué la nueva clase

if __name__ == '__main__':
    app.run(debug=True)



