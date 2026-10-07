import { useState } from "react";

function Test2()
{
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [res, setRes] = useState('');

    const Add = ()=>{
        let sum = parseInt(x) + parseInt(y);
        let info = 'Addition of two values is ' + sum;
        setRes(info);
    }
return(
    <>
    <div style={{textAlign:"center"}}>
        <h2>Addition of two values</h2>

        <hr />
        
        <input type="text"  name="txtV1" placeholder="Value-1" onChange={(e)=>{setX(e.target.value)}} />
        <br /><br />
        <input type="text"  name="txtV2" placeholder="Value-2" onChange={(e)=>{setY(e.target.value)}} />
        <br /><br />
        <input type="button"  value="Addition" onClick={Add} />
        <br />
        <h2> {res}</h2>
    </div>
    </>
);
}

export default Test2