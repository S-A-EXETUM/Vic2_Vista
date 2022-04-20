import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const FormularioBuscarDieta = () => {


    const urlDieta = process.env.REACT_APP_BACKEND_URL + `dietas/`

    const [dieta, setDieta] = useState()

    const getDieta = (valor) => {
        axios.get(urlDieta + `tipo/${valor}`)
            .then(response => {
                const { data } = response
                setDieta(data)
                console.log(dieta)
            })
            .catch((e) => {
                console.log(e)
            })
    }
    const getDietaNombre = (e) => {
        e.preventDefault()
        let valor = document.querySelector("#nombre-dieta").value
        axios.get(urlDieta + `tipo/${valor}`)
            .then(response => {
                const { data } = response
                setDieta(data)
                console.log(dieta)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <div className="container-fluid">
            <form className="d-flex">
                <input className="form-control me-2" type="search" id="nombre-dieta" placeholder="Busqueda" />
                <button className="btn btn-outline-success" type="submit" onClick={getDietaNombre}>Buscar</button>
            </form>
            <div className='row my-3'>
                <div className="col-12 col-lg-4 text-end">
                    <label className="form-label me-5 pt-2">Dieta para</label>
                </div>
                <div className="col-12 col-lg">
                    <select className="form-select boder-0" id='tipoDieta' onChange={(e) => { getDieta(e.target.value) }}>
                        <option value='0' >-- Seleccionar --</option>
                        <option value="Ectomorfo">Ectomorfo</option>
                        <option value="Endomorfo">Endomorfo</option>
                        <option value="Mesomorfo">Mesomorfo</option>
                        <option value="Definir">Definir</option>
                    </select>
                </div>
            </div>
            {
                dieta != undefined ?
                    dieta.map((item, index) => {
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
                                            <h6>Horario: {item.horario}</h6>
                                            <h6>Alimentos: <br /> {item.alimentos}</h6>
                                            <h6>Informacion Nutricional: {item.infoNutricional}</h6>
                                            <h6 className='text-center fw-bolder'>{item.tipoDieta}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    <></>
            }
        </div>
    )
}
