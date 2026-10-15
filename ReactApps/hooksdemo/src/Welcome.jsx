import { Link, useNavigate } from "react-router-dom";

export default function Welcome()
{
    const navigate  = useNavigate();
    
    return(
        <>
                <div style={{textAlign:"center"}}>
            <input type="button"  value="Back" onClick={()=>{navigate(-1)}} />
            <input type="button"  value="Forward" onClick={()=>{navigate(1)}} />
        </div>

        <div style={{textAlign:"center"}}>
          <h1>Welcome  Page &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="/login">Logout</Link>
          </h1>
          <hr />
        </div>
        </>
    );
}