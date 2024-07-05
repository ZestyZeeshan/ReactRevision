import React,{useState} from "react";

const ColorPickerApp=()=>{

    const [color,setcolor]=useState("#FFFFFF");

    function handlecolor(e){
      setcolor(e.target.value);
    }
    return (
        <div>
            <h1>Color Picker App</h1>
            <div className="Card" style={{backgroundColor:color}}>
              <p>  Selected : {color}</p>
            </div>
            <label>Select the color</label>
            <input type="color" value={color} onChange={handlecolor}/>

        </div>
    )
}
export default ColorPickerApp;