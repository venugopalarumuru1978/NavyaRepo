export default function PropEx3({uname, age, isAdmin, status="Active"})
{
return(
    <>
    <h1>User Name : {uname}</h1>
    <h2>Age : {age} years</h2>
    <h2>User Type : {isAdmin ? "Administrator" : "Standard User"}</h2>
    <h2>Status : {status}</h2>
    </>
);
}

