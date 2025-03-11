import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;