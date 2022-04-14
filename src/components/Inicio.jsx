import React, { useState, useEffect } from 'react'
//import imagen from '../../public/verde.jpg'

//const urlImg = "https://img.freepik.com/vector-gratis/fondo-nube-turquesa_91008-163.jpg"
// Constanza Castillo 12/04/2022
const Inicio = () => {
  return (
    <div className='row container justify-content-evenly'>
      <div id="carouselExampleCaptions" className="carousel slide p-5" style={{ "width": "90%" }} data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn.discordapp.com/attachments/960953221596196927/963479279776178227/Vic2.png" style={{ "height": "600px", "width": "100%" }} className="d-block" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className='bg-dark bg-opacity-50 card shadow text-light'>
                <h5>Vic2</h5>
                <p>Aplicación de dietas y ejercicios en casa</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://static1.abc.es/media/bienestar/2021/09/23/mitos-deporte-kgvC--1200x630@abc.jpg" style={{ "height": "600px", "width": "100%" }} className="d-block" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className='bg-dark bg-opacity-50 card shadow text-light'>
                <h5>Rutinas de ejercicios</h5>
                <p>Revisa y selecciona tus ejercicios favoritos para trabajar distintas secciones del cuerpo.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://st3.depositphotos.com/1027198/12984/i/450/depositphotos_129845962-stock-photo-diet-food-concept.jpg" style={{ "height": "600px", "width": "100%" }} className="d-block" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className='bg-dark bg-opacity-50 card shadow text-light'>
                <h5>Dietas</h5>
                <p>Visualiza alimentos y dietas para adelgazar según distintos tipos de cuerpos o acompañar una rutina de ejercicios.</p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Inicio