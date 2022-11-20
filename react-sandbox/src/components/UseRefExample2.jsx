import { useState, useEffect, useRef } from 'react';

const UseRefExample2 = () => {
  const [name, setName] = useState('');
  const renders = useRef(1);
  const prevName = useRef('');

  // whenver we update a piece of state in the component the component is re rendered

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  const onNameChangehandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name State: {prevName.current}</h2>
      <input
        type="text"
        value={name}
        onChange={onNameChangehandler}
        className="form-control mb-3"
      />
    </div>
  );
};

export default UseRefExample2;
