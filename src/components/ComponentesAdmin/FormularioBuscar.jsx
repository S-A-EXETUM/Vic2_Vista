import React from 'react'

export const FormularioBuscar = () => {
    return (
        <div className="container-fluid">
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Busqueda" />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        </div>
    )
}
