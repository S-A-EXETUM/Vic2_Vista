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
  // const [sidebar, setSidebar] = useState(true);
  // const showSidebar = () => setSidebar(!sidebar);
  return (  
    <>
        <IconContext.Provider value={{ className: "nav-icon"}}>
        {/* <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div> */}
        <div className='nav-menu'>
          <ul className='nav-menu-items'>
            {/* <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li> */}
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
          <button className="">Iniciar Sesión</button>
            
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Menu;