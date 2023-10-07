import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import './App.css';

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/signup" element = {<SignupForm/>} />
        <Route path = "/login" element = {<LoginForm/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
