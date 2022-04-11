import React from 'react';
import { Dietacontent } from './Dietacontent';
import { Link } from 'react-router-dom';
const Dieta = () => {
    return (  
        <div className="position-absolute top-50 start-50 translate-middle row">
            <div className="">
                <div className="">
                    <div className="bg-dark bg-opacity-25 card shadow text-light">
                        <div className="card-body text-white">
                            <h1 className='card-title'>Tipos de dietas</h1>
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
                        </div>
                    </div>
                </div>
            </div>
        </div> 
       
    )
}

export default Dieta;