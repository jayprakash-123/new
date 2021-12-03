import React from "react";

type tbuttonProps ={
    button:string;
}

 const Button: React.FC<tbuttonProps> = ({button}) => {
    return(
        <div className="text-red-800">{button} </div>
    );
};
export default Button;