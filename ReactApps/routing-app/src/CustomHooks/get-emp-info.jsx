import React, { useState } from "react";
import axios from "axios";

export default function useEmpinfo()
{
    const [einfo, setEinfo] = useState([]);
    const getinfo = () =>{
        axios.get("http://localhost:3000/Employee")
        .then((res)=>{
            console.log(res.data);
            setEinfo(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    return [einfo, getinfo];
}