import React, { useState, useEffect } from 'react'
import CardEjercicio from './OtrosComponentes/CardEjercicio'
import axios from 'axios'
import { Spinner } from './OtrosComponentes/Spinner'
import { usuarioLogged } from './MetodosFirebase'
// Ultima modificación Matthew Rocco 12/04/2022
export const EnCreacionRutina = ({ nombre, descripcion }) => {
  const idUser = usuarioLogged()
  const url = process.env.REACT_APP_BACKEND_URL + `ejercicios/tipo/${nombre}`
  //const url = 'http://163e-186-21-192-20.ngrok.io/' + `ejercicios/tipo/${nombre}`

  const [rutina, setRutina] = useState([])

  useEffect(() => {
    const getRutina = () => {
      axios.get(url)
        .then(response => {
          const { data } = response
          setRutina(data)
        })
        .catch(
          setRutina(undefined)
        )
    }
    getRutina()
  }, [])

  return (
    <>

      <div className='row justify-content-center' style={{ "margin": "0" }}>
        <div className="text-center" style={{ "width": "700px" }}>
          <div className='mt-4 mb-3 bg-black bg-opacity-10 card card-body'>
            <h2>{nombre}</h2>
            {/* <button onClick={getRutina} className="btn button-light-outline">PRUEBA</button> */}
          </div>
        </div>
      </div>
      <div className='me-5' style={{ "margin": "0" }} >
        <div className="mt-3 ms-5 me-5">
          <div className="card bg-black bg-opacity-10 contenedor" style={{ "height": "65%", "margin": "inherit" }}>
            <div className='row justify-content-center' style={{ "margin": "0" }}>
              <div className="col-10">
                <div className="card-body text-center">
                  <span>{descripcion}</span>
                </div>
              </div>
            </div>
            <div className="row justify-content-center" style={{ "margin": "0" }}>
              <div className="col-12">
                {rutina !== undefined ?
                  rutina.map((item, index) => {
                    return (
                      nombre === item.pCuerpo ?
                        (<CardEjercicio
                          key={item.id}
                          id={item.id}
                          idUser={idUser}
                          index={index}
                          nombre={item.nombre}
                          descripcion={item.descripcion}
                          repeticiones={item.repeticiones}
                          set={item.set}
                          video={item.video}
                          musculoObj={item.musculoObj}
                        />)
                        :
                        (<></>)
                    )
                  })
                  :
                  (<Spinner />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
