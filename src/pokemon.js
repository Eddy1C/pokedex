import { useEffect, useState } from "react";

export const todosLosPokemones = [
        {nombre: 'Charmander', numero: 4, tipo: 'Fuego', generacion: "kanto", imagenUrl: 'https://marriland.com/wp-content/plugins/marriland-core/images/pokemon/sprites/home/full/charmander.png', estadisticas: "20% Fuerza"},  
        {nombre: 'Vulpix', numero: 37, tipo: 'Fuego', generacion: "kanto"},
        {nombre: 'Growlithe', numero: 58, tipo: 'Fuego', generacion: "Alola"},
        {nombre: 'Ponyta', numero: 77, tipo: 'Fuego', generacion: "hoenn"},
        {nombre: 'Magmar', numero: 126, tipo: 'Fuego', generacion: "teselia"},
        {nombre: 'Squirtle', numero: 7, tipo: 'Agua', generacion: "kanto"},
        {nombre: 'Bulbasaur', numero: 1, tipo: 'Planta', generacion: "kanto"},
        {nombre: 'Pikachu', numero: 25, tipo: 'Eléctrico', generacion: "kanto"},
        {nombre: 'Jynx', numero: 124, tipo: 'Hielo', generacion: "johto"},
        {nombre: 'Machop', numero: 66, tipo: 'Lucha', generacion: "kanto"},
        {nombre: 'Ekans', numero: 23, tipo: 'Veneno', generacion: "kanto"},
        {nombre: 'Sandshrew', numero: 27, tipo: 'Tierra', generacion: "kanto"},
        {nombre: 'Pidgey', numero: 16, tipo: 'Volador', generacion: "kanto"},
        {nombre: 'Abra', numero: 63, tipo: 'Psíquico', generacion: "kanto"},
        {nombre: 'Caterpie', numero: 10, tipo: 'Bicho', generacion: "kanto"},
        {nombre: 'Geodude', numero: 74, tipo: 'Roca', generacion: "kanto"},
    ];


export function PokeList({ onDataLoaded }) {
  const [pokemones, setPokemones] = useState([]);
useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    .then(res => res.json())
    .then(async (data) => {
      const detalles = await Promise.all(
        data.results.map(async (p) => {
          const res = await fetch(p.url);
          const info = await res.json();
          return {
            name: info.name,
            image: info.sprites.front_default
          };
        })
      );
      console.log("Datos obtenidos de la API:", detalles);
      setPokemones(detalles);
    })
    .catch(err => console.error(err));
}, []);

 return (
    <div className="listaGeneracion">
      {pokemones.length === 0 ? (
        <p>Cargando Pokémon...</p>
      ) : (
        pokemones.map(pokemon => (
          <div key={pokemon.name} className="styleList">
            <h4>{pokemon.name}</h4>
            <img src={pokemon.image} alt={pokemon.name} style={{ width: "40px" }} />
          </div>
        ))
      )}
    </div>
  );
}