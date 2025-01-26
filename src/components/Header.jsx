import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    
                <nav className="navbar navbar-expand-lg bg-dark fw-bold text-light">
                    <a href="" className="navbar-brand"><h2 className="text-warning fw-bold customm">Book Inventory System</h2></a>

                    <ul className="navbar-nav custom">
                        <li className="nav-item fw-bold"><NavLink to="/" className="nav-link text-light mx-3">Home</NavLink></li>
                        <li className="nav-item fw-bold"><NavLink to="/books" className="nav-link text-light">Book Details</NavLink></li>
                    </ul>
                </nav>
         
  );
};

export default Header;