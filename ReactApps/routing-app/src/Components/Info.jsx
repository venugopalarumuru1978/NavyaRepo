export default function Info({ename, job})
{
    return(
        <>
            <div style={{textAlign:"center"}}>
                <h1>Info Component</h1>
                <h2>Emp Name : {ename}</h2>
                <h2>Emp Job : {job}</h2>
            </div>
        </>
    );
}