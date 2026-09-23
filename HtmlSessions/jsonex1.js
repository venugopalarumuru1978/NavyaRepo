// json single object
stdinfo = {"rollno":1001, "sname":"Pavan", "course":"Python", "fees":15000.00};
console.log(stdinfo);

console.log(stdinfo.rollno);
console.log(stdinfo.sname);
console.log(stdinfo.course);
console.log(stdinfo.fees);

// json array object
empinfo = [
    {"empno":1231, "ename":"Kiran", "job":"Manager", "salary":20000.00},
    {"empno":1232, "ename":"Karan", "job":"Developer", "salary":15000.00},
    {"empno":1233, "ename":"Kiranmayee", "job":"Manager", "salary":20000.00},
    {"empno":1234, "ename":"Komali", "job":"Developer", "salary":15000.00},
    {"empno":1235, "ename":"Komal", "job":"Tester", "salary":10000.00}
];

console.log(empinfo);
console.log("====================");
for(let i=0;i<empinfo.length;i++)
    console.log(empinfo[i])

console.log("=====================");
for(let i=0;i<empinfo.length;i++)
{
    console.log(empinfo[i].empno);
    console.log(empinfo[i].ename);
    console.log(empinfo[i].job);
    console.log(empinfo[i].salary);
    console.log("------------------");
}
