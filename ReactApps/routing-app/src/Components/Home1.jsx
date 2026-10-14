import { createContext } from "react";
import Cat1 from "./Cat1";
import Navbar from "./Navbar";
export const ThemeContext = createContext();
export default function Home1()
{
    const theme = "dark"; 
    return(
        <>
            <div style={{textAlign:"center"}}>
                <h1>Home-1 Component</h1>
                <ThemeContext.Provider value={theme}>
                    <Cat1 />
                </ThemeContext.Provider>                
                <Navbar />
            </div>
        </>
    );
}