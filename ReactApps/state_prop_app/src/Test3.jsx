import { useState } from "react";

function Test3()
{
    const [gender, setGender] = useState('')

    return(
        <>
            <div style={{textAlign:"center"}}>
                <input type="radio"  name="rdoGender" value="Male" onChange={(e)=>setGender(e.target.value)} />
                <label>Male</label>
                &nbsp;&nbsp;&nbsp;
                <input type="radio"  name="rdoGender" value="Female" onChange={(e)=>setGender(e.target.value)} />
                <label>Female</label>
                <br />
                <h2>{gender}</h2>
            </div>
        </>
    );
}

export default Test3;