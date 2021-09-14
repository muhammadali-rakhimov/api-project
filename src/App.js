import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from './pages/Auth/Login';
import Home from './pages/Home';

function App() {
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  return (
    <div>
      <Router>
        <Switch>
          {token ? (
            <Route exact path="/" component={Home} />
          ) : (
            <Route exact path="/" render={() => <Login setToken={setToken} />} />
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
