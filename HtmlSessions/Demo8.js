// loops
/*
    variable initial value
    while(condition)
    {
        looping task
        increment / decrement operations
    }
*/

// print ur name 10 times
let n=1;
while(n<=10)
{
    console.log(n + " JavaScript");
    n++;
}

// calculate factorial of given number 
// 5! = 5x4x3x2x1 = 120

let x = 6;
let fact = 1;
console.log(x);
while(x>0)
{
    fact = fact*x;
    x--;
}

console.log(" Fact Value " + fact);
