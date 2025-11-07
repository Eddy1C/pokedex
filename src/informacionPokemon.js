export function InformacionPokemon({ pokemon, volver }) {
  return (
    <div>
      <button onClick={volver}>Volver</button>
      <h2>{pokemon.nombre}</h2>
      <img src={pokemon.imagenUrl} alt={pokemon.nombre} />
      <p>N° {pokemon.numero}</p>
      <p>Tipo: {pokemon.tipo}</p>
      <p>Generación: {pokemon.generacion}</p>
      <p>estadisticas: {pokemon.estadisticas}</p>
    </div>
  );
}
