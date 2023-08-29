import React from 'react'

const PokemonDetail = ({selectedPokemon}) => {
  
  if(!selectedPokemon){
    return "Pick your Pokemon"
  }
  
  return (
    <div>
      <img src={selectedPokemon.sprites.other["official-artwork"].front_default}/>
    </div>
  )
}

export default PokemonDetail
