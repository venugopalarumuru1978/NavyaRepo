//import './App.css'

import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from './Components/Home';
import About from "./Components/About";
import Contact from "./Components/Contact";
import PgNotFound from "./Components/PgNotFound";
import Info from "./Components/Info";
import Home1 from "./Components/Home1";
import useLabel from "./CustomHooks/label-hook";
import { useEffect, useMemo, useState } from "react";

import { useSquare } from "./CustomHooks/sqr";
function App() {
  const [lblInfo, setLblinfo] = useLabel();

  const [input, setInput] = useState(5);
  const squared = useSquare(input);

  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(5);
  //const factorial = fact(5);
  const factorial = useMemo(()=>{fact(number)},[number]);

  useEffect(()=>{
    setLblinfo("Hello World");
  },[])
  
  return (
    <>
            <div style={{textAlign:"center"}}>
                <h1>App Component</h1>
                <h2>label info : {lblInfo}</h2>
            </div>
      <hr />
      <input type="button"  value="Counter Increment" onClick={()=>{setCounter(counter+1)}} />
      <input type="button"  value="Number Increment" onClick={()=>{setNumber(number+1)}} />
      <h2>Counter Value is : {counter}</h2>
      <h2>Fact Value is : {factorial}</h2>
<hr />
<div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Square Calculator Hook</h2>
      <label>
        Enter a number: 
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </label>
      <p style={{ marginTop: '15px', fontSize: '18px' }}>
        The square of <strong>{input || 0}</strong> is <strong>{squared}</strong>.
      </p>
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
      <Route path="/home1"  element={ <Home1 /> }/>
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

const fact = (n) =>
{
  
  let ft = 1;
  for(let i=1;i<=n;i++)
  {
    ft = ft*i;
  }
  console.log("Fact is CALLING" + n);
  return ft;
}
export default App
