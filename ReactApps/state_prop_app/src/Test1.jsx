import { useState } from "react";

function Test1()
{
    const [sname, setSname] = useState(''); // string variable
    const [loc, setLoc] = useState('');

    const  nameChange = (event)=>{
        setSname(event.target.value);
    }

return(
    <>
    <div style={{textAlign:"center"}}>
        <input type="text" name="txtName" onChange={nameChange} />
        <br />
        <h1>Given Name : {sname}</h1>
        <br />
        <input type="text" name="txtLoc" placeholder="Location" onChange={(e)=>{setLoc(e.target.value)}} />
        <h2>Given Location is : {loc}</h2>
    </div>
    </>
);
}

export default Test1