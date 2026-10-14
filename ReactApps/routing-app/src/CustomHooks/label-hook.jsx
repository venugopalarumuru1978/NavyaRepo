
import React, { useState } from "react";

export default function useLabel(){
    const [label, setLabel] = useState('Hello');

    const updateLabel = (text)=>{
        console.log("Text is " + text);
        setLabel(text);
    }
    return [label, updateLabel];
}

