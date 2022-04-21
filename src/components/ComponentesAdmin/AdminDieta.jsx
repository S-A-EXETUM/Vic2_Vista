import React from 'react'
import { BotonLateralMenu } from './BotonLateralMenu'
import { FormularioAgregarDieta } from './FormularioAgregarDieta'
import { FormularioBuscarDieta } from './FormularioBuscarDieta'

export const AdminDieta = ({ funcion, setTipoDieta, setNombreD, setAlimentos, setInfoNutricional, setFoto, setHorario, errorDieta }) => {
    return (
        <div className="bg-opacity-25 pt-3">
            <div className='row'>
                <div className='col-lg-2 col-md-2 col-6 '>
                    <ul>
                        <div className="nav mt-2" id="nav3-tab" role="tablist" style={{ "listStyle": "none" }}>
                            <button className="mb-2 btn btn-info bg-opacity-10" id="nav-agregar-tab" data-bs-toggle="tab" data-bs-target="#nav-agregar1" type="button" role="tab" aria-controls="nav-agregar1" aria-selected="true">➕</button>
                            <button className="mb-2 btn btn-info bg-opacity-10" id="nav-editar-tab mb-2 border-0" data-bs-toggle="tab" data-bs-target="#nav-editar1" type="button" role="tab" aria-controls="nav-editar1" aria-selected="false">🔍</button>
                        </div>
                    </ul>
                </div>
                <div className='col-lg col-md col'>
                    <div className="tab-content" id="nav3-tabContent">
                        <div className="tab-pane pe-3 fade active show" id="nav-agregar1" role="tabpanel" aria-labelledby="nav-agregar1-tab">
                            <FormularioAgregarDieta
                                funcion={funcion}
                                setTipoDieta={setTipoDieta}
                                setNombreD={setNombreD}
                                setAlimentos={setAlimentos}
                                setInfoNutricional={setInfoNutricional}
                                setFoto={setFoto}
                                setHorario={setHorario}
                                errorDieta={errorDieta} />
                        </div>
                        <div className="tab-pane fade" id="nav-editar1" role="tabpanel" aria-labelledby="nav-editar1-tab">
                            <FormularioBuscarDieta />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
