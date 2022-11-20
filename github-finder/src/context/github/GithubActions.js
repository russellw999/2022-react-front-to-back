import axios from 'axios';
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  Headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// Get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  console.log(params);
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

// Get user and repos
export const getUserAndRepos = async (login) => {
  // to make 2 requests we can use promise.all and pass in an array of requests
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
