// Calculate factorial of given number 
// fun with arg and with return value

function Factorial(n)
{
    let fact = 1;
    while(n>0)
    {
        fact = fact*n;
        n--;
    }
    return fact;
}

// function calling
let res = Factorial(5);
console.log("5 fact value is " + res);
res = Factorial(6);
console.log("6 fact value is " + res);
