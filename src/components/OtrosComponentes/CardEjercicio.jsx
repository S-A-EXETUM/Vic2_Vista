import React, { useState, useEffect } from 'react'
import * as AiIcons from 'react-icons/ai'

// Ultima modificación Matthew Rocco 12/04/2022
export default function CardEjercicio({ musculoObj, pCuerpo, nombre, video, descripcion, repeticiones, set, index }) {
    return (
        <>
            <div key={index} className="bg-opacity-25 bg-white border-1 border-light card card-body m-5">
                <div className="justify-content-between row">
                    <div className="col-11 col-md-6 col-lg-6">
                        <p>Nombre: {nombre}</p>
                    </div>
                    <div className="col-1 col-lg-1 col-md-1">
                        <button className='btn btn-sm btn-info bg-transparent border-0' ><AiIcons.AiOutlineStar style={{ 'width': '25px', 'height': '25px' }} /></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-7 col-md-6">
                        <iframe
                            src={video} style={{ 'height': '300px', 'width': '100%' }} frameBorder="0" allowFullScreen>
                        </iframe>
                    </div>
                    <div className="col col-lg col-md">
                        <h6>Músculo: {musculoObj}</h6>
                        <h6>Descripción: <br /> {descripcion}</h6>
                        <h6>Repeticiones: {repeticiones}</h6>
                        <h6>Set: {set}</h6>
                    </div>
                </div>
            </div>

        </>

    )
}