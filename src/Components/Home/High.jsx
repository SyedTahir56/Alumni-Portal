const High = () => {
  return (
    <>
      <section className="container mt-5"> 
        <div className="row">
          <h1 className="text-center fw-bold mb-5">High Achievers</h1>

          <div className="col-lg-4">
            <img
              src='./images/a1.jpg'
              alt="High Achiever 1"
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
            />
            <h2 className="fw-normal">Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum tempore non praesentium suscipit architecto vero laudantium, ab est amet.
            </p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>
          {/* /.col-lg-4 */}

          <div className="col-lg-4">
            <img
              src='./images/a2.jpg'
              alt="High Achiever 2"
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
            />
            <h2 className="fw-normal">Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi nostrum adipisci soluta sint minus fugiat aperiam suscipit repellat aspernatur.
            </p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>
          {/* /.col-lg-4 */}

          <div className="col-lg-4">
            <img
              src='./images/a3.jpg'
              alt="High Achiever 3"
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
            />
            <h2 className="fw-normal">Heading</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quisquam sint beatae laudantium impedit aspernatur autem quidem voluptatibus suscipit qui.
            </p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>
          {/* /.col-lg-4 */}

        </div>
      </section>
    </>
  );
}

export default High;
