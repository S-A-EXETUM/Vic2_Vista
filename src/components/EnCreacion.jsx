import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Ultima modificación Matthew Rocco y Diego Canelo 12/04/2022
export const EnCreacion = ({ nombre }) => {
  const url = 'http://localhost:3001/dietas/'
  const [dieta, setDieta] = useState([])

  useEffect(() => {
    const getDieta = () => {
      axios.get(url)
        .then(response => {
          const { data } = response
          setDieta(data)
        })
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
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro vero repellendus commodi aliquid quod, ratione, esse et doloremque recusandae molestias qui excepturi deleniti exercitationem iste reprehenderit vel alias accusantium voluptas!</span>
              </div>
            </div>
          </div>
          <div className="row justify-content-center" style={{ "margin": "0" }}>
            <div className="col-12">
              {dieta.map((item, index) => {
                return (
                  nombre === item.tipoDieta ?
                    (<div>
                      <p>index={index} <br />
                        nombre={item.nombre} <br />
                        alimentos={item.alimentos} <br />
                        infoNutricional={item.infoNutricional} <br />
                        foto={item.foto} <br />
                        horario={item.horario} <br />
                      </p>
                    </div>)
                    :
                    (<span></span>)
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
