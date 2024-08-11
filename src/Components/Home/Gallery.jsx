import "./Gallery.css"

const Gallery = () => {
  return (
    <>
    <h1 className="mt-3 text-center fw-bold"> Gallery </h1>
     <section id="Gallery"  className="container mt-4">
      <div className="row d-flex" >
       
        <div className="col-md-6 col-lg-3 mb-4">
          <div>
            <img src="images/pic3.jpg" className="card-img-top" alt="Photo 1" />
            <div>
              
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div>
            <img src={'./images/4.jpg'} className="card-img-top" alt="Photo 2" />
            <div className="card-body">
             
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div>
            <img src={'./images/pic1.jpg'} className="card-img-top" alt="Photo 3" />
            <div className="card-body">
              
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div>
            <img src={'./images/pic2.jpg'} className="card-img-top" alt="Photo 4" />
            <div>
            
            </div>
          </div>
        </div>
      </div>
      <a id="btn" class=" btn btn-primary container" href="/Extended" role="button">See more</a>
    </section>
    </>
  )
}

export default Gallery