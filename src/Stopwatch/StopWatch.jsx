import React,{useState,useEffect,useRef} from "react";
const StopWatch=()=>{


const[running,setrunning]=useState(false);
const[elapsedtime,setelapsedtime]=useState(0);
const intervalRef = useRef(null);
const strattimRef = useRef(0);

useEffect(()=>{
    if(running){
        intervalRef.current = setInterval(()=>{
            setelapsedtime(Date.now() - strattimRef.current);
        },10);
    }
    return()=>{
        clearInterval(intervalRef.current)
    }

},[running]);

function start(){
  setrunning(true);
  strattimRef.current = Date.now() - elapsedtime;
}

function stop(){
   setrunning(false);
}

function reset(){
    setelapsedtime(0);
    setrunning(false);

}

function formatTime(){
    let hours = Math.floor(elapsedtime /(1000*60*60))

    let minutes = Math.floor(elapsedtime /(1000*60)%60)

    let seconds = Math.floor(elapsedtime /(1000)%60);

    let milliseconds = Math.floor((elapsedtime %1000) /10)
  return `${hours}:${minutes}:${seconds}:${milliseconds}`
}

    return(
        <div className="stopwatcch">
            <div className="display">{formatTime()}</div>
            <buton onClick={start}>Start</buton>
            <buton onClick={stop}>Stop</buton>
            <buton onClick={reset}>Reset</buton>
        
        </div>
    )
}
export default StopWatch;