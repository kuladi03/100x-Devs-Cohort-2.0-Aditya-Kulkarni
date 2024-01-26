import { BrowserRouter , Routes , useNavigate} from "react-router-dom";
import React , {Suspense} from "react";
import { Route } from "react-router-dom";
const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import("./components/Landing"))


function App() { 
  // wrap anyone that wants to use the teleported value inside a provider
  // recoil, redux, Themes in mUI
  return (
    <div>
      //Here the dashboard and Landing are asynchronous so we need to use the suspense to work it out
      <BrowserRouter>
      <Appbar/>
        <Routes>
        <Route path="/dashboard" element={<Suspense fallback="loading.."><Dashboard /></Suspense>} />
        <Route path="/" element={<Suspense><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar(){
  // we need to use the useNavigate() inside the BrowserROuter only
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
