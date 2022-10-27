import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';

// to demonstrate useParams
const Post = () => {
  const status = 200;

  const navigate = useNavigate();

  const onClick = () => {
    console.log('hello onClick');
    navigate('/about');
  };

  // example of going to a NotFound page ... which we dont have
  if (status === 400) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div>
      <h1>Post </h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>Hello show</h1>} />
      </Routes>
    </div>
  );
};

export default Post;
