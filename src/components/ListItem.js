import React from 'react'

const ListItem = ({name, getPokemonData, url}) => {
  
  const handleClick = function() {
    getPokemonData(url)
  }

  return (
    <div>
      <li>
        <a onClick={handleClick}> 
          {name}
        </a>
      </li>
    </div>
  );
}

export default ListItem
