
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";

function App() {
  const name = 'Alexandra';
  return (
      <Router>
          <div className="App">
              <h1>Hello from react</h1>
              <h2>Hello {name}</h2>
          </div>
          <Route path="/" exact component={Homepage}/>
      </Router>

  );
}

export default App;
