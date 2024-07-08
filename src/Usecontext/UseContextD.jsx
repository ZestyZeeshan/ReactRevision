import './usecontext.css'
//consumer context
import React,{useContext} from 'react';
import { UserContext } from './UseContextA';
const UseContextD=()=>{
    const user = useContext(UserContext)
    return(
        <div className="Border">
            <h1>UseContextD</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    )
}
export default UseContextD;