import React from 'react'
import PropTypes from 'prop-types';
import "../css/navbar.css";

function Navbar({title, about, toggleMode, colorMode, inverseColorMode}) {
  
  return (
    <div className="m-5">
      <nav className={`navbar navbar-expand-lg` }>
        <div className="container-fluid">
          <a className={`navbar-brand  ntr1 text-${inverseColorMode}`} href="/" ><h3>{title}</h3></a>
          <button className={`navbar-toggler text-${inverseColorMode}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className={`navbar-toggler-icon navbar-toggler-icon-color-${inverseColorMode}`}></span>
          </button>
          <div className="collapse navbar-collapse font-18" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ntr1" >
              <li className={`nav-item ntr1 navbarUl-${colorMode}`}>
                <a className={`nav-link ntr1`}  href="/">Blog</a>
              </li>
              <li className={`nav-item ntr1 navbarUl-${colorMode}`}>
                <a className={`nav-link ntr1`}  href="/">Courses</a>
              </li>
              <li className={`nav-item ntr1 navbarUl-${colorMode}`}>
                <a className={`nav-link ntr1`}  href="/">Discord</a>
              </li>
              <li className={`nav-item ntr1 navbarUl-${colorMode}`}>
                <a className={`nav-link ntr1`}  href="/">Chats</a>
              </li>
              <li className={`nav-item ntr1 navbarUl-${colorMode}`}>
                <a className={`nav-link ntr1`}  href="/">Calls</a>
              </li>
              <li className={`nav-item ntr1 navbarUl-${colorMode}`}>
                <a className={`nav-link ntr1`}  href="/">Workshops</a>
              </li>
              <li className={`nav-item ntr1 navbarUl-${colorMode}`}>
                <a className={`nav-link ntr1`}  href="/">{about}</a>
              </li>
            </ul>
            <form className="d-flex">
            <div className={`form-check form-switch font-18 ntr1 colorMode-${colorMode}`}>
              {/* <input className="form-check-input" onClick={()=>{toggleMode()}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
              {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch to {inverseColorMode} mode</label> */}  
              <div onClick={()=>{toggleMode()}} className={`colorSwitch ${inverseColorMode}`}></div>
            </div>
            </form>
          </div>
          <a href="/"><img src="/login.png" alt="login" style={{width:"3rem", marginLeft:"30px"}} /></a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

Navbar.propTypes ={
  title : PropTypes.string.isRequired,
  aboutText  : PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title  : "Set Title Please" ,
  aboutText : "Set About Text",
};