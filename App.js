import { useState } from "react";
import * as React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Alert from "./components/Alert";
// import About from "./components/About";
// import {ReactDOM} from "react-dom/client";
// import TextForms from './components/TextForms';
// import Dark from './components/dark';
import TextForm from "./components/TextForm";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

export default function App() {
  const [mode, setmode] = useState("dark");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      document.title = "textutils-dark mode";
      setInterval(() => {
        document.title = "textutils-textutils is good app";
      }, 2000);
      setInterval(() => {
        document.title = "textutils-install now";
      }, 1000);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "textutils-light mode";
    }
  };
  // for alert
  const [alert, setAlert] = useState();
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null)
    }, 1000);
  };
  return (
    <>
    {/* <Router> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <About/> */}
      {/* path: "about",
    element: <div>About</div>, */}
      <TextForm/>
      
    

      {/* <Routes>
      <Route path='/' element={<TextForm/>} />
      <Route path='/About' element={<About/>} />
      </Routes>
      </Router> */}
          
    </>
  );
}

