import React from 'react'
            
    //   img: 'file:///C:/Users/vijay/Desktop/image/dca.jpg',
     

    //   img: 'file:///C:/Users/vijay/Desktop/image/new1-transformed.png',
     

    //   img: 'file:///C:/Users/vijay/Desktop/image/img1.jpg',
     


    //   img: 'file:///C:/Users/vijay/Desktop/image/img.jpg',
     


   
   

export default function Certificate() {
    return (
        <>
           


                <div className="card mt-2 mb-3 bg-dark text-warning" >
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src="./mern.png" alt='Responsive image' className='img-flude'/>                           
                        </div>
                      
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title text-danger" >MERN Stack Developer-</h4>
                                <p className="card-text">MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based.<br />
                                </p>    
                                <p>I'm Pursuing from <b className='text-danger'>DUCAT IT TRAINNING SCHOOL NOIDA SECOTR-15</b></p>
                                <p>The time duration of these course is [ 01/09/2021 to Prasent ] </p>
                                                    
                        
                            </div>
                        </div>

                    </div>
                </div>

                <div className="card mb-3 bg-dark text-warning" >
                    <div className="row g-0">
                      
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title text-danger">Python Django Developer-</h4>
                                <p className="card-text"> Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. Built by experienced developers, Django takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel.<br />
                                </p>    
                                <p>I have Completed from Analyze Infotech Tedipuliya Lucknow (UP)</p>
                                <p>The time duration of these course is [ 01/07/2021 to 01/01/2022 ] </p>
                                <p>Grade <b>Very Good</b></p>                       
                        
                            </div>
                        </div>

                        <div className="col-md-4">
                        <img src="./python.png" height={400} width={400}   alt='Responsive image' className='img-flude'/>                           
                        </div>
                    </div>
                </div>



                {/* <p class="text-light"> */}
                <div className="card mb-3 bg-dark text-warning " >
                    <div className="row g-0">
                        <div className="col-md-4 " id="img">
                        {/* <Avatar alt="Aman" src='/src/assets/image/dca.jpg' /> */}
                        <img src="./dca.png" className='img-fluid' alt=""/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title text-danger" >DCA-'</h4>
                                <p className="card-text">DCA, Diploma in Computer Applications, is a one-year diploma course in the field of Computer Applications which involves the study of numerous computer applications such as MS Office, Internet Applications, Operating System, Database Management System (DBMS), HTML among other subjects.<br />
                                </p>    
                                <p>I have Completed from Space Technology and research Kopaganj Mau Utter Pradesh.</p>
                                <p>The time duration of these course 2017 to 2018</p>
                                <p>Grade <b>Very Good</b></p>
                            </div>
                        </div>
                    </div>
                </div>
           


        </>
    )
}
