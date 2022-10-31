import { Fragment } from 'react';
import UserResults from '../components/users/UserResults';

const Home = () => {
  return (
    <Fragment>
      <div>
        {/* SEARCH COMPONENT */}
        <UserResults />
        {process.env.REACT_APP_GITHUB_TOKEN}
      </div>
    </Fragment>
  );
};

export default Home;
