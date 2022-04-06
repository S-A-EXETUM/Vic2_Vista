import React from 'react';
//import imagen from '../../public/verde.jpg'

const urlImg = "https://img.freepik.com/vector-gratis/fondo-nube-turquesa_91008-163.jpg"
const Inicio = () => {
  return (
    <div style={{"backgroundImage": `url(${urlImg})`,
        "backgroundRepeat": "no-repeat",  
        "height": "100%", 
        "width": "100%", 
        "backgroundSize": "cover",
        "backgroundAttachment": "fixed"}}>
        <h1>Hola</h1>
    </div>
  )
}

export default Inicio;