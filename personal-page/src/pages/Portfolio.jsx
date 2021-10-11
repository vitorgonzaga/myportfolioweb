import React, { useEffect } from 'react';
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';
import fetchRepoList from '../services';

const Portfolio = () => {
  // Optei por colocar o array no localStorage.
  // Poderia ter salvo num estado e compartilhado via props.
  const setMyRepoListIntoLocalStorage = (arrayOfRepositories) => {
    localStorage.arrMyRepositories = JSON.stringify(arrayOfRepositories);
  };

  useEffect(() => {
    const fetchMyRepositories = async () => {
      const arrListOfRepos = await fetchRepoList();
      setMyRepoListIntoLocalStorage(arrListOfRepos);
    };
    fetchMyRepositories();
  }, []);

  return (
    <div>
      <FrontEnd />
      <BackEnd />
    </div>
  );
};

export default Portfolio;
