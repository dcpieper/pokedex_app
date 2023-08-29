import React, { useState, useEffect } from 'react';
import PokemonsList from '../components/PokemonsList';
import PokemonDetail from '../components/PokemonDetail';

const PokemonsContainer = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    getPokemons()
  },[]) 

  const getPokemons = function()
  {
    fetch('https://pokeapi.co/api/v2/pokemon?&limit=151')
    .then(res => res.json())
    .then(pokemons => setPokemons(pokemons.results))
  }

  const getPokemonData = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(pokemonUrlData => setSelectedPokemon(pokemonUrlData))
  }

  return (
    <div className="container">
      <div className="left-content">
        <PokemonDetail selectedPokemon={selectedPokemon} />
      </div>
      <div className="right-content">
        <PokemonsList pokemons={pokemons} getPokemonData={getPokemonData} />
      </div>
    </div>
  );
}

export default PokemonsContainer
