import { useState } from 'react'
import './App.css'
import  Inicio  from './pages/Inicio.jsx'
import Header  from './components/Header/Header.jsx'
import { BrowserRouter } from "react-router-dom";
//import AppRoutes from "./components/AppRoutes/AppRoutes.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <Inicio></Inicio>
      {/*<AppRoutes></AppRoutes> */}
    </BrowserRouter>
    </>
  )
}

export default App
