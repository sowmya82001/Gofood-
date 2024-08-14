import React from 'react'
import image1 from '../imgs/8ca9ef9da55ef94d2cff65f4323b6e12_o2_featured_v2.avif'
import image2 from '../imgs/biryani in hyderabad.webp'
import image3 from '../imgs/pizza.jpg'

export default function Carousal() {
  return (
    <div>
      
        <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className="carousel-caption" style={{zIndex:"10"}}>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>

    </div>
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">  
      <img src={image3} className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
