import axios from "axios";
import { useRef, useState } from "react";

const Login = ({ setToken }) => {
  const [hasError, setHasError] = useState(false);
  // eslint-disable-next-line
  const [loader, setLoader] = useState(false);

  const loginInput = useRef(null);
  const passwordInput = useRef(null);
  const subdomainInput = useRef(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    params.append('_username', loginInput.current.value);
    params.append('_password', passwordInput.current.value);
    params.append('_subdomain', subdomainInput.current.value);
    
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    axios.post(`https://${subdomainInput.current.value}.ox-sys.com/security/auth_check`, params, config)
    .then((res) => {
      setLoader(true)
      setToken(res.data.token)
      window.localStorage.setItem("token", res.data.token);
      setLoader(false)
    })
    .catch(() => {
      setHasError(true)
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header">
              <h2 className="text-center">Login Page</h2>
            </div>
            <div className="card-body p-5">
              {hasError ? (
                <div className="alert alert-danger" role="alert">
                  Subdomain, Login or password is wrong!
                </div>
              ) : (
                <></>
              )}
              <form onSubmit={onFormSubmit}>
                <div className="mb-1">
                  <label htmlFor="inputSubdomain1" className="form-label">
                    Subdomain
                  </label>
                  <input
                    ref={subdomainInput}
                    type="text"
                    className="form-control"
                    id="inputSubdomain1"
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="inputUsername1" className="form-label">
                    Username
                  </label>
                  <input
                    ref={loginInput}
                    type="text"
                    className="form-control"
                    id="inputUsername1"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    ref={passwordInput}
                    type="password"
                    className="form-control"
                    id="inputPassword1"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Login;