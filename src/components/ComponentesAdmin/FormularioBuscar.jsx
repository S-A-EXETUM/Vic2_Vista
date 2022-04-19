import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const FormularioBuscar = () => {


    const urlRutina = process.env.REACT_APP_BACKEND_URL + `ejercicios/`

    const [rutina, setRutina] = useState([])

    const getRutina = (valor) => {
        axios.get(urlRutina + `tipo/${valor}`)
            .then(response => {
                const { data } = response
                setRutina(data)
                console.log(rutina)
            })
            .catch((e) => {
                console.log(e)
            })
    }



    return (
        <div className="container-fluid">
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Busqueda" />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
            <div className='row my-3'>
                <div className="col-12 col-lg-4 text-end">
                    <label className="form-label me-5 pt-2">Ejercicio para</label>
                </div>
                <div className="col-12 col-lg">
                    <select className="form-select boder-0" id='pCuerpo' onChange={(e) => { getRutina(e.target.value) }}>
                        <option value='0' >-- Seleccionar --</option>
                        <option value="Brazos">Brazos</option>
                        <option value="Pecho">Pecho</option>
                        <option value="Abdomen">Abdomen</option>
                        <option value="Piernas">Piernas</option>
                        <option value="Espalda">Espalda</option>
                        <option value="Cardio">Cardio</option>
                        <option value="Hiit">Hiit</option>
                        <option value="Crossfit">Crossfit</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
