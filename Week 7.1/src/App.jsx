import { useContext, useState } from "react"
import { CountContext } from "./context";
import { Navigate } from "react-router-dom";
import { BrowserRouter , Routes , useNavigate} from "react-router-dom";
import { Route } from "react-router-dom";
const Dashboard = React.lazy(() => import("../../Week 7.1/src/components/Dashboard"))
const Landing = React.lazy(() => import("../../Week 7.1/src/components/Landing"))


function App() { 
  // wrap anyone that wants to use the teleported value inside a provider
  // recoil, redux, Themes in mUI
  return (
    <div>
      <BrowserRouter>
      <Appbar/>
        <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button onClick = {() => {
          navigate("/")
        }}>
          Landing Page
        </button>
        <button onClick = {() => {
          navigate('/dashboard')
        }}>
          Dashobard Page
        </button>
      </div>
    </div>
  )
}

export default App
