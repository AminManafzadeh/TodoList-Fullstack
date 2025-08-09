import { useEffect, useState } from "react";
import Tasks from "../module/Tasks";

function HomePage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch("api/todos");
    const data = await res.json();
    console.log(data);
    if (data.status === "success") setTodos(data.data.todos);
  };

  return (
    <div className="flex justify-between home-page">
      <div>
        <p className="bg-orangee">Todo</p>
        <Tasks data={todos.todo} fetchTodos={fetchTodos} next="inProgress" />
      </div>
      <div>
        <p className="bg-aquagreen">In Progress</p>
        <Tasks
          data={todos.inProgress}
          fetchTodos={fetchTodos}
          next="review"
          back="todo"
        />
      </div>
      <div>
        <p className="bg-azureblue">Review</p>
        <Tasks
          data={todos.review}
          fetchTodos={fetchTodos}
          next="done"
          back="inProgress"
        />
      </div>
      <div>
        <p className="bg-brightcyan">Done</p>
        <Tasks data={todos.done} fetchTodos={fetchTodos} back="review" />
      </div>
    </div>
  );
}

export default HomePage;
