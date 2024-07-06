import { useState } from "react"

const UpdateObject=()=>{
    const[car,setCar]=useState({year:2024, name:"Ford ", model:"Buggy"});

    function handleYearChange(event){
        setCar(c=>({...c,year:event.target.value}) )
    }
    function handleNameChange(event){
        setCar(c=>({...c, name:event.target.value}) )
    }
    function handlemodelChange(event){
        setCar(c=>({...c,model:event.target.value}) )
    }
    return(
        <div>
            <p>Use of Update Object {car.year},{car.name},{car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/>
            <input type="text" value={car.name} onChange={handleNameChange}/>
            <input type="text" value={car.model} onChange={handlemodelChange}/>

        </div>
    )
}

export default UpdateObject;
