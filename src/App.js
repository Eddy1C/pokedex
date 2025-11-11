import './App.css';
import { useEffect, useState } from 'react';
import { InformacionPokemon } from './informacionPokemon';
import { PokeList } from '././pokemon';
 

function App() {
  const [pokemonActual, setPokemonActual] = useState(null);

  const handleClick = (pokemon) => {
    setPokemonActual(pokemon);
  };

    return (
      <>
      {!pokemonActual ? (
        <PokeList onPokemonSelect={handleClick} />
) : (
  <InformacionPokemon
    pokemon={pokemonActual}
    volver={() => setPokemonActual(null)}
  />
)}

  </>
    ); 
}

export default App;