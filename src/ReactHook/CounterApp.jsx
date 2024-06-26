import { useState } from "react";

function CounterApp (){

    const[count, Setcount] = useState(0);

    // const [Decreased, SetDecreased] = useState();

    // const[Reset,SetReset] =useState();


    const Increament = () => {
        Setcount(count+1);
    }

    const Dicreament=()=>{
       Setcount(count-1);
    }

    const OriginalState=()=>{
        Setcount(0);
    }
  return(
    <>
    <p>Counter App : {count}</p>
    <button onClick={Increament}>Increament Button</button>
    <button onClick={Dicreament}>Decreament Button</button>
    <button onClick={OriginalState}>Reset</button>
    </>
  )
}
export default CounterApp;