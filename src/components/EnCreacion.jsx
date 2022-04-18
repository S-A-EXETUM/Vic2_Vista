import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardDieta from './OtrosComponentes/CardDieta'
import { Spinner } from './OtrosComponentes/Spinner'

// Ultima modificación Matthew Rocco y Diego Canelo 12/04/2022
export const EnCreacion = ({ nombre, descripcion }) => {
  const url = 'http://143a-186-21-192-20.ngrok.io/dietas/'
  const [dieta, setDieta] = useState([])

  useEffect(() => {
    const getDieta = () => {
      axios.get(url)
        .then(response => {
          const { data } = response
          setDieta(data)
        })
        .catch(
          setDieta(undefined)
        )
    }
    getDieta()
  }, [])

  return (<>
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
                <span>{descripcion}</span>
              </div>
            </div>
          </div>
          <div className="row justify-content-center" style={{ "margin": "0" }}>
            <div className="col-12">
              {dieta !== undefined ?
                dieta.map((item, index) => {
                  return (
                    nombre === item.tipoDieta ?
                      (<div key={index}>
                        <CardDieta
                          index={index}
                          nombre={item.nombre}
                          alimentos={item.alimentos}
                          infoNutricional={item.infoNutricional}
                          foto={item.foto}
                          horario={item.horario}
                        />
                      </div>)
                      :
                      (<span></span>)
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
