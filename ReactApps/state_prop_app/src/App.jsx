import { useState } from 'react'
import './App.css'
import Test1 from './Test1'
import Test2 from './Test2'
import Test3 from './Test3'

function App() {
  const [count, setCount] = useState(0)

  const cntIncr = ()=>{
    setCount(count+1)    
  }

  return (
    <>
<table width="100%" border={1}>
  <tr>
    <td style={{width:"50%"}}>
    <div style={{textAlign:"center"}}>
        <h1>useState Example</h1>
        <h1>Count Variable Value {count}</h1>
        <input type="button"  value="Increment" onClick={cntIncr} />
        &nbsp;&nbsp;&nbsp;
        <input type="button"  value="Decrement" onClick={()=>{setCount(count-1)}} />
      </div>
    </td>
    <td style={{width:"50%"}}>
    <Test1 />
    </td>
  </tr>
  <tr>
    <td>
      <Test2 />
    </td>
    <td>
      <Test3 />
    </td>
  </tr>
</table>
      
      
    </>
  )
}

export default App
