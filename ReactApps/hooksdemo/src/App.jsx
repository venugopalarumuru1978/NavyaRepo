import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Welcome from './Welcome'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div style={{textAlign:"center"}}>
          <h1>App Component</h1>
        </div>

        <BrowserRouter>
          <Routes>
            <Route path="/"  element={<Login />}/>
            <Route path="/login"  element={<Login />}/>
            <Route path="/welcome"  element={<Welcome />}/>
            <Route path="/cat"  element={<Contact />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
