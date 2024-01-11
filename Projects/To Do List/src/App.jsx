import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      title : "Go to Gym ",
      Description : "Go to gym from 7-9"
    }, 
    {
      title : "Go to School",
      Description : "Go to school at 7 am"
    }
  ])
// 
// todo Application
//   todo
// {
//   todo[{
//     title:todo1,
//     description : todo ,
//     complete : yes or no 
//   }]
// }
  function addTodo(){
    setTodos([...todos,{
      title : "new todo",
      description : "desc of new todo"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add ToDo</button>{
        todos.map(function(todo){
          return <Todo title={todo.title} description = {todo.description} />
        })
      }
    </div>
  )
}



function Todo(props){
  return <div>
    <h1> {props.title} </h1>
    <h2> {props.description} </h2>
  </div>
}

export default App
