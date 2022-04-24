import React, { useState } from 'react'

export const FormularioAgregarDieta = ({ nombreForm, funcion, setTipoDieta, setNombreD, setAlimentos, setInfoNutricional, setFoto, setHorario, errorDieta, tipoDieta, nombreD, alimentos, infoNutricional, foto, horario }) => {

    let idSelectD = 'tipoDieta-' + nombreForm
    return (
        <div className='bg-info bg-opacity-50 card card-body m-2'>
            <form>
                <div>
                    <h3 className='text-center'>{nombreForm} 🍎🥑</h3>
                </div>
                <div className="mb-4 mt-4">
                    <div className='form-floating mb-3'>
                        <select className="form-select" id={idSelectD} onChange={(e) => { setTipoDieta(e.target.value) }} aria-label="Default select example">
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
                            id="nombre-dieta"
                            type="text"
                            placeholder="Nombre"
                            value={nombreD}
                        />
                        <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <textarea
                            onChange={(e) => { setAlimentos(e.target.value) }}
                            className="form-control"
                            id="alimentos-dieta"
                            type="text"
                            value={alimentos}
                            placeholder="Alimento/s"
                        />
                        <label htmlFor="alimentos">Alimento/s</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input
                            onChange={(e) => { setInfoNutricional(e.target.value) }}
                            className="form-control"
                            id="infoNutricional-dieta"
                            type="text"
                            value={infoNutricional}
                            placeholder="Información Nutricional"
                        />
                        <label htmlFor="infoNutricional">Información Nutricional</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input
                            onChange={(e) => { setFoto(e.target.value) }}
                            className="form-control"
                            id="foto-dieta"
                            type="text"
                            placeholder="URL Foto"
                            value={foto}
                        />
                        <label htmlFor="foto">URL Foto</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input
                            onChange={(e) => { setHorario(e.target.value) }}
                            className="form-control"
                            id="horario-dieta"
                            type="text"
                            value={horario}
                            placeholder="Horario"
                        />
                        <label htmlFor="horario">Horario</label>
                    </div>
                </div>
                <div className="flex text-center mb-2">
                    <button onClick={funcion} className="btn btn-outline-dark btn-sm">{nombreForm}</button>
                    {
                        nombreForm == 'Editar' ?
                            (<button onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#contenido-form-editar-dieta').classList.add('d-none')
                                document.querySelector('#card-contenido-dieta').classList.remove('d-none')
                                document.querySelector('#nav-agregar-dieta-tab').disabled = false
                                setTipoDieta(''); setAlimentos('')
                                setNombreD(''); setFoto('')
                                setInfoNutricional(''); setHorario('')
                                document.querySelector('#musculoObj').value = ''
                                document.querySelector('#nombre-rutina').value = ''
                                document.querySelector('#video-rutina').value = ''
                                document.querySelector('#descripcion-rutina').value = ''
                                document.querySelector('#repeticiones').value = ''
                                document.querySelector('#floatingSet').value = ''
                                let select_tipoD = document.querySelector('#tipoDieta-Editar')
                                select_tipoD.value = "0"

                            }} className="btn btn-outline-dark ms-2 btn-sm">Cancelar Edición</button>)
                            :
                            (< ></>)
                    }
                </div>
            </form>
            {
                errorDieta !== '' ?
                    (<div className='alert alert-danger mt-2' style={{ "padding": "3px", "paddingLeft": "10px" }}>
                        {errorDieta}
                    </div>)
                    :
                    (<span></span>)
            }
        </div>
    )
}
