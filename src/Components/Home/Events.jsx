import React from 'react';

const Events = () => {
  return (
    <>
      
      <div id="carouselExample" className="carousel slide h-75">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/c1.jpg" className="d-block w-100 h-100" alt="Event 1" />
          </div>
          <div className="carousel-item">
            <img src="./images/c2.jpg" className="d-block w-100 h-100" alt="Event 2" />
          </div>
          <div className="carousel-item">
            <img src="./images/c3.jpg" className="d-block w-100 h-100" alt="Event 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Events;
