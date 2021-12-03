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
  const startAgain = () =>{
    window.location.reload()
  };
  const handlePrev = () => {
    setCount(function (prevcount) {
      return prevcount - 1;
    });
  };

  return (
    <div>
      <div className="font-bold text-3xl pt-6 ml-6">
            <h1>Wizard</h1>   
        </div>
       
        
      {count <= 3 ? (
        <div>
        {count === 1 ? (
          <div>
            <div className="">
              
              <div className="mt-4">
              <textarea
                  value={data}
                  className=" w-2/3 h-44  ml-32 border-2 shadow"
                  placeholder="Some answer here"
                  onChange={(event) => {
                    setData(event.target.value);
                  }}
                
                />
                <div className="ml-5">
                <p>Enter Your name</p>
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
          </div>
        ) : (
          <div>
            {count === 2 ? (
              <div>
                <div className="">
                 
                <div className="mt-4">
                  <textarea
                      value={data}
                      className=" w-2/3 h-44  ml-32 border-2 shadow"
                      placeholder="Some answer here"
                     
                      onChange={(event) => {
                        setData(event.target.value);
                      }}
                     
                    />
                    <div className="m-4">
                    <p>Enter Your age</p>
                  </div>
                    <div className="ml-96 pl-96">
                    <button
                      className="bg-green-500 rounded h-10 w-16 m-4"
                      onClick={handlePrev}
                    >
                      Prev
                    </button>
                    <button
                      className="bg-green-500 rounded h-10 w-16 "
                      onClick={handleChange}
                    >
                      next
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="">
                 
                <div className="mt-4">
                  <textarea
                      value={data}
                      className=" w-2/3 h-44  ml-32 border-2 shadow"
                      placeholder="Some answer here"
                    
                      onChange={(event) => {
                        setData(event.target.value);
                      }}
                    
                    />
                     <div className="m-4">
                    <p>Enter Your Email</p>
                  </div>
                 <div className="ml-96 pl-96">
                    <button
                       className="bg-green-500 rounded h-10 w-16 m-4"
                      onClick={handlePrev}
                    >
                      Prev
                    </button>
                    <button
                      className="bg-green-500 rounded h-10 w-16 "
                      onClick={handleChange}
                    >
                      submit
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      ) : (
        <div className="ml-4 mt-4">

          {answer.map((ans:any) => {
            return <div key={ans.id}>
              {ans.data}
              <br />
            </div>
          
          })}
          
          <div className="pt-4">
          <button
                       className="bg-green-500 rounded h-10 w-16 m-4"
                      onClick={handlePrev}
                    >
                      Prev
                    </button>
          <button
          className="bg-green-500 rounded h-10 w-20 "
          onClick={startAgain}
          >
            start again</button>
            
          </div>
        </div>
      )}
  
    
         
    </div>
  );
}

export default App;