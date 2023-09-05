import React from 'react'

const PokemonDetail = ({selectedPokemon}) => {
  
  if(!selectedPokemon){
    return "Pick your Pokemon"
  }
  
  return (
    <div className='poke-pic-box'>
      <img className="poke-pic" src={selectedPokemon.sprites.other["official-artwork"].front_default}
      />
    </div>
  );
}

export default PokemonDetail
