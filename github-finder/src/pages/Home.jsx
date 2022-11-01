import { Fragment } from 'react';
import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';

const Home = () => {
  return (
    <Fragment>
      <div>
        <UserSearch />
        <UserResults />
      </div>
    </Fragment>
  );
};

export default Home;
