import React, { useState } from 'react'

export const FormularioAgregarDieta = ({ funcion, setTipoDieta, setNombreD, setAlimentos, setInfoNutricional, setFoto, setHorario }) => {

    return (
        <div className='bg-info bg-opacity-50 card card-body m-2'>
            <form>
                <div>
                    <h3 className='text-center'>Añadir</h3>
                </div>
                <div className="mb-4 mt-4">
                    <div className='form-floating mb-3'>
                        <select className="form-select" id='tipoDieta' onChange={(e) => { setTipoDieta(e.target.value) }} aria-label="Default select example">
                            <option value="0" >-- Seleccionar --</option>
                            <option value="Ectomorfo">Ectomorfo</option>
                            <option value="Endomorfo">Endomorfo</option>
                            <option value="Mesomorfo">Mesomorfo</option>
                            <option value="Definir">Definir</option>
                        </select>
                        <label className='form-label me-5'>Dieta para</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input
                            onChange={(e) => { setNombreD(e.target.value) }}
                            className="form-control"
                            id="nombre"
                            type="text"
                            placeholder="Nombre"
                        />
                        <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input
                            onChange={(e) => { setAlimentos(e.target.value) }}
                            className="form-control"
                            id="alimentos"
                            type="text"
                            placeholder="Alimento/s"
                        />
                        <label htmlFor="alimentos">Alimento/s</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input
                            onChange={(e) => { setInfoNutricional(e.target.value) }}
                            className="form-control"
                            id="infoNutricional"
                            type="text"
                            placeholder="Información Nutricional"
                        />
                        <label htmlFor="infoNutricional">Información Nutricional</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input
                            onChange={(e) => { setFoto(e.target.value) }}
                            className="form-control"
                            id="foto"
                            type="text"
                            placeholder="URL Foto"
                        />
                        <label htmlFor="foto">URL Foto</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input
                            onChange={(e) => { setHorario(e.target.value) }}
                            className="form-control"
                            id="horario"
                            type="text"
                            placeholder="Horario"
                        />
                        <label htmlFor="horario">Horario</label>
                    </div>
                </div>
                <div className="flex text-center mb-2">
                    <button onClick={funcion} className="btn btn-outline-dark btn-sm">Agregar</button>
                </div>
            </form>
        </div>
    )
}
