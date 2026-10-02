function Home()
{
    // read only data
    let x = 100;
    let y = 12.45;
    let z = 'React Session';

    return(
        <>
            <h1>This is Home Component</h1>
            <p style={{backgroundColor:"red", color:"yellowgreen"}}>Created using React JS</p>

            <h2>X value is : {x}</h2>
            <h2>Y value is : {y}</h2>
            <h2>Addition value is : {x+y}</h2>
            <h2>Z value is : {z}</h2>
        </>
    );
}

export default Home;