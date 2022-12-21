import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
// import { IconContext } from "react-icons";


import React from "react"

const Footer = () =>

    <footer className="page-footer font-small blue pt-4 bg-dark">
        <div className="container-fluid  text-md-left text-secondary">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3 ml-0 " id='address'>
                    <h5 className="text-uppercase text-white">Address:</h5>
                    <p>Home Location : Deeh sthan Sondsar chauk,<br />
                        Vill: Sondsar<br />
                        Post: Faizullahapur<br />
                        Diss: MAU <br />
                        Pin:  275305<br />
                        State: Utter Pradesh<br />
                        Country : India</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-3 mb-md-0 mb-3 ml-5" id='link'>
                    <h5 className="text-uppercase text-center text-white">Links</h5>
                    <ul className="list-unstyled">
                        <li>Email:    <a className='text-decoration-none' href="#!">Vijaychau056@gmail.com</a></li>
                        <li>Git:      <a className='text-decoration-none' href="#!">Aman056</a></li>
                        <li>LinkedIn: <a className='text-decoration-none' href="#!">aman-chauhan-76b03a230</a></li>
                        <li><a className='text-decoration-none' href="#!"></a></li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3 text-center" id='followme'>
                    <h5 className="text-uppercase text-white">Follow Me</h5>

                    <a href="https://www.instagram.com/"> <InstagramIcon /></a>
                    <a href="https://www.facebook.com/"><FacebookIcon /></a>
                    <a href="#!"><GitHubIcon /></a>
                    <a href="https://www.linkedin.com/in/aman-chauhan-76b03a230"><LinkedInIcon /></a>
                    <a href="#!" ><GoogleIcon /></a>
                    <a href="#!"><TwitterIcon /></a>


                </div>
                <div className="col-md-3 mb-md-0 mb-3 text-center" id='contect'>
                    <h5 className="text-uppercase text-white">contact me</h5>
                    <ul className="list-unstyled">
                        <li>+91 8423174102</li>
                        <li>+91 8318087915</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center">
            <p> <a className='text-decoration-none text-white' href="#">© 2022 Copyright: Aman Portfolio.com </a></p>
        </div>

    </footer>
export default Footer