import React,{ useState , useEffect, useRef} from "react"; 

const UseRef=()=>{

    //const[time,setTime]=useState(null)
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("Component Rendered")
    })

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = 'yellow'
    }

    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <input ref={inputRef}/>
        </div>
    )
}
export default UseRef;