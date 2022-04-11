import React from 'react';

const Iniciar = ({setEmail, setPass, iniciar}) => {
    
    return (
        <div className="col-12 col-lg-4 col-md-6">
            <div className="bg-dark bg-opacity-25 card shadow text-light">
                <div className="card-body">
                    <form>
                        <div>
                            <h1 className='text-center'>Iniciar Sesión</h1>
                        </div>
                        <div className="mb-4 mt-4">
                            <div>
                                <input 
                                    onChange={(e)=>{setEmail(e.target.value)}}
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
                                    onChange={(e)=>{setPass(e.target.value)}}
                                    className="form-control mb-4" 
                                    required={true}
                                    id="password" 
                                    type="password" 
                                    placeholder='Contraseña'
                                    autoComplete=''
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <button onClick={iniciar} className="btn button-light-outline">Iniciar Sesión</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Iniciar;