import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg sticky-top row" id='nav'>
        <div className="container-fluid col-12" >

          <div className='max-width'>
            <a className="navbar-brand dark" id="portf">Portfolio</a>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/#" className="nav-link active " aria-current="page" id="nav-cont"> Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/profile/AmanChauhan/Student" className="nav-link" id="nav-cont">Profile</Link>
              </li>
              <li className="nav-item">
                <Link to="/contect" className="nav-link" id="nav-cont">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" id="nav-cont">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/certificate's" className="nav-link" id="nav-cont">Certificate's</Link></li>

              <li className="nav-item">
                <Link to="/gallery" className="nav-link" id="nav-cont">Gallery</Link></li>

            </ul>
            <a className="navbar-brand dark" id="portfolio">Portfolio</a>
            </div>
        </div>
      </nav>

    </>
  )
}
