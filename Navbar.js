import React from "react";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  const BlueClr=()=>{
    let s=document.body.style
    s.backgroundColor='blue';
  }
  const RedClr=()=>{
    let s=document.body.style
    s.backgroundColor='red';
    let btn=document.getElementsByClassName(".btn").style;
    btn.backgroundColor='blue';
    btn.color='white';
  }
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {" "}
            Navbar{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active"  href="/">Home</a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" to="/About">
                  About
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input
          className="form-check-input" onClick={props.toggleMode}
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <button className="btn" onClick={BlueClr} style={{borderColor:'black'}}>Blue color</button>
        <button className="btn" onClick={RedClr} style={{borderColor:'black'}}>Red color</button>
        <label className="form-check-label" for="flexSwitchCheckDefault">
          Change mode
        </label>
      </div>
      </nav>
    </div>
  );
}
