import React, { useEffect, useState } from 'react';
import fetchReposList from '../services';
import Carrousel from '../components/Carrousel';

const Repositories = () => {
  const [repoList, setRepoList] = useState([]);

  useEffect(() => {
    // fazer o fetch do endpoint disponibilizado pelo github (Assincrono);
    // setar um estado para armazenar o resultado
    const getListRepos = async () => {
      const listRepos = await fetchReposList('vitorgonzaga');
      console.log(listRepos);
      setRepoList(listRepos);
    };
    getListRepos();
  }, []);

  return (
    <div>
      <h1>Repositories</h1>
      <Carrousel arrRepoList={repoList} />
    </div>
  );
};

export default Repositories;
