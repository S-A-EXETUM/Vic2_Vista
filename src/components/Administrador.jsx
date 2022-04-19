import React, { useState } from 'react'
import axios from 'axios'
import { AdminDieta } from './ComponentesAdmin/AdminDieta'
import { AdminRutina } from './ComponentesAdmin/AdminRutina'
export const Administrador = () => {

    const url = process.env.REACT_APP_BACKEND_URL

    const [errorRutina, setErrorRutina] = useState('')
    const [errorDieta, setErrorDieta] = useState('')

    const [pCuerpo, setPCuerpo] = useState('')
    const [musculoObj, setMusculoObj] = useState('')
    const [nombre, setNombre] = useState('')
    const [video, setVideo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [repeticiones, setRepeticiones] = useState('')
    const [set, setSet] = useState('')

    const guardarRutina = (e) => {
        e.preventDefault()
        if (pCuerpo == 0) {
            setErrorRutina('Seleccione tipo de ejercicio')
        } else if (musculoObj == '' || nombre == '' || video == '' || descripcion == '' || repeticiones == '' || set == '') {
            setErrorRutina('Rellene todos los campos')
        } else if (Number.isNaN(repeticiones) || Number.isNaN(set)) {
            setErrorRutina('Campos inválidos')
        } else {
            axios.post(url + 'ejercicios/', {
                pCuerpo: pCuerpo,
                nombre: nombre,
                repeticiones: repeticiones,
                video: video,
                descripcion: descripcion,
                musculoObj: musculoObj,
                set: set
            }).then((resp) => {
                console.log(resp)
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    const [tipoDieta, setTipoDieta] = useState('')
    const [nombreD, setNombreD] = useState('')
    const [alimentos, setAlimentos] = useState('')
    const [infoNutricional, setInfoNutricional] = useState('')
    const [foto, setFoto] = useState('')
    const [horario, setHorario] = useState('')

    const guardarDieta = (e) => {
        e.preventDefault()

        if (tipoDieta == '' || nombreD == '' || alimentos == '' || infoNutricional == '' || foto == '' || horario == '') {
            setErrorDieta('Rellene todos los campos')
        } else if (tipoDieta == 0) {
            setErrorDieta('Rellene todos los campos')
        } else {
            axios.post(url + 'dietas/', {
                tipoDieta: tipoDieta,
                nombre: nombreD,
                alimentos: alimentos,
                infoNutricional: infoNutricional,
                foto: foto,
                horario: horario
            }).then((resp) => {
                console.log(resp)
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    return (
        <div className="pt-5 contenedor pb-5" style={{ 'width': '100%' }}>
            <div className='row container justify-content-center' style={{ 'margin': '0', }}>
                <div className="card col-lg-7" style={{ "padding": "0" }}>
                    <div class="card-header">
                        <div className="nav nav-tabs card-header-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-rutina-tab" data-bs-toggle="tab" data-bs-target="#nav-rutina" type="button" role="tab" aria-controls="nav-rutina" aria-selected="true">Rutina</button>
                            <button className="nav-link" id="nav-dieta-tab" data-bs-toggle="tab" data-bs-target="#nav-dieta" type="button" role="tab" aria-controls="nav-dieta" aria-selected="false">Dieta</button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade active show" id="nav-rutina" role="tabpanel" aria-labelledby="nav-rutina-tab">
                                <AdminRutina
                                    funcion={guardarRutina}
                                    setPCuerpo={setPCuerpo}
                                    setMusculoObj={setMusculoObj}
                                    setNombre={setNombre}
                                    setVideo={setVideo}
                                    setDescripcion={setDescripcion}
                                    setRepeticiones={setRepeticiones}
                                    setSet={setSet}
                                    errorRutina={errorRutina} />
                            </div>
                            <div className="tab-pane fade" id="nav-dieta" role="tabpanel" aria-labelledby="nav-dieta-tab">
                                <AdminDieta funcion={guardarDieta}
                                    setTipoDieta={setTipoDieta}
                                    setNombreD={setNombreD}
                                    setAlimentos={setAlimentos}
                                    setInfoNutricional={setInfoNutricional}
                                    setFoto={setFoto}
                                    setHorario={setHorario} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
