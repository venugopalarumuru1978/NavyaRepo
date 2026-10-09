import { useState } from 'react'
import './App.css'
import Test1 from './Test1'
import Test2 from './Test2'
import Test3 from './Test3'
import PropEx1 from './PropEx1'
import PropEx2 from './PropEx2'
import PropEx3 from './PropEx3'
import PropEx4 from './PropEx4'
import PropEx5 from './PropEx5'

function App() {
  let name = "Kiran Kumar";
  const [count, setCount] = useState(0)

  const cntIncr = ()=>{
    setCount(count+1)    
  }

  const btnClick = ()=>{
    alert("This is Button Click from App Component");
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
      <tr>
        <td colSpan={2}>
          <h2 style={{textAlign:"center"}}>props Examples</h2>
        </td>
      </tr>
      <tr>
        <td>
          <PropEx1 pname={name}  age={30} />
        </td>
        <td>
          <PropEx2 author="Venugopal"  bname="Python" />
        </td>
      </tr>
      <tr>
        <td>
          <PropEx3 uname="Priya Bhavani" age={30} isAdmin={false} />
        </td>
        <td>
          <PropEx4 btnClick = {btnClick} />
        </td>
      </tr>
      <tr>
        <td colSpan={2}>
          <PropEx5>
            <div style={{textAlign:"center",backgroundColor:"yellowgreen"}}>
              <h2>Hello Props, This is Children Prop</h2>
              <p>This is Demo Example</p>
            </div>
          </PropEx5>
        </td>
      </tr>
    </table>      
    </>
  )
}

export default App