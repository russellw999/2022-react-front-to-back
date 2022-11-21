import React from 'react';
import useFetch from '../hooks/useFetch';

const CustomHookExample1 = () => {
  //const { data, loading } = useFetch(
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  );

  if (loading) {
    <h3>Loading....</h3>;
  }

  //console.log(data.title);
  //return <div>useFetch</div>;
  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
};

export default CustomHookExample1;
