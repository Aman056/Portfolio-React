// // import React, { Component } from 'react'
// // import Child from './Child';


// // export default class Parent extends Component {

// //  constructor(){
// //   super()
// //  this.state = {
// //   id:0,
// //   name:"",
// //   deg:"",
// //   salary:"",
// //   state:"",
// //   country:""
// // }}

// // getData = (data)=>{
// //   this.setState({
// //     id:data.id,
// //     name:data.name,
// //     deg:data.deg,
// //     salary:data.salary,
// //     state:data.state,
// //     country:data.country
// //   })

// // }
// //   render() {
// //     return (
// //       <>
// //       <div>Parent</div>
// //       <h2>id:{this.state.id}</h2>
// //       <h2>Name:{this.state.name}</h2>
// //       <h2>Salary:{this.state.salary}</h2>
// //       <h2>state:{this.state.state}</h2>
// //       <h2>country:{this.state.country}</h2>

// //       <Child getData={this.getData}/>
// //       </>
// //     )
// //   }
// // }









// // // import Child from './Child'

// // // export default function Parent() {
// // //   return (
    
// // //     <>
// // //     const goog = {

// // //       id:1001, 
// // //       name:"Aman chauhan", 
// // //       salary:9000,
// // //       city: "mau",
// // //       state:"UP"
// // //     }
// // //     <div>Parent component</div>
// // //     <h1>This is the function component</h1>
    
// // //     <Child/>
    
// // //     </>
// // //   )
// // // }






// import React, {useState} from 'react'
// import Child from './Child'

// export default function Parent() {
  
//   var[id,setid] = useState("")
//   var[Name,setName] = useState("")
//   var[State,setState] = useState("")
//   var[Salary,setSalary] = useState("")
//   var[City,setCity] = useState("")
  
//   function getData(data){  

//     setid(data.id)
//     setName(data.Name)
//     setState(data.State)
//     setSalary(data.Salary)
//     setCity(data.City)
//     console.log(data)
//   }
//     return (
//     <>     
//     <div>Parent</div>
//     <h2>id:{id}</h2>
//     <h2>Name:{Name}</h2>
//     <h2>Salary:{Salary}</h2>
//     <h2>State:{State}</h2>
//     <h2>Country:{City}</h2>
//     <Child getData={getData}/>   
//     </>
//   )
// }
