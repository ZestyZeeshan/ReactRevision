import { useState } from "react";


const UpdateArray=()=>{
    const [foods,SetFood]=useState(["Apple",'banana',"mango"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;

        document.getElementById("foodInput").value="";

        SetFood([...foods,newFood])
    }
    return (
        <div>
            <h1>List of Foods:</h1>
            <ul>
                {foods.map((food,index) => <li key={index}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="enter food name" />
            <button onClick={handleAddFood}>Add Food</button>

        </div>
    )
}

export default UpdateArray;