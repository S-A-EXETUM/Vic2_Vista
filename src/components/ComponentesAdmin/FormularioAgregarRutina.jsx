import React, { useState, useEffect } from 'react'

export const FormularioAgregarRutina = ({ funcion, setPCuerpo, setMusculoObj, setNombre, setVideo, setDescripcion, setRepeticiones, setSet, errorRutina, nombreForm, pCuerpo, musculoObj, nombre, video, descripcion, repeticiones, set }) => {

    return (
        <div className='bg-info bg-opacity-50 card-body m-2'>
            <form>
                <div>
                    <h3 className='text-center'>{nombreForm}</h3>
                </div>
                <div className="mb-4 mt-4">
                    <div className='form-floating mb-3'>
                        <select className="form-select boder-0" id='pCuerpo' onChange={(e) => { setPCuerpo(e.target.value) }} aria-label="Default select example">
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
                        <label className="form-label me-5">Ejercicio para</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" name="musculoObj" value={musculoObj} onChange={(e) => { setMusculoObj(e.target.value) }} className="form-control" id="musculoObj" placeholder='musculoObj' />
                        <label htmlFor="musculoObj">Músculo/s Objetivo</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" value={nombre} onChange={(e) => { setNombre(e.target.value) }} className="form-control" id="nombre-rutina" placeholder='nombre' />
                        <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" value={video} onChange={(e) => { setVideo(e.target.value) }} className="form-control" id="video-rutina" placeholder='video' />
                        <label htmlFor="video">Url Video</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea type="text" value={descripcion} onChange={(e) => { setDescripcion(e.target.value) }} className="form-control" id="descripcion-rutina" placeholder='descripcion' />
                        <label htmlFor="descripcion">Descripción</label>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <div className="form-floating mb-3">
                                <input type="number" value={repeticiones} onChange={(e) => { setRepeticiones(e.target.value) }} className="form-control" id="repeticiones" placeholder='repeticiones' />
                                <label htmlFor="repeticiones">Cantidad ejercicios</label>
                            </div>
                        </div>
                        <div className='col-12 col-lg'>
                            <div className="form-floating mb-3">
                                <input type="number" value={set} onChange={(e) => { setSet(e.target.value) }} className="form-control" id="floatingSet" placeholder='set' />
                                <label htmlFor="floatingSet">Set</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex text-center mb-2">
                    <button onClick={funcion} className="btn btn-outline-dark btn-sm">{nombreForm}</button>
                    {
                        nombreForm == 'Editar' ?
                            (<button onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#contenido-form-editar').classList.add('d-none')
                                document.querySelector('#card-contenido-rutina').classList.remove('d-none')
                                document.querySelector('#nav-agregar-tab').disabled = false
                                setPCuerpo(''); setMusculoObj('')
                                setNombre(''); setVideo(''); setDescripcion('')
                                setRepeticiones(''); setSet('')
                                document.querySelector('#musculoObj').value = ''
                                document.querySelector('#nombre-rutina').value = ''
                                document.querySelector('#video-rutina').value = ''
                                document.querySelector('#descripcion-rutina').value = ''
                                document.querySelector('#repeticiones').value = ''
                                document.querySelector('#floatingSet').value = ''
                            }} className="btn btn-outline-dark btn-sm">Cancelar Edición</button>)
                            :
                            (< ></>)
                    }
                </div>
                {errorRutina ?
                    (<div className='alert alert-danger mt-2' style={{ "padding": "3px", "paddingLeft": "10px" }}>
                        {errorRutina}
                    </div>)
                    :
                    (<></>)
                }
            </form>
        </div>
    )
}
