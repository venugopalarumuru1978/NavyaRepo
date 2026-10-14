
export default function Prod1({theme})
{
    return(
        <>
            <div style={{textAlign:"center"}}>
                <h1>Prod1 Component</h1>
                <input type="button"  value="Add to Cart"  style={{border:theme==="light"?"2px solid red":"none", backgroundColor:"yellow"}} />
            </div>
        </>
    );
}