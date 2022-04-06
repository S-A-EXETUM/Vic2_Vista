import React from 'react';

const Registrar = ({setEmail, setPass, registro}) => {
    return(
    <div className="m-10 w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className='text-center mb-4'> 
                <h1 className='text-2xl font-bold'>Registrarse</h1>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="register-email">
                    Correo
                </label>
                <input 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="register-email" 
                    type="email"
                    placeholder="Correo" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="register-password">
                    Contraseña
                </label>
                <input 
                    onChange={(e)=>{setPass(e.target.value)}}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="register-password" 
                    type="password" 
                    placeholder="******************"/>
            </div>
            <div className="flex items-center justify-between">
                <button onClick={registro} className="bg-transparent border-2 border-green-700 hover:bg-green-700 hover:text-white pb-1 px-2 py-1 rounded-md text-green-700 font-bold">
                    Registrarse
                </button>
            </div>
        </form>
    </div>
    )
}

export default Registrar;