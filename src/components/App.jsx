import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import TodoList from "./TodoList";

function App() {
  const [task, setTask] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const handleAddTask = (newTask) => {
    if (!todo.title) return;
    if (!todo.description) return;

    setTask((task) => [...task, newTask]);
  };

  const handleTodo = (e) => {
    const { name, value } = e.target;

    setTodo((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleCompleted = (id) => {
    setTask(
      task.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTask(task.filter((items) => items.id !== id));
  };

  return (
    <div className="bg-[#1a1a1a] h-screen ">
      <Logo />
      <div className=" max-w-[1000px] m-auto">
        <Form
          todo={todo}
          setTodo={setTodo}
          onTodo={handleTodo}
          onAddTask={handleAddTask}
        />
        <TodoList
          onDelete={handleDelete}
          onCompleted={handleCompleted}
          task={task}
        />
      </div>
    </div>
  );
}

export default App;
