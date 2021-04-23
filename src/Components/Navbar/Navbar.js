import React from 'react';
import Logo from '../../Icon/Logo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="">
           
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div className="container-fluid">
    <Link className="navbar-brand mr-5" to="/"> <img style={{height:'50px'}} src={Logo} alt=""/> </Link>
    <form className="d-flex">
        
        
        <input className="form-control me-2" type="search" placeholder="Search your Destination"   aria-label="Search"/>
       
       
        
      </form>
    
    <div>
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/hotel">Hotel</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
</div>
    );
};

export default Navbar;