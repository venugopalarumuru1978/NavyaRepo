import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './Home'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Hello World</h1>
        <Home />
        <hr />
        <Contact />
    </>
  )
}

export default App