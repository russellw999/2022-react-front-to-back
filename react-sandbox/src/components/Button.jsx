import React from 'react';

const Button = React.memo(({ addTask, tasks }) => {
  console.log('Button rendered');
  return (
    <div>
      <button onClick={addTask} className="btn btn-primary">
        Add task
      </button>
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
});

export default Button;
