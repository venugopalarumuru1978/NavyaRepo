import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact()
{
    const navigate = useNavigate();
    const [info, setInfo] = useState(0);
    useEffect(()=>{

        const intervalId = setInterval(() => {
            setInfo(pvVal => pvVal+1);
          }, 1000);
      

    }, [])

    return(
        <>
                <div style={{textAlign:"center"}}>
            <input type="button"  value="Back" onClick={()=>{navigate(-1)}} />
            <input type="button"  value="Forward" onClick={()=>{navigate(1)}} />
        </div>

        <div style={{textAlign:"center"}}>
          <h1>Contact  Page</h1>
          <hr />
          <h2>{info}</h2>
        </div>
        </>
    );
}