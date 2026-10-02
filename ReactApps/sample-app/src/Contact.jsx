import './Test.css';
function Contact()
{
    let cityinfo = ['Hyderabad','Mumbai','Amaravathi'];

    return(
        <>
            <h2 className='backcolor'>This is Contact Page</h2>
            <table width="100%">
                <tr>
                    <td>
                        <ul type="circle">
                            {
                                cityinfo.map((ct)=>(
                                    <li style={{textAlign:"left"}}>{ct}</li>
                                ))
                            }
                        </ul>
                    </td>
                    <td>
                        <table border={1} width="100%">
                            {
                                cityinfo.map((ct)=>(
                                     <tr><td style={{textAlign:"left"}}>{ct}</td></tr>
                                ))
                            }
                        </table>
                    </td>
                </tr>
            </table>
        </>
    );
}

export default Contact;