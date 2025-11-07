import './App.css';
import { useEffect, useState } from 'react';
import { InformacionPokemon } from './informacionPokemon';
import { PokeList } from '././pokemon';


 

function App() {

  const [busqueda, setBusqueda] = useState("");
  //const [tipo, setTipo] = useState(""); 
  //const [generacion, setGeneracion] = useState(""); 
  const [pokemonActual, setPokemonActual] = useState(null);
  const [pokemones, setPokemones] = useState([]); 

  const pokemonesFiltrados = pokemones.filter(pokemon => {
    const coincideNombre = pokemon.name.toLowerCase().includes(busqueda.toLowerCase()); 
    /*const coincideNumero = pokemon.numero.toString().includes(busqueda); 
    const coincideTipo = tipo ? pokemon.tipo.toLowerCase() === tipo.toLowerCase(): true; 
    const coincideGeneracion = generacion ? pokemon.generacion.toLowerCase() === generacion.toLowerCase() : true; 
    return (coincideNombre || coincideNumero) && coincideTipo && coincideGeneracion; */
    return coincideNombre; 
  });
    function BuscarPokemon() {
    return (
      <div>
        <h3>Buscar Pokémon</h3>
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
    );
  }

  const handleClick = (pokemon) => {
            setPokemonActual(pokemon); 
         }

    return (
      <>
      <h1>Pokedex</h1>
      {!pokemonActual ? (
  <>
    <BuscarPokemon busqueda={busqueda} setBusqueda={setBusqueda} />
    <PokeList />
  </>
) : (
  <InformacionPokemon
    pokemon={pokemonActual}
    volver={() => setPokemonActual(null)}
  />
)}

  </>
    ); 
}

function FiltrarPorTipo({ tipo, setTipo }) {
  const tipos = [
    'Fuego', 'Agua', 'Planta', 'Eléctrico', 'Hielo',
    'Lucha', 'Veneno', 'Tierra', 'Volador', 'Psíquico', 'Bicho', 'Roca'
  ];

  return (
    <div>
      <h3>Filtrar por tipo</h3>
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value=''>Todos los tipos</option>
        {tipos.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
    </div>
  );
}

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
}

export default App;