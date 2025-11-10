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
      <h1>Pokedex</h1>
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



/*
function FiltrarPorGeneracion({ generacion, setGeneracion }) {
  const generaciones = ['kanto', 'johto', 'hoenn', 'teselia', 'kalos', 'alola', 'galar'];

  return (
    <div>
      <h3>Filtrar por generación</h3>
      <select value={generacion} onChange={(e) => setGeneracion(e.target.value)}>
        <option value=''>Todas las generaciones</option>
        {generaciones.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
    </div>
  );
}*/

export default App;