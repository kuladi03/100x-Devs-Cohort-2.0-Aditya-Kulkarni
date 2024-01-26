import { useEffect } from "react"
import { useState } from "react"
// let GLOBAL_ID = 4;
function App() {
  const [todos, setTodos] = useState([])
//     id: 1,
//     title: "Go to gym",
//     description: "Need to hit the gym from 7-9PM"
//   }, {
//     id: 2,
//     title: "Go to Clas",
//     description: "Need to go to the class from 4-7 PM"
//   }, {
//     id: 3,
//     title: "Eat foor",
//     description: "Need to eat food from 2-4 PM"
//   }])

//   function addTodo() {
//     setTodos([...todos, {
//       id: GLOBAL_ID++,
//       title: "new todo",
//       description: "new todo desc"
//     }])
//   }

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch("https://sum-server.100xdevs.com/todos");
      const json = await res.json();
      setTodos(json.todos);
    } catch (error) {
      // Handle errors if necessary
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data initially
  fetchData();

  // Set up interval to fetch data every, for example, 5000 milliseconds (5 seconds)
  const intervalId = setInterval(fetchData, 5000);

  // Clean up the interval when the component unmounts or when the dependency array changes
  return () => clearInterval(intervalId);
}, []);


  return (
    <div>
      {todos.map((todo, index) => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}


//   return (
//     <div>
//       <CardWrapper>
//         Hi there
//       </CardWrapper>
//       <CardWrapper>
//         Hello there
//       </CardWrapper>
//     </div>
//   )
// }

// function CardWrapper({children}){
//   return (
//     <div style={{border : "2px background: #000;", padding: 20}}>
//       {children}
//     </div>
//   )
// }




export default App