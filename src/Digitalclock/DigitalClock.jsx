import { useEffect, useState } from "react";


const DigitalClock=()=>{
    const[time,setTime]=useState();

    useEffect(()=>{
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return()=>{
            clearInterval(interval);
        }
    },[]);

    function format(){
        let Hours = time.getHours();
        const minutes = time.getMinutes();
        const second = time.getSeconds();
        const meridian = Hours >12 ?"PM":"AM";

        Hours = Hours % 12 || 12;

        return `${Hours} :${minutes} :${second}: ${meridian}`
    }

    return (
    <div>
        <span>{format()}</span>

    </div>
    )
}

export default DigitalClock;
