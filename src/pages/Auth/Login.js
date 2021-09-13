import { useRef, useState } from "react";
import http from "../../services/http";

const Login = ({ setToken }) => {
  const [hasError, setHasError] = useState(false);

  const loginInput = useRef(null);
  const passwordInput = useRef(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
    http
      .get("/security/auth_check", {
        _username: loginInput.current.value,
        _password: passwordInput.current.value,
        _subdomain: 'face'
      })
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
      })
      .catch(setHasError(true));
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
                  Login or password is wrong!
                </div>
              ) : (
                <></>
              )}
              <form onSubmit={onFormSubmit}>
                <div className="mb-3">
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