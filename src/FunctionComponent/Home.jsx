import React from 'react'
export default function Home() {


  return (
    <>
      <div class="container" id="cont">
        <div class="row">
          <div class="col-8">
            <h3>Hello,</h3>
            <h4>I am,</h4>
            <h1>Aman Chauhan</h1>
            <h4>MERN Stack Developer, Software Engineer</h4>
          </div>  
        <div className="col-4" id="mainpic" ><img src="./port.gif" height={300} width={300} alt=""/> </div>
        </div>

        
        
        </div>

        <div className="container" id="next-bg">
          <div className='row'>
            <div class="col-12">
            <div className="row"><div className="col-12"><center><img src="./uparrow.png" height={30} width={30} alt="" className='text-danger' /></center></div></div></div>
              <h5 className="bg-secondary"><h2>Exprience</h2></h5>


          <p className="card-text m-3 "><h4>1. Analyze Infotech Lucknow , Python Django</h4> 01/07/2021 to 11/01/2022</p>
          <p className="card-text m-4 text-secondary">Python is an interpreted, object-oriented, high-level programming
            language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and
            dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting
            or glue language to connect existing components together.</p>


</div>


            <p className="card-text m-3"><h4>2. DUCAT IT Trainning school Noida sector-15, MERN Stack </h4> 01/08/2022 to present </p>
            <p className="card-text m-4 text-secondary">MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.<br />
              MongoDB — document database<br />
              Express(.js) — Node.js web framework<br />
              React(.js) — A client-side JavaScript framework<br />
              Node(.js) — The premier JavaScript web server<br /></p>
            <div className="card-text text-secondary m-4">MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional Angular.js front-end framework is replaced with React.js. Other variants include MEVN (MongoDB, Express, Vue, Node), and really any front-end JavaScript framework can work.</div>




        </div>
      {/* </div> */}

    </>
  )
}
