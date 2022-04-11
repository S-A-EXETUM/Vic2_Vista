import React from 'react';
import {Link} from 'react-router-dom';
import {entContentDef, entContentAde} from './Entcontent';
const Rutinas = () => {
  return (
    <div className="pt-5">
        <div className='row container justify-content-evenly mt-5 pt-5'>
        {/* Ejercicio para definir */}
          <div className='col-4'>
            <div className="card">
              <div className="card-header">
                <span>Para definir</span>
              </div>
              <div className="card-body">
                {entContentDef.map((item, index) => {
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
        {/* Ejercicio para adelgazar */}
          <div className='col-4'>
            <div className="card">
              <div className="card-header">
                <span>Para adelgazar</span>
              </div>
              <div className="card-body">
                {entContentAde.map((item, index) => {
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

export default Rutinas;