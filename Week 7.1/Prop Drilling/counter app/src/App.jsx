import { useContext, useState } from "react"
import { Countcontext } from "./context";

function App() {
  
  const [count , setCount] = useState(0);

  //Anyone who wants the teleported value needs to use the provider

  return (
    <div>
      <Countcontext.Provider value = {count}>
        <Count setCount={setCount}/>
      </Countcontext.Provider>
    </div>
  )
}

// Without using the context API => 

// function Count({count , setCount}){
  // Here we need to pass the setCount so that the Buttons function can use it sp this is called the prop drilling . It's just the uneasiness in the code visually
  
//   return (
//     <div>
//       {count}
//       <Buttons count={count} setCount={setCount} />
//     </div>
//   )
// }

// using the context API => 

function Count({setCount}){

  return (
    <div>
      <CountRenderer/>
      <Buttons setCount={setCount} />
    </div>
  )
}

function CountRenderer(){
  const count = useContext(Countcontext)
  return (
    <div>
      {count}
    </div>
  )
}

function Buttons({setCount}){
  const count = useContext(Countcontext)
  return (
    <div>
      <button onClick={() => {
        setCount(count+1)
      }}>
        Increase
      </button>
      
      <button onClick={() => {
        setCount(count-1)
      }}>
        Decrease
      </button>
    </div>
  )
}

export default App
