import { useEffect, useState } from "react";

const UseEffect=()=>{
    const[count,setCount] = useState(0);

    const[color,setcolor]=useState("green")

    useEffect(()=>{
        document.title = `count: ${count} ${color}`;
    },[count, color])

    function handleClick(){
        setCount(c => c+1)
    }

    function changecolor(){
        setcolor(c => c==='green' ? 'red' : 'green');
    }
    return (
        <div>
            <h1>Counter App: {count}</h1>
            <button onClick={handleClick}>Clickkk meeee</button>

            <button onClick={changecolor}>Change Color</button>


        </div>
    )
}
export default UseEffect;