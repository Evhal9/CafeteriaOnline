//import { useState } from 'react'
import './App.css'
import  Inicio  from './pages/Inicio.jsx'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes.jsx"
import  Header  from './components/Header.jsx'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <AppRoutes />
      </main>
    </BrowserRouter>
  )
}

export default App
