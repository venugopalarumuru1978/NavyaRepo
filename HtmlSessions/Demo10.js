// for loop
/*
    for(initial val;condition;iteration)
    {
        body of the loop
    }
*/

// print ur name 10 times
for(let n=1;n<=10;n++)
{
    console.log(n + " JS");
}

let fa = 1;
for(let x=5;x>0;x--)
{
    fa = fa*x;
}
console.log("fact val " + fa);
// switch
/*
switch(variable)
{
    case <val-1>:
        set of stmts
        break
    .....
    default:
        set of stmts
}
*/

let ch = 2;
switch(ch)
{
    case 1:
        console.log("Wants to study in USA");
        break;
    case 2:
        console.log("Wants to study in UK");
        break;
    case 3:
        console.log("Wants to study in Canada");
        break;
    default:
        console.log("Invalid Choice");
}