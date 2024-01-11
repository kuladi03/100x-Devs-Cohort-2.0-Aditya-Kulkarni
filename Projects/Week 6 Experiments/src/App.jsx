import { useState } from 'react'
import './App.css'



function App() {

  return (
    <div>
      <HeaderWithButton />
      <Headers title="Aditya2"/>
    </div>
  )
}

function HeaderWithButton(){
  const [title,settitle] = useState("My name is Aditya")
  function changetitle(){
    settitle("My name is " + Math.random())
  }
  return (
    <div>
    <button onClick={changetitle}>Update the Title</button>
      <Headers title={title}/>
    </div>
  )
}

function Headers({title}){
  return(
    <div>
      {title}
    </div>
  )
}

export default App
