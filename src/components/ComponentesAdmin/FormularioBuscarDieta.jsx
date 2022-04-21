import React, { useState, useEffect } from 'react'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as BsIcons from 'react-icons/bs'
import axios from 'axios'

export const FormularioBuscarDieta = () => {


    const urlDieta = process.env.REACT_APP_BACKEND_URL + `dietas/`

    const [dieta, setDieta] = useState()

    const getDieta = (valor) => {

        let select = document.querySelector("#seleccionar")
        select.removeAttribute("selected")

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
        let select = document.querySelector("#seleccionar")
        select.setAttribute("selected", true)
        document.getElementById('select-tipoDieta').selectedIndex = 0
        let valor = document.querySelector("#nombre-buscar-dieta").value
        axios.get(urlDieta + `nombre/${valor}`)
            .then(response => {
                const { data } = response
                setDieta(data)
            })
            .catch((err) => {
                console.log(err)
            })
        document.querySelector("#nombre-buscar-dieta").value = ""
    }

    const verDieta = (dieta) => {
        Swal.fire({
            title: "Dieta Seleccionada",
            html: `<div class="row">
                        <div class="col col-lg col-md">
                            <p>Nombre: ${dieta.nombre}</p>
                            <div class='text-center'>
                                <img src=${dieta.foto} alt="Imagen" style="width: 50%" />
                            </div>
                            <h6>Horario: ${dieta.horario}</h6>
                            <h6>Alimentos: <br /> ${dieta.alimentos}</h6>
                            <h6>Información Nutricional: ${dieta.infoNutricional}</h6>
                            <h6 class='text-center fw-bolder'>${dieta.tipoDieta}</h6>
                        </div>
                    </div>`,
            color: "#fafafa"
        })
    }

    const editarDieta = (dieta) => {
        // console.log(ejercicio)
        // setIdRutina(ejercicio.id)
        // document.querySelector('#contenido-form-editar').classList.remove('d-none')
        // document.querySelector('#card-contenido-rutina').classList.add('d-none')
        // setPCuerpo(ejercicio.pCuerpo)
        // setMusculoObj(ejercicio.musculoObj)
        // setNombre(ejercicio.nombre)
        // setVideo(ejercicio.video)
        // setDescripcion(ejercicio.descripcion)
        // setRepeticiones(ejercicio.repeticiones)
        // setSet(ejercicio.set)
    }

    const eliminarDieta = (dieta) => {
        console.log(dieta)
        Swal.fire({
            title: `¿Desea borrar la dieta: ${dieta.nombre}  ?`,
            showCancelButton: true,
            confirmButtonText: 'Ok',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(urlDieta + dieta.id)
                    .then(Swal.fire('Eliminada!', '', 'warning'))
                    .catch((e) => {
                        Swal.fire('No se a eliminado', '', 'info')
                    })
            } else {
                Swal.fire('No se a eliminado', '', 'info')
            }
        })
    }
    return (
        <div className="container-fluid">
            <form className="d-flex">
                <input className="form-control me-2" id='nombre-buscar-dieta' type="search" placeholder="Busqueda" />
                <button className="btn btn-outline-success" type="submit" onClick={getDietaNombre}>Buscar</button>
            </form>
            <div className='row my-3'>
                <div className="col-12 col-lg-4 text-end">
                    <label className="form-label me-5 pt-2">Dieta para</label>
                </div>
                <div className="col-12 col-lg">
                    <select className="form-select boder-0" id='select-tipoDieta' onChange={(e) => { getDieta(e.target.value) }}>
                        <option id='seleccionar' value='0' >-- Seleccionar --</option>
                        <option value="Ectomorfo">Ectomorfo</option>
                        <option value="Endomorfo">Endomorfo</option>
                        <option value="Mesomorfo">Mesomorfo</option>
                        <option value="Definir">Definir</option>
                    </select>
                </div>
            </div>
            {
                dieta != undefined ?
                    dieta.length !== 0 ?
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
                                            <div className="col-12 text-center mb-2">
                                                <div>
                                                    <button onClick={() => verDieta(item)} className='btn btn-sm btn-success me-2'><FaIcons.FaEye></FaIcons.FaEye></button>
                                                    <button onClick={() => editarDieta(item)} className='btn btn-sm btn-warning me-2'><AiIcons.AiFillEdit></AiIcons.AiFillEdit></button>
                                                    <button onClick={() => eliminarDieta(item)} className='btn btn-sm btn-danger me-2'><BsIcons.BsFillTrashFill /></button>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <h6 className='text-center fw-bolder'>{item.tipoDieta}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div className="alert alert-warning" role="alert">
                            No se encontraron resultados
                        </div>
                    :
                    <div className="alert alert-secondary" role="alert">
                        Realiza una busqueda
                    </div>
            }
        </div>
    )
}
