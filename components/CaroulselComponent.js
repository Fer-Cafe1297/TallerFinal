import React from 'react'
import styleCarousel from '../styles/Carousel.module.css'


const CaroulselComponent = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src='mesa.png' className="d-block w-100" alt="baner1" style={{width:'100%'}}/>
          </div>
          <div className="carousel-item">
            <img src='Hero1b_Idear.png' className="d-block w-100" alt="baner2" />
          </div>
          <div className="carousel-item">
            <img src='Hero2_Disenar.png' className="d-block w-100" alt="baner3" />
          </div>
          <div className="carousel-item">
            <img src='Hero3_Crear.png' className="d-block w-100" alt="baner4" />
          </div>
          <div className="carousel-item">
            <img src='Hero4_Resolver.png' className="d-block w-100" alt="baner5" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default CaroulselComponent