
import './App.css'
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./components/AppRoutes/AppRoutes.jsx"
import Header from "./components/Header/Header.jsx"
import { CarritoProvider } from './context/CarritoContext.jsx' 

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