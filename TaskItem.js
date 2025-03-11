import React from 'react';

const TaskItem = ({ task, onToggleComplete }) => {
  return (
    <div style={{ 
      margin: '5px',
      padding: '5px',
      textDecoration: task.completed ? 'line-through' : 'none'
    }}>
      {task.text}
      <button
        onClick={() => onToggleComplete(task.id)}
        style={{ marginLeft: '10px' }}
      >
        {task.completed ? 'Undo' : 'Complete'}
      </button>
    </div>
  );
};

export default TaskItem;