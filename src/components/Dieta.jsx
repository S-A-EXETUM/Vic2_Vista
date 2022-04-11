import React from 'react';
import { Dietacontent } from './Dietacontent';
import { Link } from 'react-router-dom';
const Dieta = () => {
    return (  
        <div className="row pt-5 justify-content-center" style={{"margin": "0"}}>
            <div className="col-12 col-md-6 col-lg-3 pt-5 mt-5">
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
    );
}

export default Dieta;