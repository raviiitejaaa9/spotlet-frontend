import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import './App.css';

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
