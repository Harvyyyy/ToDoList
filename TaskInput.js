import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [inputText, setInputText] = useState('');

  const handleAdd = () => {
    if (inputText.trim()) {
      onAddTask(inputText);
      setInputText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default TaskInput;