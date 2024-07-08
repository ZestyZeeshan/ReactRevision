import './usecontext.css'
import UseContextD from './UseContextD';
import { UserContext } from './UseContextA';
import React,{useContext} from 'react';


const UseContextC=()=>{

    const user = useContext(UserContext);
    return(
        <div className="Border">
            <h1>UseContextC</h1>
            <h2>{`hey again ${user}`}</h2>
            <UseContextD/>
        </div>
    )
}
export default UseContextC;