import React from 'react'
import { Link } from 'react-router-dom';

function setColor(btnid){
           
  if(btnid == 'button'){
      var prop = document.getElementById(btnid);
      prop.style.color = 'yellow'
      document.getElementById('button1').style.color = 'red';
      document.getElementById('button2').style.color = 'red';
      document.getElementById('button3').style.color = 'red';
      document.getElementById('button4').style.color = 'red';
      document.getElementById('button5').style.color = 'red';
  }
  else if(btnid == 'button1'){
      var prop = document.getElementById(btnid);
      prop.style.color = 'yellow'
      document.getElementById('button').style.color = 'red';
      document.getElementById('button2').style.color = 'red';
      document.getElementById('button3').style.color = 'red';
      document.getElementById('button4').style.color = 'red';
      document.getElementById('button5').style.color = 'red';
  }
  else if(btnid == 'button2'){
      var prop = document.getElementById(btnid);
      prop.style.color = 'yellow'
      document.getElementById('button').style.color = 'red';
      document.getElementById('button1').style.color = 'red';
      document.getElementById('button3').style.color = 'red';
      document.getElementById('button4').style.color = 'red';
      document.getElementById('button5').style.color = 'red';
  }
  else if(btnid == 'button3'){
      var prop = document.getElementById(btnid);
      prop.style.color = 'yellow'
      document.getElementById('button').style.color = 'red';
      document.getElementById('button1').style.color = 'red';
      document.getElementById('button2').style.color = 'red';
      // document.getElementById('button3').style.color = 'red';
      document.getElementById('button4').style.color = 'red';
      document.getElementById('button5').style.color = 'red';
  }
  else if(btnid == 'button4'){
      var prop = document.getElementById(btnid);
      prop.style.color = 'yellow'
      document.getElementById('button').style.color = 'red';
      document.getElementById('button1').style.color = 'red';
      document.getElementById('button2').style.color = 'red';
      document.getElementById('button3').style.color = 'red';
      // document.getElementById('button4').style.color = 'red';
      document.getElementById('button5').style.color = 'red';
  }
  else if(btnid == 'button5'){
      var prop = document.getElementById(btnid);
      prop.style.color = 'yellow'
      document.getElementById('button').style.color = 'red';
      document.getElementById('button1').style.color = 'red';
      document.getElementById('button2').style.color = 'red';
      document.getElementById('button3').style.color = 'red';
      document.getElementById('button4').style.color = 'red';
      // document.getElementById('button5').style.color = 'red';
  }
}


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
                <Link to="/#" className="nav-link active" aria-current="page" id="button" onClick={()=>setColor('button')} > Home</Link>
                
              </li>
              <li className="nav-item">
                <Link to="/profile/AmanChauhan/Student" className="nav-link" id="button1" onClick={()=>setColor('button1')} >Profile</Link>
              </li>
              <li className="nav-item">
                <Link to="/contect" className="nav-link" id="button2" onClick={()=>setColor('button2')} >Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" id="button3" onClick={()=>setColor('button3')} >About</Link>
              </li>
              <li className="nav-item">
                <Link to="/certificate's" className="nav-link" id="button4" onClick={()=>setColor('button4')} >Certificate's</Link></li>

              <li className="nav-item">
                <Link to="/gallery" className="nav-link" id="button5" onClick={()=>setColor('button5')}>Gallery</Link></li>

            </ul>
            <a className="navbar-brand dark" id="portfolio">Portfolio</a>
            </div>
        </div>
      </nav>

    </>
  )
}
