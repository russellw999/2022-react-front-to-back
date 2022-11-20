import { useState } from 'react';
import Todo from './Todo';

const UseRefExample3 = () => {
  const [showTodo, setShowTodo] = useState(true);

  const handleButtonClick = () => {
    setShowTodo(!showTodo);
  };

  return (
    <div>
      {' '}
      <div>{showTodo && <Todo />}</div>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Toggle Todo
      </button>
    </div>
  );
};

export default UseRefExample3;
