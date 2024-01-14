// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import './App.css'

// function App() {

//   return (
//     <div>
//       <Todo id = {5}/>
//     </div>
//   )
// }

// function Todo({id}){

//   const [todo, setTodo] = useState({})

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todo?id="+id)
//     .then(function(response){
//       setTodo(response.data.todo)
//     })
//   } , [])

//   return <div>
//     <h1>
//       {todo.title}
//     </h1>
//     <h5>
//       {todo.description}
//     </h5>
//   </div>
// }

// export default App


import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);


  let count = 0;
  for (let i = 1; i <= inputValue; i++) {
    count = count + i;
  }

  return <div>
    <input onChange={function(e) {
      setInputValue(e.target.value);
    }} placeholder={"Find sum from 1 to n"}></input>
    <br />
    Sum from 1 to {inputValue} is {count}
    <br />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>
}

export default App;