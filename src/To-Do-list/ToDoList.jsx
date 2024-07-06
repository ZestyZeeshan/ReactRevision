import { useState } from "react";

const ToDoList=()=>{

    const[work,setWork] = useState(["eat","sleep"])
    const[newTask,setNewtask]=useState("")

    function handleInputChange(event){
        setNewtask(event.target.value);
    }

    function handleAddevent(){
        if(newTask.trim() !== ""){
            setWork(t => [...t,newTask]);
            setNewtask("")
    
        }
    
    }

    function handledelete(index){
        const updatedTask = work.filter((_,i)=> i !== index);
        setWork(updatedTask);
    }
    
    function handleUp(index) {
        if (index > 0) {
            const updatedTasks = [...work];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setWork(updatedTasks);
        }
    }

    function handleDown(index) {
        if (index < work.length - 1) {
            const updatedTasks = [...work];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setWork(updatedTasks);
        }
    }
    return(
        <div>
            <p>To-Do-List</p>
            <div>
                <input type="text"
                placeholder="Enter your task"
                value={newTask}
                onChange={handleInputChange}/>
                <button className="add-button" 
                onClick={handleAddevent}>Add</button>
            </div>

            <ul>
                {work.map((element,index)=><li key={index}>
                    <span className="text">{element}</span>
                    <button className="delete-button"
                    onClick={ () => handledelete(index)}>Delete</button>

                    <button className="up-button"
                    onClick={ () => handleUp(index)}>Up</button>

                    <button className="down-button"
                    onClick={ () => handleDown(index)}>Down</button>
                    </li>

                )}
            </ul>

        </div>
    )
}
export default ToDoList;