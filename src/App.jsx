import LeftCard from './Components/LeftCard';
import RightCard from './Components/RightCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="LeftCard">
        <LeftCard />
      </div>
      <div className="RightCard">
        <RightCard />
      </div>
    </div>
  );
}










// import { useState, useEffect } from 'react'
// import LeftCard from './Components/LeftCard';
// import RightCard from './Components/RightCard';
// import Logo from "./assets/Logo.svg"
// import "./App.css";


// function App() {
  


//   return(
//     <div className='app'>
//       <div >
//         <img className='logo' src={Logo} alt=" " />
//       </div>
      

//       <div className="log-in">
//         <LeftCard/>
//       </div>

//       <div>
//         <RightCard/>
//       </div>

      
//     </div>
//   )
// }







// const Person = (props) => {
//   return(
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.lname} </h2>
//       <h3>Age: {props.age}</h3>
//     </>
//   )
// }

// function App() {
//   const [counter, setCounter] = useState(0)
//   useEffect (
//     () => {
//       alert ('page reloaded')
      
//     },
//     []
//   )
//   const name = 'John'
//   const isNameShowing = false
//   const products = [
//   { title: 'Cabbage', id: 1 },
//   { title: 'Garlic', id: 2 },
//   { title: 'Apple', id: 3 },
//   ]
//   const listItems = products.map(product =>
//   <li key={product.id}>
//     {product.title}
//   </li>
// )

//   return (
//     <>
//       <div>
//         <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
//         <h1>{counter}</h1>
//         <button onClick={() => setCounter((nextCount) => nextCount +1)}>+</button>
//       </div>

//       <ul>{listItems}</ul>
      
//     </>
//   )
// }

export default App
