import './App.css';

function App() {
  const fetching = fetch("https://ox-sys.com/security/auth_check", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "GET"
  }).then(res => console.log(`Response -> ${res.data}`)).catch(err => console.log(`There's have an error -> ${err}`))

  console.log(fetching)

  return (
    <div className="App">
      <p>Hey What's Up</p>
    </div>
  );
}

export default App;
