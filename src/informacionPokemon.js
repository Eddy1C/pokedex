import './informacionPokemon.css'

export function InformacionPokemon({ pokemon, volver }) {
  return (
    <div>
      <button onClick={volver}>Volver</button>
      <h2>{pokemon.name}</h2>
       <div className="circulo-animado"> </div>
       <div className="pokemon-container">
      <img src={pokemon.image} alt={pokemon.name} style={{ width: "350px" }} /> </div>  
      <p><strong>ID:</strong> #{pokemon.id}</p>
      <p><strong>Tipos:</strong> {pokemon.types.join(", ")}</p>
      <p><strong>Habilidades:</strong> {pokemon.abilities.join(", ")}</p>
      <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
      <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
      <p><strong>Experiencia base:</strong> {pokemon.base_experience}</p>
      <h3>Estadísticas:</h3>
      <ul>
        {pokemon.stats.map((s) => (
          <li key={s.name}>
            {s.name}: {s.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
