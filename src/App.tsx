import logo from "./logo.svg";
// import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./component/Loading";
import TodoList from "./component/TodoList";

import axios from "axios";

function App() {
  const [todos, setTodos] = useState(null as any);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((result) => {
        setTodos(result.data);
      });
  }, []);



  function handleSubmit() {
    const data = {
      postId: 1,
      id: Math.floor(Math.random() * 800 + 201),
      name: name,
      email: email,
      body: body,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/comments", data)
      .then((res) => {
        setTodos([...todos, res.data]);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="justify-center">
      <div className="container">
        <h2>Comment PROJECT</h2> 
        Add Comment:
        <div>
       Name: <input
          value={name}
          className="bg-gray-100 mt-1 border-2"
          type="text"
          name="todo"
          onChange={(event) => {
            setName(event.target.value);
          }}
      
        />
        </div>
        <div>
       Email: <input
          value={email}
          type="text"
          className="bg-gray-100 mt-1 border-2"
          name="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
       
        />
        </div>
        <div>
       Body: <input
        className="bg-gray-100 mt-1 border-2"
          value={body}
          type="text"
          name="body"
     
          onChange={(event) => {
            setBody(event.target.value);
          }}
    
        />
        </div>
        <div>
        <button className="bg-red-400 rounded mt-2 mb-6 ml-32" onClick={handleSubmit}>
          Submit
        </button>
        </div>
      </div>
      <div className="container">
        {todos ? <TodoList todos={todos} /> : <Loading />}
      </div>
    </div>
  );
}

export default App;
