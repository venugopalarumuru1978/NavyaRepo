import { useContext } from "react";
import { ThemeContext } from "./Home1";
export default function Prod1()
{
    const theme = useContext(ThemeContext);
    return(
        <>
            <div style={{textAlign:"center"}}>
              <h1>Prod2 Component</h1>
              <input type="button"  value="Add to Cart"  style={{border:theme==="light"?"2px solid red":"none", backgroundColor:"yellow"}} />
            </div>
        </>
    );
}
/*export default function Prod1()
{
    return(
        <>
            <div style={{textAlign:"center"}}>
                <h1>Prod2 Component</h1>
                <ThemeContext.Consumer>
                    {
                        (theme)=>{
                            return(
                            <input type="button"  value="Add to Cart"  style={{border:theme==="light"?"2px solid red":"none", backgroundColor:"yellow"}} />
                            );
                        }                        
                    }
                </ThemeContext.Consumer>
            </div>
        </>
    );
}*/