import React, { useState, useEffect } from 'react'
import * as AiIcons from 'react-icons/ai'
import axios from 'axios'
import { usuarioLogged } from '../MetodosFirebase'
// Ultima modificación Matthew Rocco 12/04/2022
export default function CardDieta({ id, idUser, nombre, alimentos, infoNutricional, foto, horario, index }) {


    const url = process.env.REACT_APP_BACKEND_URL + `favoritos/`

    const guardarFav = (e) => {
        e.preventDefault()

        const id_rutina = null
        const id_usuario = idUser
        const id_dieta = id

        axios.post(url, {
            id_usuario,
            id_rutina,
            id_dieta
        }).then((resp) => {
            Swal.fire({
                title: "Favorito agregado con éxito",
                icon: "success"
            })
        }).catch((error) => {
            if (error.toJSON().status == 406) {
                Swal.fire({
                    title: "Error al agregar",
                    html: `<p class="text-ligth">La dieta ya está agregada a favoritos<p>`,
                    icon: "warning",
                    color: "#fff"
                })
            } else {
                Swal.fire({
                    title: "Error al agregar",
                    html: `No se pudo agregar a favoritos :(`,
                    icon: "warning",
                    color: "#fff"
                })
            }

        })
    }

    return (
        <>
            <div key={index} className="bg-opacity-10 bg-white border-1 border-white card card-body m-4">
                <div className="row">
                    <div className="col-8 col-lg-10 col-md-8">
                        <p>Nombre: {nombre}</p>
                    </div>
                    <div className="col col-lg col-md">
                        {
                            idUser !== 'No User' ?
                                (
                                    <button onClick={guardarFav} className='btn btn-sm btn-info bg-transparent border-0' ><AiIcons.AiOutlineStar style={{ 'width': '25px', 'height': '25px' }} /></button>
                                ) :
                                (
                                    <></>
                                )
                        }

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-5 col-md-6">
                        <h6>Horario: {horario}</h6>
                        <h6>Alimentos: {alimentos}</h6>
                        <h6>Información Nutricional: <br /> {infoNutricional}</h6>
                    </div>
                    <div className="col-12 col-lg-7 col-md-6">
                        <img src={foto} alt="Imagen" style={{ 'width': '60%' }} />
                    </div>
                </div>
            </div>
        </>
    )
}
