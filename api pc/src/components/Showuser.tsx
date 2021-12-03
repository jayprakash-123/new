import React from "react";
const Showuser = (albums : any) => {
    // console.log(userData.userData);
    return(
        
        <div className="flex pl-50">
           <div className="flex justify-center">
      <input type='text' placeholder="Add title"
         className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center" />
   </div>
        <div className="font-bold bg-white text-center  max-w-sm rounded overflow-hidden shadow-lg">
            <div>{albums?.albums?.id}</div>
        <div>{albums?.albums?.userId}</div>
     <div> {albums?.albums?.title}</div>
     </div>
     </div>
        
        
        
    )
}
export default Showuser;

