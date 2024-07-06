import { useState } from "react";

const UpdateArrayObject=()=>{

    const[car,setCar]=useState([]);
    const[caryear,setCaryear]=useState(new Date().getFullYear());
    const[carMake,setCarmake] = useState("");
    const[carModel,setCarmodel] = useState("");

    function handleAddCar(){
        const newCar = {year:caryear,
                        make:carMake,
                        model:carModel
        };

        setCar(c => [...c,newCar]);
        setCaryear(new Date().getFullYear());
        setCarmake("");
        setCarmodel("");

    }
    // inplace of _ below we write elemt or parameter using _ means we can ignore that

    function handleRemoveCar(index){
        setCar( c => c.filter((_, i)=> i !==index));


    }

    function handleCaryear(event){
        setCaryear(event.target.value)
    }

    function handleCrModel(event){
        setCarmodel(event.target.value)
    }

    function handleMakeChange(event){
        setCarmake(event.target.value)

    }


    return (
        <div>
            <h1>List of Cars</h1>
            <ul>
                {car.map((car,index)=><li key={index} 
                //arrroe function ()=> with no paramenter for remkvingh
                onClick={() => handleRemoveCar(index)}>{car.year}{car.make}{car.model}</li>)}
            </ul>

            <input type="number" value={caryear} onChange={handleCaryear}/>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="enter car make"/>
            <input type="text" value={carModel} onChange={handleCrModel} placeholder="enter car model"/>
            <button onClick={handleAddCar}>Add Car</button>


        </div>
    )
}
 
export default UpdateArrayObject;