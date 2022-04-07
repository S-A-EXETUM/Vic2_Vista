import React from 'react';
import { useNavigate } from 'react-router-dom';
//import imagen from '../../public/verde.jpg'

//const urlImg = "https://img.freepik.com/vector-gratis/fondo-nube-turquesa_91008-163.jpg"
const Inicio = () => {
  const navegacion = useNavigate();
  const redirectLogin = () =>{
    navegacion('/login');
  }
  return (
    <div className='mt-2 contenedor'>
    {/*  <section class="ps-3 pe-5">
            <p class="h6"><strong>Descripción</strong></p>
            <div class="contenedor ps-2" id="desc-vista" style="border: solid #cecece .1px;border-radius: 2px; max-height: 200px; width: auto;">
              <p class="text-start">Aquí irá la descripción de su publicación</p>
            </div>
          </section> */}
      <div className='row p-5' style={{"margin": "0"}}>
        <div className='col-6'>
          <div className='card shadow'>
            <div className='card-body'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit aut sit distinctio. Et, atque perferendis incidunt inventore dolor consectetur numquam molestiae aliquid, mollitia illum repellendus dicta animi odio, nulla impedit.</p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='text-center'>
            <button onClick={redirectLogin} className='btn btn-outline-light fs-4 fst-italic fw-bold mt-5'>Inicie Sesión o Registrese Aquí</button>
          </div>
        </div>
      </div>
      <div className='p-5' style={{"margin": "0"}}>
        <div className='card card-body shadow bg-info bg-opacity-10'>
          <div className='row'>
            <div className='col-4'>
                <img className='img-thumbnail' src='https://static1.abc.es/media/bienestar/2021/09/23/mitos-deporte-kgvC--1200x630@abc.jpg' alt='ejercicio'></img>
            </div>
            <div className='col'>
              <div className='mt-4 bg-black bg-opacity-10 card card-body'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nulla et, quia quibusdam quidem tempora ullam nesciunt iste, modi illo tenetur aliquid ipsa repellendus, harum sunt tempore optio. Expedita, recusandae.</p>
              </div>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-8'>
              <div className='mt-5 bg-black bg-opacity-10 card card-body'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nulla et, quia quibusdam quidem tempora ullam nesciunt iste, modi illo tenetur aliquid ipsa repellendus, harum sunt tempore optio. Expedita, recusandae.</p>
              </div>
            </div>
            <div className='col-4'>
                <img className='img-thumbnail' src='https://st3.depositphotos.com/1027198/12984/i/450/depositphotos_129845962-stock-photo-diet-food-concept.jpg' alt='dieta'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio;