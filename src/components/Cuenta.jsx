import React from 'react';

const Cuenta = () => {
  return (
    <>
      <div className='row m-2' style={{"margin": "0"}}>
        <div className="col-12 mt-5">
          <div className="col-4">

            <div className="card card-body shadow bg-info bg-opacity-10">
              Correo
              Tiempo registrado
            </div>
          </div>
          <div className="col-4">
            <button className='btn'>Cambiar contraseña</button>
          </div>
          <div className="col"></div>
        </div>

        <div className="col-12">

        </div>
      </div>
    </>
  )
}

export default Cuenta;