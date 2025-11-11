import './informacionPokemon.css'

export function InformacionPokemon({ pokemon, volver }) {
  return (
    <div className='informacion-pokemon'>
      <button onClick={volver}>Volver</button>
      <div className="contenido-pokemon">
        <div className="lado-izquierdo">
          <div className="circulo-animado"></div>
          <div className="pokemon-container"></div>
       <div className="circulo-animado"> </div>
       <div className="pokemon-container">
      <img src={pokemon.image} alt={pokemon.name} style={{ width: "350px" }} />
      </div>
      </div>
       <div className="lado-derecho">
        <h2>{pokemon.name}</h2>
      <p><strong>ID:</strong> #{pokemon.id}</p>
      <p><strong>Tipos:</strong> {pokemon.types.join(", ")}</p>
      <p><strong>Habilidades:</strong> {pokemon.abilities.join(", ")}</p>
      <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
      <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
      <p><strong>Experiencia base:</strong> {pokemon.base_experience}</p>
      <h3>Estadísticas:</h3>
      <ul>
        {pokemon.stats.map((s) => (
          <li key={s.name} style={{"--valor": `${(s.value / 200) * 100}%`}}>
            {s.name}: {s.value}
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
  );
}
        
