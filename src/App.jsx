import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import { v4 } from "uuid";  
import Title from "./components/Title";
import Background from "./components/Background";
import Block from "./components/Block";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
  //SE QUISER VOCÊ PODE USAR ESSA API PRA TESTES 
  // useEffect(() => {
  //   async function fetchTasks() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  //   const data = await response.json();
  //   console.log(data);
  //   setTasks(data);
  // }
  //   fetchTasks();
  // }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <Background>
      <Block>
        <Title>
          Gerenciador de Tarefas
        </Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks} 
          onTaskClick={onTaskClick} 
          onDeleteTask={onDeleteTask} 
        />
      </Block>
    </Background>
  );
}

export default App;