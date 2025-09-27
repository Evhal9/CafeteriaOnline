
import './App.css'
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./components/AppRoutes.jsx"
import Header from "./components/Header.jsx"
import { CarritoProvider } from './context/CarritoContext' 

function App() {
  return (
    <CarritoProvider> 
      <BrowserRouter>
        <Header />
        <main>
          <AppRoutes />
        </main>
      </BrowserRouter>
    </CarritoProvider>
  )
}

export default App