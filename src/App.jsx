import { useState } from 'react'
import './App.css'
import Header from './components//Header.jsx'
import { BrowserRouter } from "react-router-dom";
//import AppRoutes from "./components/AppRoutes.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Header></Header>
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
