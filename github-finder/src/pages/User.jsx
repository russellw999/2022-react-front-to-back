import { Fragment, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';
const User = () => {
  const { getUser, user } = useContext(GithubContext);

  const params = useParams();

  /*  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
  }, []);
 */
  useEffect(() => {
    getUser(params.login);
  }, [params.login]);

  console.log(`User.jsx useEffect  user: ${user}`);

  return (
    <Fragment>
      <div>{user.login}</div>
    </Fragment>
  );
};

export default User;
