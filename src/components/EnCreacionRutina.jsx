import React, {useState} from 'react'
import axios from 'axios'

export const EnCreacionRutina = ({nombre}) => {
  const url = 'http://localhost:3001/ejercicios/';
  const [rutina,setRutina] = useState([]);
  
  const getRutina = () => {
     axios.get(url)
     .then(response => {
       const {data} = response
       console.log(data)
       setRutina(data);
     })
  }
  return (
    <>
        <div className='row justify-content-center' style={{"margin": "0"}}>
          <div className="text-center" style={{"width": "700px"}}>
              <div className='mt-4 mb-3 bg-black bg-opacity-10 card card-body'>
                <h2>{nombre}</h2>
                  <button onClick={getRutina} className="btn button-light-outline">PRUEBA</button>
              </div>
          </div>
      </div> 
        <div className=''style={{"margin": "0"}} > 
        <div className="mt-3 ms-5 me-5">
          <div className="card bg-black bg-opacity-10 contenedor" style={{"height": "65%", "margin":"inherit"}}>
            <div className='row justify-content-center' style={{"margin":"0"}}>
              <div className="col-10">
                <div className="card-body text-center">
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro vero repellendus commodi aliquid quod, ratione, esse et doloremque recusandae molestias qui excepturi deleniti exercitationem iste reprehenderit vel alias accusantium voluptas!</span>
                </div>
              </div>
            </div>
            <div className="row justify-content-center" style={{"margin": "0"}}>
              <div className="col-12">
                <div className="card-header">
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore a consequuntur! Rem fugit culpa in possimus, dolorem obcaecati doloremque commodi laboriosam sapiente reprehenderit laborum tenetur consectetur voluptates consequatur atque.</span>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore a consequuntur! Rem fugit culpa in possimus, dolorem obcaecati doloremque commodi laboriosam sapiente reprehenderit laborum tenetur consectetur voluptates consequatur atque.</span>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore a consequuntur! Rem fugit culpa in possimus, dolorem obcaecati doloremque commodi laboriosam sapiente reprehenderit laborum tenetur consectetur voluptates consequatur atque.</span>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore a consequuntur! Rem fugit culpa in possimus, dolorem obcaecati doloremque commodi laboriosam sapiente reprehenderit laborum tenetur consectetur voluptates consequatur atque.</span>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore a consequuntur! Rem fugit culpa in possimus, dolorem obcaecati doloremque commodi laboriosam sapiente reprehenderit laborum tenetur consectetur voluptates consequatur atque.</span>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore a consequuntur! Rem fugit culpa in possimus, dolorem obcaecati doloremque commodi laboriosam sapiente reprehenderit laborum tenetur consectetur voluptates consequatur atque.</span>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore a consequuntur! Rem fugit culpa in possimus, dolorem obcaecati doloremque commodi laboriosam sapiente reprehenderit laborum tenetur consectetur voluptates consequatur atque.</span>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore a consequuntur! Rem fugit culpa in possimus, dolorem obcaecati doloremque commodi laboriosam sapiente reprehenderit laborum tenetur consectetur voluptates consequatur atque.</span>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore a consequuntur! Rem fugit culpa in possimus, dolorem obcaecati doloremque commodi laboriosam sapiente reprehenderit laborum tenetur consectetur voluptates consequatur atque.</span>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
