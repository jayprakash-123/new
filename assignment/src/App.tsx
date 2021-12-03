import logo from "./logo.svg";


import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState("");
  const [answer, setAns] = useState([] as any);
  const handleChange = () => {
    setCount(function (prevcount) {
      return prevcount + 1;
    });
    setData("");
    let currentAns = {
      id: count,
      data: data,
    };
    setAns([...answer, currentAns]);
  };

  return (
    <div>
      <div className="font-bold text-3xl pt-6 ml-6">
            <h1>Wizard</h1>   
        </div>
       
        
      {count <= 3 ? (
        <div className="ml-4">
          
          <div className="pt-10">
            <textarea
            className=" w-2/3 h-44  ml-32 border-2 shadow"
            placeholder="Some Question here"
              value={data}
              name="data"
              onChange={(event) => {
                setData(event.target.value);
              }}
              
            />
            <div className="ml-5 ">
            <p className="pt-4">Question no. {count}</p>
             </div>
            <div className="ml-96 ">
            <button
              className="bg-green-500 rounded h-10 w-16 ml-96 "
              onClick={handleChange}
            >
              next
            </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="ml-4 mt-4">
          {answer.map((ans:any) => {
            return <li key={ans.id}>{ans.data}</li>;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
