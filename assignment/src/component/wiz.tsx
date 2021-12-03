import React from "react";
import Que from "./question";
// import { useState } from "react";
 
const Wiz:React.FC = () =>{
    // const [name, setName] = useState("");
   
    return(
        <div>
        <div className="font-bold text-3xl pt-6 ml-6">
            <h1>Wizard</h1>   
        </div>
      
        <div className="pt-10">
            <textarea className=" w-2/3 h-44  ml-32 border-2 shadow"
      
            placeholder="Some Question here"
            />
        </div>
        <Que />
     
      
           
        </div>
       
    );
}

export default Wiz;