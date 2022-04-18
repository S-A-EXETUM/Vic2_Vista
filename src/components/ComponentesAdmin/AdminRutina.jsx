import React from 'react'
import { FormularioAgregarRutina } from './FormularioAgregarRutina'
import { FormularioBuscar } from './FormularioBuscar'

export const AdminRutina = ({ funcion, setPCuerpo, setMusculoObj, setNombre, setVideo, setDescripcion, setRepeticiones, setSet, errorRutina }) => {

    return (
        <div className="bg-opacity-25 pt-3 card shadow">
            <div className='row'>
                <div className='col-lg-2 col-md-2 col-6 '>
                    <ul>
                        <div className="nav mt-2" id="nav2-tab" role="tablist" style={{ "listStyle": "none" }}>
                            <button className="mb-2 btn btn-info bg-opacity-10" id="nav-agregar-tab" data-bs-toggle="tab" data-bs-target="#nav-agregar" type="button" role="tab" aria-controls="nav-agregar" aria-selected="true">➕</button>
                            <button className="mb-2 btn btn-info bg-opacity-10" id="nav-editar-tab mb-2 border-0" data-bs-toggle="tab" data-bs-target="#nav-editar" type="button" role="tab" aria-controls="nav-editar" aria-selected="false">🔍</button>
                        </div>
                    </ul>
                </div>
                <div className='col-lg col-md col'>
                    <div className="tab-content pe-3" id="nav2-tabContent">
                        <div className="tab-pane fade active show" id="nav-agregar" role="tabpanel" aria-labelledby="nav-agregar-tab">
                            <FormularioAgregarRutina
                                funcion={funcion}
                                setPCuerpo={setPCuerpo}
                                setMusculoObj={setMusculoObj}
                                setNombre={setNombre}
                                setVideo={setVideo}
                                setDescripcion={setDescripcion}
                                setRepeticiones={setRepeticiones}
                                setSet={setSet}
                                errorRutina={errorRutina} />
                        </div>
                        <div className="tab-pane pe-3 fade" id="nav-editar" role="tabpanel" aria-labelledby="nav-editar-tab">
                            <FormularioBuscar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
