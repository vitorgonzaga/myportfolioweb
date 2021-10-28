import PropTypes from 'prop-types';
import React from 'react';

const Carrousel = ({ arrRepoList }) => {
  const CardCarrousel = ({
    nome,
    descricao,
    // privado,
    temDeploy,
    // tags_url,
  }) => {
    const renderLinkToDeploy = (strNome) => (
      <a href={`http://vitorgonzaga.github.io/${strNome}/`} target="_blank" rel="noopener noreferrer">
        Link To Deployment App
      </a>
    );

    return (
      <div key={nome}>
        {/* <img src={thumbnail} alt="imagem do card" /> */}
        <h3>{ nome }</h3>
        <p>{ descricao }</p>
        {/* <p>{`privado? ${privado}`}</p> */}
        <p>{`Has Page? ${temDeploy}`}</p>
        { (temDeploy ? renderLinkToDeploy(nome) : null)}
        {/* <div> */}
        {/* { tags_url && tags_url.map((item) => <div>{ item }</div>) } */}
        {/* </div> */}
      </div>
    );
  };

  CardCarrousel.propTypes = {
    description: PropTypes.string,
    tags_url: PropTypes.shape({
      map: PropTypes.func,
    }),
    thumbnail: PropTypes.string,
    title: PropTypes.string,
  }.isRequired;

  return (
    /* eslint-disable */
    <div>
      {arrRepoList && arrRepoList.map(({name, description, has_pages}) => CardCarrousel({
        nome: name,
        descricao: description,
        // privado: private,
        temDeploy: has_pages,
      }
      ))}
    </div>
  );
};

Carrousel.propTypes = {
  arrRepoList: PropTypes.array,
  }




export default Carrousel;
