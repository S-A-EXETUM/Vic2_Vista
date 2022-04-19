import React, { useState } from 'react'

export const FormularioAgregarRutina = ({ funcion, setPCuerpo, setMusculoObj, setNombre, setVideo, setDescripcion, setRepeticiones, setSet, errorRutina }) => {

    return (
        <div className='bg-info bg-opacity-50 card-body m-2'>
            <form>
                <div>
                    <h3 className='text-center'>Añadir</h3>
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
                        <input type="text" onChange={(e) => { setMusculoObj(e.target.value) }} className="form-control" id="musculoObj" placeholder='musculoObj' />
                        <label htmlFor="musculoObj">Músculo/s Objetivo</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" onChange={(e) => { setNombre(e.target.value) }} className="form-control" id="nombre" placeholder='nombre' />
                        <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" onChange={(e) => { setVideo(e.target.value) }} className="form-control" id="video" placeholder='video' />
                        <label htmlFor="video">Url Video</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" onChange={(e) => { setDescripcion(e.target.value) }} className="form-control" id="descripcion" placeholder='descripcion' />
                        <label htmlFor="descripcion">Descripción</label>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <div className="form-floating mb-3">
                                <input type="number" onChange={(e) => { setRepeticiones(e.target.value) }} className="form-control" id="repeticiones" placeholder='repeticiones' />
                                <label htmlFor="repeticiones">Repeticiones</label>
                            </div>
                        </div>
                        <div className='col-12 col-lg'>
                            <div className="form-floating mb-3">
                                <input type="number" onChange={(e) => { setSet(e.target.value) }} className="form-control" id="floatingSet" placeholder='set' />
                                <label htmlFor="floatingSet">Set</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex text-center mb-2">
                    <button onClick={funcion} className="btn btn-outline-dark btn-sm">Agregar</button>
                </div>
                {errorRutina ?
                    (<div className='alert alert-danger mt-2' style={{ "padding": "3px", "padding-left": "10px" }}>
                        {errorRutina}
                    </div>)
                    :
                    (<></>)
                }
            </form>
        </div>
    )
}
