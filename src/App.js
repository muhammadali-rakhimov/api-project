import { useEffect, useState, lazy, Suspense } from 'react';
import { useHistory } from 'react-router';
import http from './services/http';
import './App.css';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const HomePage = lazy(() => import("./pages/Home"));
const LoginPage = lazy(() => import("./pages/Auth/Login"));
const RegisterPage = lazy(() => import("./pages/Auth/Register"));

function App() {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if(localStorage.getItem('token')) {
      history.push('/add')
    }
  }, [])

  const result = fetch(`${http}/security/auth_check`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
  })
    .then(res => console.log(`Response -> ${res.data}`))
    .catch(err => console.log(`There's have an error -> ${err}`))

  console.log(result)

  return (
    <div className="App">
      <Suspense fallback={<h1>Error From React!</h1>}>
        <Router>
          <Switch>
            {token ? (
              <Route exact path="/" component={HomePage} />
            ) : (
              <Route
                exact
                path="/"
                render={() => <LoginPage setToken={setToken} />}
              />
            )}
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
