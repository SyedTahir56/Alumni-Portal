

const Contact = () => {
  return (
    <>
    <section id="contactus" className="container">

    <div className=" mt-5">
      <h2>Contact Us</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact</label>
          <input
            type="tel"
            className="form-control"
            id="contact"
            placeholder="123-456-7890"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="query" className="form-label">Query</label>
          <textarea
            className="form-control"
            id="query"
            rows="4"
            placeholder="Your query here..."
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </section>
    
    </>
  )
}

export default Contact