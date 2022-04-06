import React from 'react';

const Iniciar = ({setEmail, setPass, iniciar}) => {
    
    return (
    <div className="m-10 w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className='text-center mb-4'> 
                <h1 className='text-2xl font-bold'>Iniciar Sesión</h1>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Correo
                </label>
                <input 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="email" 
                    type="email" 
                    placeholder="Correo" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Contraseña
                </label>
                <input 
                    onChange={(e)=>{setPass(e.target.value)}}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="password" 
                    type="password" 
                    placeholder="******************"/>
            </div>
            <div className="flex items-center justify-between">
                <button onClick={iniciar} className="bg-blue-500 border-2 border-white hover:border-blue-500 font-bold hover:bg-white hover:text-blue-700 px-2 py-1 rounded-md text-white">Iniciar Sesión</button>
            </div>
        </form>
    </div>
    )
}

export default Iniciar;