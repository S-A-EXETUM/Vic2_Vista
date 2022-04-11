import React from 'react';
import {Link} from 'react-router-dom';
import {entContentDef, entContentAde} from './Entcontent';
const Rutinas = () => {
  return (
    <div className="pt-5">
        <div className='row container justify-content-evenly mt-5 pt-5'>
        {/* Ejercicio para definir */}
          <div className='col-12 col-md-5 col-lg-4'>
            <div className="bg-dark bg-opacity-25 card shadow text-light">
              {/* <div className="card-header"></div> */}
              <div className="card-body text-white">
                <h1 className='card-title text-center'>Para definir</h1>
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
          <div className='col-12 col-md-5 col-lg-4'>
            <div className="bg-dark bg-opacity-25 card shadow text-light">
              {/* <div className="card-header"></div> */}
              <div className="card-body text-white text-center">
                <h1 className='card-title'>Para adelgazar</h1>
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