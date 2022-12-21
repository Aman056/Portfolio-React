import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



export default function Profile() {
  return (
    <>

      <div class="container" id="contprofile">
        {/* <div className='row'> */}
          <div className='col-3'>
            <h3>I,</h3>
            <h4>am a,</h4>
            <h1>MERN Stack Developer!</h1>
          </div>
          <div className='row'>
            <div className="col-12 d-flex " id='pbtn'>
            {/* <button class="name noselect">BoxShadow</button> */}

            
              <Stack direction="row" spacing={2} />
              <Button className='name noselect' variant="outlined" color="error" id='educationbtn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" data-bs-placement="top" data-bs-custom-class="custom-tooltip" >Education</Button>
              <Stack direction="row" spacing={4} />
              <Button  className='name noselect' variant="outlined" color="error" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" id='Skillbtn'>Skill's</Button>
              </div>
          </div>

          {/* </div> */}
        {/* </div> */}
      </div>


      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-12 mt-5">
            <h2 className='bg-secondary'>Achivement's</h2>

            <ul className='text-white'>

              <li>Well Deciplined 1st Prize In  10th Class.</li>
              <li>Chess Winner 1st Prize in Graduation.</li>
              <li>Drawing First Prize Winner in Graduation.</li>

            </ul>
          </div>
        </div>
      </div>






      <div class="offcanvas offcanvas-end bg-info" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasRightLabel">Skill's</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body bg-secondary">
                  {/* <div class="row"> */}
                    <div class="col-6"><h5>Full Stack Developer</h5></div>
                    <div class="col-6"><h5>Javascript</h5></div>
                    <div class="col-6"><h5>Python</h5></div>
                    <div class="col-6"><h5>Django</h5> </div>
                    <div class="col-6"><h5>Node.js</h5></div>
                    <div class="col-6"><h5>React.js</h5></div>
                    <div class="col-6"><h5>HTML</h5> </div>
                    <div class="col-6"><h5>CSS </h5> </div>
                    <div class="col-6"><h5>Bootstrap</h5></div>
                    <div class="col-6"><h5>GitHub </h5> </div>
                    <div class="col-6"><h5>Material UI </h5> </div>
                  </div>
                </div>

                <div class="offcanvas offcanvas-start bg-scondary" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title " id="offcanvasExampleLabel">Education</h5>
                  <button variant="outlined" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>


                <div class="offcanvas-body">
                  <div>
                    <h4>Bachelor Of Technology- <h6>2022</h6></h4><h6>Computer Science and Engineering</h6>
                    <p>Himalayan Institute Of Technology And Management, Lucknow</p>
                    <p>SGPA (7.5)</p>
                    <h4>Intermediate-<h6>2018</h6></h4><h6>Mathematices</h6>
                    <p>Pt. DDSK Inter College, Mau</p>
                    <p>Percentage (..)</p>
                    <h4>High School-<h6>2016</h6></h4><h6>Science</h6>
                    <p>Ram Nagina Singh Inter College, Mau</p>
                    <p>Percentage(..)</p>
                  </div>

                </div>
              {/* </div> */}
            </div>


    </>

  )
}

