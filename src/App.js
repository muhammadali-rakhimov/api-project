import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Auth/Login';
import { RegisterPage } from './pages/Auth/Register';

function App() {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  
  return (
    <div>
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
    </div>
  );
}

export default App;
