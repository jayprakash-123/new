import React from "react";
import { useState } from "react";
import  Button  from "./component/button" 
import Click from "./component/mk";

function App() {

const[name,setName]=useState("jokhanhhhhhh")
setTimeout(() => {
  setName("flyer")  
},5000);

const handleClickText = () => {
  setName("rocket");
};
 

  return (
    <div>
    <div className="text-red-500 py-10">
 {name}
    </div>
<Button button="mayank"/>
<Click onClick={handleClickText} />
    </div>
  );
}

export default App;
