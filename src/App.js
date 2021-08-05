
import Navbar from "./navbar";
import Home from "./Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <Home />
      </div>
    </div>
  );
}

export default App;
