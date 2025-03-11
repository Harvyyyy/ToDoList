import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleComplete={toggleComplete} />
    </div>
  );
}

export default App;