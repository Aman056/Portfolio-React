
// //  import React from "react";

// // export default class StateM extends component {
// //     constructor(props){
// //         super(props)
// //         this.state = {
// //             num: 1
// //         }
// //     }
// //     increment =()=>{
// //         this.state({ num: this.state.num + 1 })
// //     }


// //     decrement(){
// //          this.state({ num: this.state.num - 1 })
// //     }
// //     render(){

// //         return(
// //             <>            
// //             <h1>Class component</h1>
// //             <h1>State management </h1>
// //             <h3>Number = {this.state.num}</h3>
// //             <button onClick={()=>this.increment()}>Like</button>
// //             <button onClick={()=>this.decrement()}>Dislike</button>
// //             </>

// //         )
// //     }
// // }

// // export default class StateM extends React.Component {
// //         constructor(){
// //         super()
// //         this.state = {
// //             num:1
// //           }
// //         }
// //         increment=()=>{
// //           this.setState({num:this.state.num+1})
// //           console.log(this.state.num)
// //         }
        
        
// //         decrement(){
// //           if(this.state.num > 0)
// //           this.setState({num:this.state.num-1})
// //           console.log(this.state.num)

// //         }
        
// //         render() {
    
// //       return (
// //          <>
// //             <h1>State management </h1>
// //             <h3>Number = {this.state.num}</h3>
// //             <button onClick={()=>this.increment()}>Like</button>
// //             <button onClick={()=>this.decrement()}>Dislike</button>
// //          </>

// //       )
// //     }
// //   }

// import React,{useState} from "react";

// export default function StateManagement(){

//   var [like, setlike] = useState(0)    
//   var [Dislike, setDislike] = useState(0)        
//       function increment(){
//         setlike(++like)
//         console.log(like)
//       }
//       function decrement(){
//         setDislike(++Dislike)
//         console.log(Dislike)
//       }
//       return(
//         <>
//         <h1>like button </h1>
//         <h2> like {like} </h2>
//         <h2> Dislike {Dislike} </h2>
//         <button onClick={()=> increment()}>like</button>
//         <button onClick={()=> decrement()}>Dislike</button>
//         </>
//       )
// }

