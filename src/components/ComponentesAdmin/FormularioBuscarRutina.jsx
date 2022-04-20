import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const FormularioBuscarRutina = () => {


    const urlRutina = process.env.REACT_APP_BACKEND_URL + `ejercicios/`

    const [rutina, setRutina] = useState()

    const getRutina = (valor) => {

        let select = document.querySelector("#seleccionar")
        select.removeAttribute("selected")

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
    const getRutinaNombre = (e) => {
        e.preventDefault()
        let select = document.querySelector("#seleccionar")
        select.setAttribute("selected", true)
        document.getElementById('pCuerpo').selectedIndex = 0
        let valor = document.querySelector("#nombre-rutina").value
        axios.get(urlRutina + `nombre/${valor}`)
            .then(response => {
                const { data } = response
                setRutina(data)
            })
            .catch((err) => {
                console.log(err)
            })
        document.querySelector("#nombre-rutina").value = ""
    }

    return (
        <div className="container-fluid">
            <form className="d-flex">
                <input className="form-control me-2" id='nombre-rutina' type="search" placeholder="Busqueda" />
                <button className="btn btn-outline-success" type="submit" onClick={getRutinaNombre}>Buscar</button>
            </form>
            <div className='row my-3'>
                <div className="col-12 col-lg-4 text-end">
                    <label className="form-label me-5 pt-2">Ejercicio para</label>
                </div>
                <div className="col-12 col-lg">
                    <select className="form-select boder-0" id='pCuerpo' onChange={(e) => { getRutina(e.target.value) }}>
                        <option id='seleccionar' value='0'>-- Seleccionar --</option>
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
            {
                rutina != undefined ?
                    rutina.length !== 0 ?
                        rutina.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="bg-opacity-25 bg-info border-1 border-light card card-body">
                                        <div className="justify-content-between row">
                                            <div className="col-11 col-md-6 col-lg-6">
                                                <p>Nombre: {item.nombre}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col col-lg col-md">
                                                <h6>Músculo: {item.musculoObj}</h6>
                                                <h6>Descripción: <br /> {item.descripcion}</h6>
                                                <h6>Repeticiones: {item.repeticiones}</h6>
                                                <h6>Set: {item.set}</h6>
                                                <h6 className='text-center fw-bolder'>{item.pCuerpo}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div className="alert alert-warning" role="alert">
                            No se encontraron resultados :(
                        </div>
                    :
                    <div className="alert alert-secondary" role="alert">
                        Realiza una busqueda
                    </div>
            }
        </div>
    )
}
