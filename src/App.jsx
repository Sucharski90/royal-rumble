import React, { useState, useEffect } from 'react';
import './App.css';

function PokemonSelector() {
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [pokemonImage, setPokemonImage] = useState('');

  // Define the fetchRandomPokemon function inside the component
  const fetchRandomPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=300');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const selectedPokemon = data.results[randomIndex];

      // Fetch additional details for the selected Pokemon, including the image
      const pokemonResponse = await fetch(selectedPokemon.url);
      const pokemonData = await pokemonResponse.json();

      // Set the state with the Pokemon's details
      setRandomPokemon({
        name: selectedPokemon.name,
        url: selectedPokemon.url,
      });
      setPokemonImage(pokemonData.sprites.front_default); // Using the default front image
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return (
    <div>
      <h1>Random Pokemon Selector</h1>
      <button onClick={fetchRandomPokemon}>Get Random Pokemon</button>
      {randomPokemon && (
        <div>
          <p>Random Pokemon: {randomPokemon.name}</p>
          {pokemonImage && <img src={pokemonImage} alt={randomPokemon.name} />}
        </div>
      )}
    </div>
  );
}

export default PokemonSelector;
