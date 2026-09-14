let  x = [[10,20,30],[40,50,60]];
let  y = [[11,22,33],[44,55,66]];

console.log("First Matrix")
for(let i=0;i<2;i++)
    console.log(x[i])

console.log("Second Matrix")
for(let i=0;i<2;i++)
    console.log(y[i])

console.log("Addition Matrix")
for(let i=0;i<2;i++)
{
    let add=[];
    for(let j=0;j<3;j++)
    {
        let sum = x[i][j]+y[i][j];
        add.push(sum);
    }
    console.log(add);
}

console.log("Substraction Matrix")
for(let i=0;i<2;i++)
{
    let sub=[];
    for(let j=0;j<3;j++)
    {
        let ms = x[i][j]-y[i][j];
        sub.push(ms);
    }
    console.log(sub);
}