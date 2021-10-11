const fetchReposList = async (username) => {
  try {
    const url = `https://api.github.com/users/${username}/repos`;
    const request = await fetch(url);
    const results = request.json();
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchReposList;
