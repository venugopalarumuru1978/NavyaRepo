// Function without arg and without return value
function  TestFun()
{
    console.log("This is User Defined Function");
}

// Function with arg and without return value
function TestFunArg(x,y)
{
    console.log("X value is : " + x);
    console.log("Y value is : " + y);
}

// Function with arg and with return value
function TestFunArgandRetn(x)
{
    let sqr = x**2;
    return sqr;
}

// Function without arg and with return value
function TestFunRetn()
{
    let x = 10;
    let cb = x**3;
    return cb;
}

// function callings 
TestFun();
console.log("Return to calling area");
TestFun();

TestFunArg(10,20);
TestFunArg('JS', 'Node js');

let res = TestFunArgandRetn(10);
console.log(res);

let cbval = TestFunRetn();
console.log(cbval);
