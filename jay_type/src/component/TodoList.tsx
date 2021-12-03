import "bootstrap/dist/css/bootstrap.min.css";

const TodoList = ({ todos }: any) => {
  return (
    <div className=" grid grid-cols-3 gap-4 rounded">
      {todos.map((todo : any , index : any) => (
        <div key={index}> Id : {todo.id}

        <div className="bg-red-100 "> Name :   {todo.name}</div>
        <div className="bg-red-100 "> Email :  {todo.email}</div>
        <div className="bg-red-100  "> Body :   {todo.body}</div>
   </div>

))}
</div>
);
};

export default TodoList;
