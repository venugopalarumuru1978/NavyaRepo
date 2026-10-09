//import './App.css'

import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from './Components/Home';
import About from "./Components/About";
import Contact from "./Components/Contact";
import PgNotFound from "./Components/PgNotFound";
import Info from "./Components/Info";
function App() {

  return (
    <>
            <div style={{textAlign:"center"}}>
                <h1>App Component</h1>
            </div>
<hr />

    <BrowserRouter>
      <div style={{textAlign:"center"}}>
          <Link to='/home'>Home</Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link to='/contact'>Contact</Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link to='/about'>About</Link>      
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link to='/info'>Info</Link>      
      </div>

    <Routes>
      <Route path="/"  element={ <Home /> }/>
      <Route path="/home"  element={ <Home /> }/>
      <Route path="/about"  element={ <About /> }/>
      <Route path="/info"   element={<Info ename='navya'  job='mentor' />} />
      <Route path="/contact"  element={ <Contact /> }/>
      <Route path="*"  element={ <PgNotFound /> }/>
    </Routes>
    </BrowserRouter>

    <hr />
    
    </>
  )
}

export default App
