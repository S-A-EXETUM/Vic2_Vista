import React from 'react'
import { resetPassword } from '../MetodosFirebase'

const cambioClave = () => {
    let correo = prompt("Ingresa tu correo")
    console.log(correo)
    resetPassword(correo)
}
// Ultima modificación Matthew Rocco 12/04/2022
const Formulario = ({ setEmail, setPass, titulo, funcion, id, tipo, error }) => {
    return (
        <div className="col-12 col-lg-4 col-md-6">
            <div className="bg-dark bg-opacity-25 card shadow text-light">
                <div className="card-body">
                    <form>
                        <div>
                            <h1 className='text-center'>{titulo}</h1>
                        </div>
                        <div className="mb-4 mt-4">
                            <div>
                                <input
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    className="form-control"
                                    id="email"
                                    type="email"
                                    required={true}
                                    placeholder="Correo"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <div>
                                <input
                                    onChange={(e) => { setPass(e.target.value) }}
                                    className="form-control mb-4"
                                    required={true}
                                    id="password"
                                    type="password"
                                    placeholder='Contraseña'
                                    autoComplete=''
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <button onClick={funcion} className="btn button-light-outline btn-sm">{titulo}</button>
                        </div>
                        {
                            !tipo ?
                                (<span />)
                                :
                                (<a onClick={cambioClave} className="text-sm-start a-light-decoration-none ms-2">Cambio de Contraseña</a>)
                        }
                        {
                            error ?
                                (<div className='alert alert-danger mt-2' style={{ "padding": "3px", "padding-left": "10px" }}>
                                    {error}
                                </div>)
                                :
                                (<></>)
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Formulario