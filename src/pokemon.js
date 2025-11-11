import { useEffect, useState } from "react";

export function PokeList({ onDataLoaded, onPokemonSelect }) {
  const [pokemones, setPokemones] = useState([]);
  const [busqueda, setBusqueda] = useState(""); 
  const [tipos, SetTipos] = useState(""); 

  const types= [
    'normal', 'fire', 'water', 'grass', 'electric', 'ice',
    'fighting', 'poison', 'ground', 'flying', 'psychic',
    'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
  ];


useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=200")
    .then(res => res.json())
    .then(async (data) => {
      const detalles = await Promise.all(
        data.results.map(async (p) => {
          const res = await fetch(p.url);
          const info = await res.json();
          return {
            id: info.id,
            name: info.name,
            image: info.sprites.front_default,
            height: info.height,
            weight: info.weight,
            base_experience: info.base_experience,
            types: info.types.map(t => t.type.name),
            abilities: info.abilities.map(a => a.ability.name),
            stats: info.stats.map(s => ({
            name: s.stat.name,
            value: s.base_stat
            }))
          };
        })
      );
      console.log("Datos obtenidos de la API:", detalles);
      setPokemones(detalles);
      if(onDataLoaded) onDataLoaded(detalles);
    })
    .catch(err => console.error(err));
}, []);
    const pokemonesFiltrados = pokemones.filter((p) => {
  const coincideNombre = p.name.toLowerCase().includes(busqueda.toLowerCase());
  const coincideId = p.id.toString().includes(busqueda); 
  const coincideTipo = tipos ? p.types.includes(tipos.toLowerCase()) : true;
  return (coincideNombre || coincideId) && coincideTipo;
});

    
 return (
  <div className="fondo"> 
  <>
  
  <div className='titulo'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"/>
  </div>    
      <div className='buscar'>
      <input
      type="text"
        placeholder="Buscar Pokémon"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)} 
      />
        <select value={tipos} onChange={(ty) => SetTipos(ty.target.value)} >
          <option value=''>Todos los Tipos</option>
          {types.map((ty) => (
          <option key={ty} value={ty}>{ty}</option>
           ))}
      </select>
      </div>
      <div className="listaGeneracion">
      {pokemones.length === 0 ? (
        <p>Cargando Pokémon...</p>
      ) : ( 
        pokemonesFiltrados.map(pokemon => (
          <div key={pokemon.name || pokemon.id} className="styleList"
            onClick={() => onPokemonSelect  && onPokemonSelect (pokemon)}
            >
            <h4>{pokemon.name}</h4>
            <div className="poke-imagen">
            <img src={pokemon.image} alt={pokemon.name}/>
            </div>
            <p>Tipos: {pokemon.types.join(", ")}</p>
            <p><strong>ID:</strong> #{pokemon.id}</p>
            <p><strong>Habilidades:</strong> {pokemon.abilities.join(", ")}</p>
          </div>
        ))
      )}
      </div>
          </>
    </div>
  ); 
}
     
