function About()
{
    let stdinfo = [
        {"rollno":101,"sname":"Jagan", "course":"Java"},
        {"rollno":102,"sname":"Kagan", "course":"Java"},
        {"rollno":103,"sname":"Lagan", "course":"Java"},
        {"rollno":104,"sname":"Bagan", "course":"Java"},
        {"rollno":105,"sname":"Magan", "course":"Java"}
    ];
    return(
        <>
        <h1>Students Information</h1>
        <table width="100%" border={1}>
            <tr>
                <th>Roll Number</th>
                <th>Student Name</th>
                <th>Course</th>
            </tr>
            {
                stdinfo.map((std)=>(
                        <tr style={{textAlign:"left"}}>
                            <td>{std.rollno}</td>
                            <td>{std.sname}</td>
                            <td>{std.course}</td>
                        </tr>
                ))
            }
        </table>
        </>
    );
}

export default About;