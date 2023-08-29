import React from 'react'

const ListItem = ({name, getPokemonData, url}) => {
  
  const handleClick = function() {
    getPokemonData(url)
  }

  return (
    <div>
      <li className='pokemon-item'>
        <a className='pokemon-link' onClick={handleClick}> 
          {name}
        </a>
      </li>
    </div>
  );
}

export default ListItem
