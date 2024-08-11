import "./Signin.css";

const Signin = () => {
  return (
    <>
      <section className="signin-area signin-one bg-light">
        <h1 className="text-center fs-1 fw-bold">Login</h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <form action="#">
                <div className="signin-form form-style-two">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-input">
                        <label>Your account will be under this email</label>
                        <div className="input-items default">
                          <input type="text" placeholder="Email" />
                          <i className="lni lni-envelope"></i>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-12">
                      <div className="form-input">
                        <label>Password for your account</label>
                        <div className="input-items default">
                          <input type="password" placeholder="Password" />
                          <i className="lni lni-key"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-input">
                      <button type="button" className="btn btn-warning">
                          Sign In!
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-input text-center">
                        <p className="text">
                          By signing in you agree with the
                          <a href="javascript:void(0)"> Terms and Conditions</a> and
                          <a href="javascript:void(0)"> Privacy</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
