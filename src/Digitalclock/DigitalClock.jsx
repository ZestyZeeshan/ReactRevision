import { useEffect, useState } from "react";


const DigitalClock=()=>{
    const[time,setTime]=useState(new Date());

    useEffect(()=>{
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return()=>{
            clearInterval(interval);
        }
    },[]);

    function format(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const second = time.getSeconds();
        const meridian = hours > 12 ?"PM":"AM";

        hours = hours % 12 || 12;

        return `${hours} :${minutes} :${second}: ${meridian}`
    }

    return (
    <div>
        <span>{format()}</span>

    </div>
    )
}

export default DigitalClock;
