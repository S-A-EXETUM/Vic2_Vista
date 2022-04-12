import React, { useState, useEffect } from 'react'
import CardEjercicio from './OtrosComponentes/CardEjercicio'
import axios from 'axios'

// Ultima modificación Matthew Rocco 12/04/2022
export const EnCreacionRutina = ({ nombre }) => {
  const url = 'http://b3a8-186-21-192-20.ngrok.io/ejercicios/'
  const [rutina, setRutina] = useState([])

  useEffect(() => {
    const getRutina = () => {
      axios.get(url)
        .then(response => {
          const { data } = response
          setRutina(data)
        })
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
      <div className='' style={{ "margin": "0" }} >
        <div className="mt-3 ms-5 me-5">
          <div className="card bg-black bg-opacity-10 contenedor" style={{ "height": "65%", "margin": "inherit" }}>
            <div className='row justify-content-center' style={{ "margin": "0" }}>
              <div className="col-10">
                <div className="card-body text-center">
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro vero repellendus commodi aliquid quod, ratione, esse et doloremque recusandae molestias qui excepturi deleniti exercitationem iste reprehenderit vel alias accusantium voluptas!</span>
                </div>
              </div>
            </div>
            <div className="row justify-content-center" style={{ "margin": "0" }}>
              <div className="col-12">
                <div className="card-header">
                  {rutina.map((item, index) => {
                    return (
                      nombre === item.pCuerpo ?
                        (<CardEjercicio
                          index={index}
                          nombre={item.nombre}
                          pCuerpo={item.pCuerpo}
                          descripcion={item.descripcion}
                          repeticiones={item.repeticiones}
                          set={item.set}
                          video={item.video}
                        />)
                        :
                        (<span></span>)
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
