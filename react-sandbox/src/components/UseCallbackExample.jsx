import React, { useState, useCallback } from 'react';
import Button from './Button';

const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    console.log(`addTask called`);
    setTasks((prevState) => [...prevState, 'Some Task']);
  }, [setTasks]);

  return (
    <div>
      <Button addTask={addTask} tasks={tasks} />
    </div>
  );
};

export default UseCallbackExample;
