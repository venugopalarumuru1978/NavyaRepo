//  find the big number from 3 numbers
// use fun with arg and with return value

function  BigNumber(x, y, z)
{
    if(x>y && x>z)
        return x + " , " + y + " and " + z + " Big No " + x;
    else if(y>x && y>z)
        return x + " , " + y + " and " + z + " Big No " + y;
    else if(z>x && z>y)
        return x + " , " + y + " and " + z + " Big No " + z;
    else 
        return "All / any two values are same";
}

// fun callings
console.log(BigNumber(10, 4,5));
console.log(BigNumber(10, 40,5));
console.log(BigNumber(10, 40,50));
console.log(BigNumber(10,10,5));