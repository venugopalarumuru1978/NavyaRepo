import Prod1 from "./Prod1";

export default function Cat({theme})
{
    return(
        <>
            <div style={{textAlign:"center"}}>
                <h1>Cat Component</h1>
                <Prod1 theme={theme} />
            </div>
        </>
    );
}