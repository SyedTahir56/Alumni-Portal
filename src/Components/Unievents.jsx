import "./Unievents.css";
import Events from "./../Events.json";

const Unievents = () => {
  return (
    <>
      <h1 className="text-center fs-1 fw-bold mt-3 mb-3">Upcoming Events</h1>
      <div className="container">
        <div className="row">
          {Events.news.map((news, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body d-flex flex-row">
                  <div>
                    <h5 className="card-title font-weight-bold mb-2">{news.title}</h5>
                    <p className="card-text">
                      <i className="far fa-clock pe-2"></i>{news.date}
                    </p>
                  </div>
                </div>
                <div className="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
                  <img className="img-fluid" src={news.imageUrl || "https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"} alt="Event" />
                  <a href="#!">
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </div>
                <div className="card-body">
                  <p className="card-text collapse" id={`collapseContent-${index}`}>
                    {news.description}
                  </p>
                  <div className="d-flex justify-content-between">
                    <a
                      className="btn btn-link link-danger p-md-1 my-1"
                      data-mdb-toggle="collapse"
                      href={`#collapseContent-${index}`}
                      role="button"
                      aria-expanded="false"
                      aria-controls={`collapseContent-${index}`}
                    >
                      Read more
                    </a>
                    <div>
                      <i
                        className="fas fa-share-alt text-muted p-md-1 my-1 me-2"
                        data-mdb-toggle="tooltip"
                        data-mdb-placement="top"
                        title="Share this post"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Unievents;
