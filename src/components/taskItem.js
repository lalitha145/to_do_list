import React from 'react';

const TaskItem = ({ task, toggleTask }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => toggleTask(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
    </div>
  );
};

export default TaskItem;
