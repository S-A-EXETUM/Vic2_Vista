import React from 'react';
import { Dietacontent } from './Dietacontent';
import { Link } from 'react-router-dom';
const Dieta = () => {
    return (  
        <div className="row container-fluid justify-content-evenly mt-5 pt-5">
            <div className="mt-5">
                <div className="col-4">
                    <div className="card">
                        <div className="card-header">
                            <span>Tipos de dietas</span>
                        </div>
                        <div className="card-body">
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