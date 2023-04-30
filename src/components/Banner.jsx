import React from "react";
import img1 from "../assets/bannernew.jpeg";
import { Link } from "react-router-dom";
export function Banner() {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="img"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        <Link
              to="/"
              className="border border-[#d87093] px-8 py-2.5 relative top-4
               hover:bg-[#d87093] duration-300 ease-in-out sm:text-base text-sm"
            >
              Explore
            </Link>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img1} class="d-block w-100" alt="img"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
        <Link
              to="/"
              className="border border-[#d87093] px-8 py-2.5 relative top-4
               hover:bg-[#d87093] duration-300 ease-in-out sm:text-base text-sm"
            >
              Explore
            </Link>
      </div>
    </div>
    
    <div class="carousel-item">
      <img src={img1} class="d-block w-100" alt="img"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
        <Link
              to="/"
              className="border border-[#d87093] px-8 py-2.5 relative top-4
               hover:bg-[#d87093] duration-300 ease-in-out sm:text-base text-sm"
            >
              Explore
            </Link>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>
    </div>
  );
}
