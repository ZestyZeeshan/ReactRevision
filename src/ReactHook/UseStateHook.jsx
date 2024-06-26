import { useState } from "react";

function UseStateHook(){


    const [name, setname] = useState("Hello");

    const [Age, setAge] = useState(0);

    const [isStudentt, setIsStudentt] =useState('false')

    const updatedName=()=>{
        setname("zesty")
    }

    const IncreasedAged=()=>{
        setAge(Age +1);
    }

    const StudentStatus=()=>{
        setIsStudentt(!isStudentt);
    }
    return(
        <>
        <p>Student : {name}</p>
        <button onClick={updatedName}>Set Name</button>

        <p>Age : {Age}</p>
        <button onClick={IncreasedAged}>Set Age</button>

        <p>Student Status : {isStudentt ? 'yes' : 'no'}</p>
        <button onClick={StudentStatus}>Student</button> 
        </>
    );
}
export default UseStateHook;