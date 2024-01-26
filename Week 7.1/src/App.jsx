
import {lazy} from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Dashboard = lazy(() => import('./pages/dashboard'))
const Landing = lazy(() => import('./pages/landing'))
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Appbar/>
      <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return (
    <div>
        <button onClick={() => {
          navigate("/")
        }}> Landing Page </button>
        <button onClick={() => {
          navigate("/dashboard")
        }}> Dashboard </button>
        </div>
  )
}

export default App
