import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dash(){
    const navigate =useNavigate();
    
   useEffect(()=>{
    if(!!!localStorage.getItem("isapproved")){
        navigate("/Login")
    }
   },[navigate]
   )    
   
    return(
        <div>
        <h1>Welcome!!</h1>
        <h1>Gokula Krishna</h1>
        <h2>Welcome to New Project</h2>
        <h3>Welcome to git hub</h3>
        </div>
        

        
    )
}
