import React from 'react';
import ListItem from './ListItem';

const PokemonsList = ({pokemons, getPokemonData}) => {

  const pokemonItems = pokemons.map((pokemon, index)=> {
    return (<ListItem name={pokemon.name} url={pokemon.url} key={index} index={index} getPokemonData={getPokemonData}/>)
  })

  return (
    <div>
      {pokemonItems}
    </div>
  )
}

export default PokemonsList
