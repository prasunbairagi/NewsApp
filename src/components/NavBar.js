import React from 'react'
import { Link } from "react-router-dom";
const NavBar =(props)=> {
 
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="className"><Link to="/business" className="nav-link">business</Link></li>
                <li className="className"><Link to="/entertainment" className="nav-link">entertainment</Link></li>
                <li className="className"><Link to="/general" className="nav-link">general</Link></li>
                <li className="className"><Link to="/health" className="nav-link">health</Link></li>
                <li className="className"><Link to="/science" className="nav-link">science</Link></li>
                <li className="className"><Link to="/sports" className="nav-link">sports</Link></li>
                <li className="className"><Link to="/technology" className="nav-link">technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );

}

export default NavBar