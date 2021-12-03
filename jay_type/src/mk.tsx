import React from 'react'

const Click: React.FC<{onClick:() => void}> = ({onClick}) => {
    const handleClick = () => {
        console.log("jay")
        onClick();
    };
    return (
        <div>
           <button 
           onClick={handleClick}

           className="bg-green-500"
           >  
           button click
           </button>
        </div>
    );
};

export default Click;
