import React from 'react';
import { Dietacontent } from './Dietacontent';
import { Link } from 'react-router-dom';
const Dieta = () => {
    return (  
        <div>
            <div className="flex flex-wrap">
                <div className="w-1/3 h-12"></div>
                <div className="w-1/3 h-12"></div>
                <div className="w-1/3 h-12"></div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-1/3 h-12"></div>
                <div className="w-1/3 h-12"></div>
                <div className="w-1/3 h-12"></div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-1/3 h-12"></div>
                <div className="w-1/3 h-12"></div>
                <div className="w-1/3 h-12"></div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-1/3 h-12"></div>
                <div className="w-1/3 h-12"></div>
                <div className="w-1/3 h-12"></div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-1/3 h-12"></div>
                <div className="w-1/3 h-12">
                <div className="bg-green-700 max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                         <div className="font-bold text-xl mb-2"> Tipos de dietas </div>
                         <ul>
                        {Dietacontent.map((item, index) => {
                             return (
                                 <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                        </ul>
                     </div>
                 </div>
                </div>
                <div className="w-1/3 h-12"></div>
            </div>
        </div> 
       
    )
}

export default Dieta;