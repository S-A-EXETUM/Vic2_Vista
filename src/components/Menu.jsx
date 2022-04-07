import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Menucontent } from './Menucontent';
import './Menu.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Menu = () => {
  const [usuario,setUsuario] = useState(null);
  const user = getAuth();
  useEffect(()=>{
    user.onAuthStateChanged((user)=>{
        if(user){
            setUsuario(user.email);
        }
    });
  },[]);
  const cerrarSesion = () =>{
    user.signOut();
    setUsuario(null);
    console.log('Usuario Desconectado');
}
  // const [sidebar, setSidebar] = useState(true);
  // const showSidebar = () => setSidebar(!sidebar);
  return (  
    <>
    <div>
      <IconContext.Provider value={{ "color": "white"}}>
        <div className='menu-bootstrap container-cristal'>
          <div >
            <img className='m-5 img-thumbnail w-50 rounded-circle' src='https://cdn.domestika.org/c_limit,dpr_1.0,f_auto,q_auto,w_610/v1513615213/content-items/002/192/266/08.randy-lewis-fotografias-surrealistas-original.jpg?1513615213' alt='logo'/>
          </div>
          <div>
            <ul className='nav-menu-items' >
              {Menucontent.map((item, index) => {
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
          <div>
            {
              !usuario ?
              (
                <span></span>
              )  
              :
              (
                <button onClick={cerrarSesion} className="btn btn-danger ms-4">
                  <span>Cerrar sesion</span>
                </button>
                
              )
            }
            
          </div>
        </div>
      </IconContext.Provider>
    </div>  
    </>
  );
}

export default Menu;