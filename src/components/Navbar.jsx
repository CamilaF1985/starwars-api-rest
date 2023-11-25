import React, { useState } from 'react';

const BarraNavegacion = () => {
    const [mostrarFavoritos, setMostrarFavoritos] = useState(false);

    const manejarClicFavoritos = () => {
        setMostrarFavoritos(!mostrarFavoritos);
    };

    return (
        <nav className="navbar navbar-light bg-light barra-personalizada">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src="src/assets/img/logo.png"
                        alt="Logo"
                        height="60"
                        className="d-inline-block align-top"
                    />
                </a>

                <div className="position-relative">
                    <button
                        className="btn btn-primary"
                        onClick={manejarClicFavoritos}
                    >
                        Favoritos
                    </button>
                    {mostrarFavoritos && (
                        <div className="position-absolute end-0 mt-2 dropdown-personalizado">
                            <div className="card bg-light">
                                <div className="card-body d-flex align-items-center">
                                    <span className="col-10">Elemento de prueba</span>
                                    <i className="bi bi-trash text-dark col-2"></i>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default BarraNavegacion;













