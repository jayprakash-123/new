import React from "react";
import { useState } from "react";

const Que:React.FC = () =>{
    var a:number = 1;
    const [question, setQuestion] = useState(`Question:${a}`);

    const handleChange = () =>{
      let y:number = ++a;
   
        setQuestion(`Question:${y}`)
    }
  

    return(
        <div className="flex">
            <div className="ml-5">
               <p>{question}
            
               </p>
            </div>

            <div className="ml-96 pl-96 ">
            <button className="bg-green-500 rounded h-10 w-16 " 
             onClick={handleChange}

            >
                next
            </button>
            </div>
        </div>
    );
}

export default Que;