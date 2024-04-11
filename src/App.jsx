import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      .then(response => response.json())
      .then(data => setPokemonData(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <h2>Imprimiendo 20 Pokémon...</h2>
      <dl>
        {pokemonData.map((pokemon, index) => (
          <div key={index}>
            <dt> <span> {pokemon.name} </span> </dt>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default App;
