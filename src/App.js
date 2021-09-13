import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    if(localStorage.getItem('token')) {
      history.push('/add')
    } 
  }, [])

  const result = fetch("https://ox-sys.com/security/auth_check", {
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
      <div class="container">
        <h3>Authorize</h3>
        <hr />
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
