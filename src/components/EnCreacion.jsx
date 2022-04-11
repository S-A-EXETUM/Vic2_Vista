import React, { useState } from 'react'


// Constanza Castillo 
export const EnCreacion = ({nombre}) => {
  
  return (
    <>
      <div className='row justify-content-center' style={{"margin": "0"}}>
          <div className="text-center" style={{"width": "700px"}}>
              <div className='mt-4 mb-3 bg-black bg-opacity-10 card card-body'>
                <h2>{nombre}</h2>
                  <h1>EN PROCESO DE DESARROLLO</h1>
                  <button onClick={getRutina} className="btn button-light-outline">PRUEBA</button>
              </div>
          </div>
      </div> 
      
    </>
      
  )
}
