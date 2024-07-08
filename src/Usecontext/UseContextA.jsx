import { createContext, useState } from 'react';
import './usecontext.css'
import UseContextB from './UseContextB';

//it i sa provider components


export const UserContext = createContext();

const UseContextA=()=>{

    const [user,setUser] = useState("zesty")
    return(
        <div className="Border">
           <h1> UseContextA</h1> 
           <h2>{`heloo ${user}`}</h2>
           <UserContext.Provider value={user}>
           
           <UseContextB user={user}/>

           </UserContext.Provider>
          
        </div>
    )
}
export default UseContextA;