import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login()
{
    const [uname, setUname] = useState();
    const [pass, setPass] = useState();
    const [msg, setMsg] = useState();
    const navigate = useNavigate();

    const userCheck = (e) =>{
        e.preventDefault();
        
        if(uname==="navya"  &&  pass==="n@123")
        {
            navigate('/welcome');
        }
        else
        {
            setMsg('Please check username/password');
        }
    }

    return(
        <>
        <div style={{textAlign:"center"}}>
            <input type="button"  value="Back" onClick={()=>{navigate(-1)}} />
            <input type="button"  value="Forward" onClick={()=>{navigate(1)}} />
        </div>
        <div style={{textAlign:"center"}}>
          <h1>Login  Page</h1>
          <hr />
          <form name="frmLogin" method="post" onSubmit={userCheck}>
          <input type="text"  name="txtUname"  placeholder="Username"
          onChange={(e)=>{setUname(e.target.value)}} />
          <br />
          <input type="password"  name="txtPass"  placeholder="Password" 
          onChange={(e)=>{setPass(e.target.value)}}/>
          <br />
          <input type="submit"  value="Login" />
          </form>
          <h2 style={{color:"red"}}>{msg}</h2>
        </div>
        </>
    );
}