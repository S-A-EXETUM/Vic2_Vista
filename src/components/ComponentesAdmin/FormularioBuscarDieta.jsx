import React, { useState, useEffect } from 'react'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as BsIcons from 'react-icons/bs'
import axios from 'axios'
import { FormularioAgregarDieta } from './FormularioAgregarDieta'

export const FormularioBuscarDieta = ({ idDieta, setIdDieta, setTipoDieta, setNombreD, setAlimentos, setInfoNutricional, setFoto, setHorario, errorDieta, tipoDieta, nombreD, alimentos, infoNutricional, foto, horario }) => {


    const urlDieta = process.env.REACT_APP_BACKEND_URL + `dietas/`

    const [busquedaSelectD, setBusquedaSelectD] = useState()
    const [busquedaNombreD, setBusquedaNombreD] = useState()

    const [dieta, setDieta] = useState()

    const getDieta = (valor) => {
        setBusquedaSelectD(valor)
        setBusquedaNombreD(undefined)

        document.querySelector("#nombre-buscar-dieta").value = ""

        axios.get(urlDieta + `tipo/${valor}`)
            .then(response => {
                const { data } = response
                setDieta(data)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const botonGetDietaNombre = (e) => {
        e.preventDefault()
        getDietaNombre()
    }

    const getDietaNombre = () => {
        // e.preventDefault()
        document.querySelector('#select-tipoDieta').value = '0'

        setBusquedaNombreD(document.querySelector('#nombre-buscar-dieta').value)
        setBusquedaSelectD(undefined)

        let valor = document.querySelector("#nombre-buscar-dieta").value
        axios.get(urlDieta + `nombre/${valor}`)
            .then(response => {
                const { data } = response
                setDieta(data)
            })
            .catch((err) => {
                console.log(err)
            })
        // document.querySelector("#nombre-buscar-dieta").value = ""
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

    const comenzarEditarDieta = (dieta) => {
        setIdDieta(dieta.id)
        document.querySelector('#contenido-form-editar-dieta').classList.remove('d-none')
        document.querySelector('#card-contenido-dieta').classList.add('d-none')
        setTipoDieta(dieta.tipoDieta); setAlimentos(dieta.alimentos); setHorario(dieta.horario)
        setNombreD(dieta.nombre); setFoto(dieta.foto); setInfoNutricional(dieta.infoNutricional)
        let select_tipoD = document.querySelector('#tipoDieta-Editar')
        select_tipoD.value = dieta.tipoDieta
        document.querySelector('#nav-agregar-dieta-tab').disabled = true
    }

    const editarDieta = (e) => {
        e.preventDefault()
        axios.put(urlDieta + `${idDieta}`, {
            tipoDieta: tipoDieta,
            nombre: nombreD,
            alimentos: alimentos,
            infoNutricional: infoNutricional,
            foto: foto,
            horario: horario
        }).then((resp) => {
            Swal.fire({
                title: "Se ha modificado correctamente",
                icon: "info",
                color: "#fff"
            })
            if (busquedaSelectD === undefined) {
                document.querySelector("#nombre-buscar-dieta").value = busquedaNombreD
                getDietaNombre()
            } else {
                getDieta(busquedaSelectD)
            }
            document.querySelector('#contenido-form-editar-dieta').classList.add('d-none')
            document.querySelector('#card-contenido-dieta').classList.remove('d-none')
            document.querySelector('#nav-agregar-dieta-tab').disabled = false
            setTipoDieta(''); setAlimentos('')
            setNombreD(''); setFoto('')
            setInfoNutricional(''); setHorario('')
            let select_tipoD = document.querySelector('#tipoDieta-Editar')
            select_tipoD.value = "0"
        }).catch((error) => {
            console.log(error)
            Swal.fire({
                title: "Ocurrió un error al modificar",
                icon: "warning",
                color: "#fff"
            })
        })
    }

    const eliminarDieta = (dieta) => {
        Swal.fire({
            title: `¿Desea borrar la dieta: ${dieta.nombre}  ?`,
            html: `<div class='text-white text-center'>Esto lo eliminara de los favoritos de los usuarios<div>`,
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Ok',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(urlDieta + dieta.id)
                    .then(() => {
                        Swal.fire('Eliminada!', '', 'warning')
                        if (busquedaSelectD === undefined) {
                            document.querySelector("#nombre-buscar-dieta").value = busquedaNombreD
                            getDietaNombre()
                        } else {
                            getDieta(busquedaSelectD)
                        }
                    })
                    .catch((e) => {
                        Swal.fire('No se a eliminado', '', 'info')
                    })
            } else {
                Swal.fire('No se a eliminado', '', 'info')
            }
        })
    }

    useEffect(() => {
        // console.log('a')
    }, [busquedaNombreD, busquedaSelectD])

    return (
        <div className="container-fluid">
            <form className="d-flex">
                <input className="form-control me-2" id='nombre-buscar-dieta' type="search" placeholder="Busqueda" />
                <button className="btn btn-outline-success" type="submit" onClick={botonGetDietaNombre}>Buscar</button>
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
            <div id="card-contenido-dieta">
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
                                                        <button onClick={() => comenzarEditarDieta(item)} className='btn btn-sm btn-warning me-2'><AiIcons.AiFillEdit></AiIcons.AiFillEdit></button>
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
            <div className='d-none' id='contenido-form-editar-dieta'>
                <FormularioAgregarDieta
                    funcion={editarDieta}
                    nombreForm={'Editar'}
                    setTipoDieta={setTipoDieta}
                    setNombreD={setNombreD}
                    setAlimentos={setAlimentos}
                    setInfoNutricional={setInfoNutricional}
                    setFoto={setFoto}
                    setHorario={setHorario}
                    tipoDieta={tipoDieta}
                    nombreD={nombreD}
                    alimentos={alimentos}
                    infoNutricional={infoNutricional}
                    foto={foto}
                    horario={horario}
                    errorDieta={errorDieta}
                />
            </div>
        </div>
    )
}
