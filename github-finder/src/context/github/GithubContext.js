import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  //const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get initial users (testing purposes )
  // Get search results
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    console.log(params);
    // const response = await fetch(`${GITHUB_URL}/search/user?${params}`, {
    //   headers: {
    //     Authorization: `token ${GITHUB_TOKEN}`,
    //   },
    // });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`);

    // destructure to get the items array in the data
    const { items } = await response.json();
    console.log(items);
    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  // Get user
  // Get a single User
  const getUser = async (login) => {
    setLoading();

    console.log(`getUser : ${login}`);

    const response = await fetch(`${GITHUB_URL}/user?${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    // Dont send Authorization token
    // const response = await fetch(`${GITHUB_URL}/user?${login}`);

    if (response.status === 404) {
      window.location = '/notfound';
    } else {
      const data = await response.json();
      console.log(data);
      dispatch({
        type: 'GET_USER',
        payload: data,
      });
    }
  };

  // const response = await fetch(`${GITHUB_URL}/search/user?${login}/repos`, {
  //   headers: {
  //     Authorization: `token ${GITHUB_TOKEN}`,
  //   },
  // });

  // Get user Repos -- Remove Authorization token restriction
  const getUserRepos = async (login) => {
    console.log(`getUserRepos login : ${login}`);
    setLoading();

    const response = await fetch(`${GITHUB_URL}/search/users/${login}/repos`);

    const { data } = await response.json();

    dispatch({
      type: 'GET_REPOS',
      payload: data,
    });
  };

  // Clear users from state
  const clearUsers = () =>
    dispatch({
      type: 'CLEAR_USERS',
    });

  // Set loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUserRepos,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
