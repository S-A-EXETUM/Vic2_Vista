import React, { useState, useEffect } from 'react'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as BsIcons from 'react-icons/bs'
import { FormularioAgregarRutina } from './FormularioAgregarRutina'
import axios from 'axios'

export const FormularioBuscarRutina = ({ setIdRutina, funcionEditar, setPCuerpo, setMusculoObj, setNombre, setVideo, setDescripcion, setRepeticiones, setSet, errorRutina, pCuerpo, musculoObj, nombre, video, descripcion, repeticiones, set }) => {

    const [first, setFirst] = useState(0)
    const [ejercicioUse, setEjercicioUse] = useState({})


    const urlRutina = process.env.REACT_APP_BACKEND_URL + `ejercicios/`

    const [rutina, setRutina] = useState()

    const getRutina = (valor) => {

        let select = document.querySelector("#seleccionar")
        select.removeAttribute("selected")

        axios.get(urlRutina + `tipo/${valor}`)
            .then(response => {
                const { data } = response
                setRutina(data)
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
        let valor = document.querySelector("#nombre-buscar-rutina").value
        axios.get(urlRutina + `nombre/${valor}`)
            .then(response => {
                const { data } = response
                setRutina(data)
            })
            .catch((err) => {
                console.log(err)
            })
        document.querySelector("#nombre-buscar-rutina").value = ""
    }
    const verEjercicio = (ejercicio) => {
        Swal.fire({
            title: "Ejercicio Seleccionado",
            html: `<div class="row">
                        <div class="col col-lg col-md">
                            <p>Nombre: ${ejercicio.nombre}</p>
                            <div class='text-center'>
                                <iframe
                                    src=${ejercicio.video} style={{ 'height': '300px', 'width': '100%' }} frameBorder="0" allowFullScreen>
                                </iframe>
                            </div>
                            <h6>Músculo: ${ejercicio.musculoObj}</h6>
                            <h6>Descripción: <br /> ${ejercicio.descripcion}</h6>
                            <h6>Repeticiones: ${ejercicio.repeticiones}</h6>
                            <h6>Set: ${ejercicio.set}</h6>
                            <h6 class='text-center fw-bolder'>${ejercicio.pCuerpo}</h6>
                        </div>
                    </div>`,
            color: "#fafafa"
        })
    }
    const editarEjercicio = (ejercicio) => {
        setIdRutina(ejercicio.id)
        document.querySelector('#contenido-form-editar').classList.remove('d-none')
        document.querySelector('#card-contenido-rutina').classList.add('d-none')
        setPCuerpo(ejercicio.pCuerpo)
        setMusculoObj(ejercicio.musculoObj)
        setNombre(ejercicio.nombre)
        setVideo(ejercicio.video)
        setDescripcion(ejercicio.descripcion)
        setRepeticiones(ejercicio.repeticiones)
        setSet(ejercicio.set)

        document.querySelector('#nav-agregar-tab').disabled = true

    }

    const eliminarEjercicio = (ejercicio) => {
        console.log(ejercicio)
        Swal.fire({
            title: `¿Desea borrar el ejercicio: ${ejercicio.nombre}  ?`,
            showCancelButton: true,
            confirmButtonText: 'Ok',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(urlRutina + ejercicio.id)
                    .then(Swal.fire('Eliminado!', '', 'warning'))
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
                <input className="form-control me-2" id='nombre-buscar-rutina' type="search" placeholder="Busqueda" />
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
            <div id='card-contenido-rutina'>
                {
                    rutina != undefined ?
                        rutina.length !== 0 ?
                            rutina.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="bg-opacity-25 bg-info border-1 border-light card card-body" style={{ "paddingBottom": "0" }}>
                                            <div className="justify-content-between row">
                                                <div className="col-12 col-md-12 col-lg-12">
                                                    <p>Nombre: {item.nombre}</p>
                                                    <h6>Músculo: {item.musculoObj}</h6>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-center mb-2">
                                                    <div>
                                                        <button onClick={() => verEjercicio(item)} className='btn btn-sm btn-success me-2'><FaIcons.FaEye></FaIcons.FaEye></button>
                                                        <button onClick={() => editarEjercicio(item)} className='btn btn-sm btn-warning me-2'><AiIcons.AiFillEdit></AiIcons.AiFillEdit></button>
                                                        <button onClick={() => eliminarEjercicio(item)} className='btn btn-sm btn-danger me-2'><BsIcons.BsFillTrashFill /></button>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <h6 className='text-center fw-bolder'>{item.pCuerpo}</h6>
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
            <div className='d-none' id='contenido-form-editar'>
                <FormularioAgregarRutina
                    nombreForm="Editar"
                    funcion={funcionEditar}
                    setPCuerpo={setPCuerpo}
                    setMusculoObj={setMusculoObj}
                    setNombre={setNombre}
                    setVideo={setVideo}
                    pCuerpo={pCuerpo} musculoObj={musculoObj} nombre={nombre} video={video} descripcion={descripcion} repeticiones={repeticiones} set={set}
                    setDescripcion={setDescripcion}
                    setRepeticiones={setRepeticiones}
                    setSet={setSet}
                    errorRutina={errorRutina}
                />
            </div>
        </div>
    )
}
