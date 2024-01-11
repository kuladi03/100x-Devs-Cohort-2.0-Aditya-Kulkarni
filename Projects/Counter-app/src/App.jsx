import { useState } from 'react'
import './App.css'

function App() {

  const [count,setcount] = useState(0)

  return (
    <div> 
      <CustomButton count = {count} setcount = {setcount}></CustomButton>
    </div>
  )
}

function CustomButton(props){
  function onclickhandler(){
    props.setcount(props.count + 1)
  }
  
  return <button onClick={onclickhandler}>
    Counter {props.count}
  </button>
}

export default App
