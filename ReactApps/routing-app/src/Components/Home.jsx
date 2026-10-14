import Cat from "./Cat";
import Navbar from "./Navbar";

export default function Home()
{
    const theme = "dark"; 
    return(
        <>
            <div style={{textAlign:"center"}}>
                <h1>Home Component</h1>
                <Cat theme={theme} />
                <Navbar />
            </div>
        </>
    );
}