import { useState } from 'react'
import './App.css'
import  Inicio  from './pages/Inicio.jsx'
import { BrowserRouter } from "react-router-dom";
//import AppRoutes from "./components/AppRoutes.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Inicio></Inicio>
      {/*<AppRoutes></AppRoutes> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
