import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/Auth/Login';
import Home from './pages/Home';

function App() {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  
// <Route exact path="/">
//   {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
// </Route>

  return (
    <div>
      <Router>
        <Switch>
          {token ? (
            <Route exact path="/" component={Home} />
          ) : (
            <Route exact path="/">
              <Login setToken={setToken} />
            </Route>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
