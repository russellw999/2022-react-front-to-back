import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <div>
        <h1 className="text-6xl">Welcome</h1>
        {process.env.REACT_APP_GITHUB_TOKEN}
      </div>
    </Fragment>
  );
};

export default Home;
