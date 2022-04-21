import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { AdminDieta } from './ComponentesAdmin/AdminDieta'
import { AdminRutina } from './ComponentesAdmin/AdminRutina'
export const Administrador = () => {

    const url = process.env.REACT_APP_BACKEND_URL

    const [errorRutina, setErrorRutina] = useState('')
    const [errorDieta, setErrorDieta] = useState('')

    const [idRutina, setIdRutina] = useState('')
    const [pCuerpo, setPCuerpo] = useState('')
    const [musculoObj, setMusculoObj] = useState('')
    const [nombre, setNombre] = useState('')
    const [video, setVideo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [repeticiones, setRepeticiones] = useState('')
    const [set, setSet] = useState('')

    useEffect(() => {

    }, [pCuerpo, musculoObj, nombre, video, descripcion, repeticiones, set])

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
                Swal.fire({
                    title: "Se ha agregado correctamente",
                    icon: "info",
                    color: "#fff"
                })
                setPCuerpo(''); setMusculoObj('')
                setNombre(''); setVideo(''); setDescripcion('')
                setRepeticiones(''); setSet('')
                document.querySelector('#musculoObj').value = ''
                document.querySelector('#nombre-rutina').value = ''
                document.querySelector('#video-rutina').value = ''
                document.querySelector('#descripcion-rutina').value = ''
                document.querySelector('#repeticiones').value = ''
                document.querySelector('#floatingSet').value = ''
            }).catch((error) => {
                Swal.fire({
                    title: "Ocurrió un error al agregar",
                    icon: "warning",
                    color: "#fff"
                })
            })
        }
    }

    const editar = (e) => {
        e.preventDefault()
        axios.put(url + `ejercicios/${idRutina}`, {
            pCuerpo: pCuerpo,
            nombre: nombre,
            repeticiones: repeticiones,
            video: video,
            descripcion: descripcion,
            musculoObj: musculoObj,
            set: set
        }).then((resp) => {
            Swal.fire({
                title: "Se ha modificado correctamente",
                icon: "info",
                color: "#fff"
            })
            document.querySelector('#contenido-form-editar').classList.add('d-none')
            document.querySelector('#card-contenido-rutina').classList.remove('d-none')
            document.querySelector('#nav-agregar-tab').disabled = false
            setPCuerpo(''); setMusculoObj('')
            setNombre(''); setVideo(''); setDescripcion('')
            setRepeticiones(''); setSet('')
        }).catch((error) => {
            Swal.fire({
                title: "Ocurrió un error al modificar",
                icon: "warning",
                color: "#fff"
            })
        })
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
                Swal.fire({
                    title: "Se ha agregado correctamente",
                    icon: "info",
                    color: "#fff"
                })
                setTipoDieta(''); setNombreD('')
                setAlimentos(''); setInfoNutricional('')
                setFoto(''); setHorario('')
                document.querySelector('#nombre-dieta').value = ''
                document.querySelector('#alimentos-dieta').value = ''
                document.querySelector('#infoNutricional-dieta').value = ''
                document.querySelector('#foto-dieta').value = ''
                document.querySelector('#horario-dieta').value = ''
            }).catch((error) => {
                Swal.fire({
                    title: "Ocurrió un error al agregar",
                    icon: "warning",
                    color: "#fff"
                })
            })
        }
    }

    return (
        <div className="pt-5 contenedor pb-5" style={{ 'width': '100%' }}>
            <div className='row container justify-content-center' style={{ 'margin': '0', }}>
                <div className="card col-lg-7" style={{ "padding": "0" }}>
                    <div className="card-header">
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
                                    funcionEditar={editar}
                                    setPCuerpo={setPCuerpo}
                                    setMusculoObj={setMusculoObj}
                                    setNombre={setNombre}
                                    idRutina={idRutina}
                                    pCuerpo={pCuerpo}
                                    musculoObj={musculoObj}
                                    nombre={nombre} video={video}
                                    descripcion={descripcion}
                                    repeticiones={repeticiones}
                                    set={set}
                                    setVideo={setVideo}
                                    setDescripcion={setDescripcion}
                                    setRepeticiones={setRepeticiones}
                                    setSet={setSet}
                                    setIdRutina={setIdRutina}
                                    errorRutina={errorRutina} />
                            </div>
                            <div className="tab-pane fade" id="nav-dieta" role="tabpanel" aria-labelledby="nav-dieta-tab">
                                <AdminDieta funcion={guardarDieta}
                                    setTipoDieta={setTipoDieta}
                                    setNombreD={setNombreD}
                                    setAlimentos={setAlimentos}
                                    setInfoNutricional={setInfoNutricional}
                                    setFoto={setFoto}
                                    setHorario={setHorario}
                                    errorDieta={errorDieta} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
