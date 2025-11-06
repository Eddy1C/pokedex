import './App.css';
import { useState } from 'react';
import { ListaDeAgua, ListaDeBicho, ListaDeElectrico, ListaDeFuego, ListaDeHielo, ListaDeLucha, ListaDePlanta, 
  ListaDePsíquico, ListaDeTierra, ListaDeVeneno, ListaDeVolador, ListaDeRoca,} from './pokemon';
import { todosLosPokemones } from '././pokemon';
function App() {
  return (
  <>
    <Menu />
    <BuscarPokemon />
    <FiltrarPorGeneracion/>
    <FiltroPorTipo />
  </>
  );

}

function FiltrarPorGeneracion() {
  const [filtroGeneracion, setFiltroGeneracion] = useState('Seleccionar generación');
  const generaciones = ['kanto', 'johto', 'hoenn', 'Tinnoh', 'Teselia', 'Kalos', 'Alola', 'Galar'];
  
  const handleChange = (event) => {
    setFiltroGeneracion(event.target.value);
  } 
  const pokemonesFiltrados =
    filtroGeneracion === ''
      ? []
      : todosLosPokemones.filter(p => p.generacion === filtroGeneracion);

      const handleClick = (pokemon) => {
          alert(`Has hecho clic en ${pokemon.nombre}`);
         }
 
    return (

    <div>
      <div className='filtrar'>
      <select value={filtroGeneracion} onChange={handleChange}>
        <option value="">Seleccionar generación</option>
        {generaciones.map((generacion) => (
          <option key={generacion} value={generacion}>
            {generacion}
          </option>
        ))}
      </select>
        
      <p> {filtroGeneracion}</p>
      </div>
      <ul>
        <div className='listaGeneracion' >
          {pokemonesFiltrados.map((pokemon) => (  

        <div className='styleList'
          key={pokemon.numero} 
          onClick={() => handleClick(pokemon)}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <h4>{pokemon.nombre}</h4>
            <img
            src={pokemon.imagenUrl}
            style={{ width: '20px' }}
            ></img>
            <p>N° {pokemon.numero}</p>
            <p>Tipo: {pokemon.tipo}</p>
            <p>Generación: {pokemon.generacion}</p>
            
        </div>
        ))
        }
        </div>
      </ul>
    </div>
  );
}

function FiltroPorTipo() {
  const [filtroTipo, setFiltroTipo] = useState('Seleccionar tipo');

  const tipos = [
    'Fuego', 'Agua', 'Planta', 'Eléctrico', 'Hielo', 'Lucha', 'Veneno',
    'Tierra', 'Volador', 'Psíquico', 'Bicho', 'Roca'
  ];

  const handleChange = (event) => setFiltroTipo(event.target.value);

  const pokemonesFiltrados =
    filtroTipo === 'Seleccionar tipo'
      ? []
      : todosLosPokemones.filter(p => p.tipo === filtroTipo);

      const handleClick = (pokemon) => {
          alert(`Has hecho clic en ${pokemon.nombre}`);
         }

  return (

    <div>
      <div className='filtrar'>
      
      <select value={filtroTipo} onChange={handleChange}>
        <option value="">Seleccionar Tipo</option>
        {tipos.map((tipo) => (
          <option key={tipo} value={tipo}>
            {tipo}
          </option>
        ))}
      </select>
        
      <p> {filtroTipo}</p>
      </div>
      <ul>
        <div className='listaGeneracion' >
          {pokemonesFiltrados.map((pokemon) => (  

        <div className='styleList'
          key={pokemon.numero} 
          onClick={() => handleClick(pokemon)}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <h4>{pokemon.nombre}</h4>
            <p>N° {pokemon.numero}</p>
            <p>Tipo: {pokemon.tipo}</p>
            <p>Generación: {pokemon.generacion}</p>
            
        </div>
        ))
        }
        </div>
      </ul>
    </div>
  );
}
  
function Menu() {
  const [mostrar, setMostrar] = useState(false);
  return (
    <div>
      <h1>Bienvenido</h1>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar Pokémon' : 'Listar Pokémones'}
      </button>

      {mostrar && <ListarTodos />}
    </div>
  );
}

function ListarTodos() {
  return (
    <div>
      <h2>Lista de todos los Pokémon</h2>
      <ListaDeFuego /> 
      <ListaDeAgua />
      <ListaDePlanta />
      <ListaDeElectrico />
      <ListaDeHielo />
      <ListaDeLucha />
      <ListaDeVeneno />
      <ListaDeTierra />
      <ListaDeVolador />
      <ListaDePsíquico />
      <ListaDeBicho />
      <ListaDeRoca />
    </div>
  );
} 

function BuscarPokemon() {
  const [busqueda, setBusqueda] = useState('');

  const buscarPorNombre = todosLosPokemones.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );
  
  const buscarPorNumero = busqueda ===''
  ? [] // si no hay búsqueda, no mostrar nada
  : todosLosPokemones.filter(p =>
      p.numero.toString().includes(busqueda)
  );

  const buscarPorTipo = busqueda === ''
  ? [] // si no hay búsqueda, no mostrar nada
  : todosLosPokemones.filter(p =>
      p.tipo.toLowerCase().includes(busqueda.toLowerCase())
    );

  const buscarPorGeneracion = busqueda === ''
  ? [] // si no hay búsqueda, no mostrar nada
  : todosLosPokemones.filter(p =>
      p.generacion.toLowerCase().includes(busqueda.toLowerCase())
  );


const handleClick = (pokemon) => {
          alert(`Has hecho clic en ${pokemon.nombre}`);
         }

  return (
    <div>
    <div className='filtrar'>
      <h2>Buscar Pokémon por nombre</h2>
      <input 
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      </div>
      <ul>
        <div className='listaGeneracion'>
        {buscarPorNombre.map((pokemon)=> (

        <div className='styleList'
          key={pokemon.numero}
          onClick={() => handleClick(pokemon)}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
          <h4>{pokemon.nombre}</h4>
            <p>N° {pokemon.numero}</p>
            <p>Tipo: {pokemon.tipo}</p>
            <p>Generación: {pokemon.generacion}</p>
          </div>
        ))
        }
        </div>
      </ul>

      <ul>
        <div className='listaGeneracion'>
        {buscarPorNumero.map((pokemon)=> (
          <div className='styleList'
          key={pokemon.numero}
          onClick={() => handleClick(pokemon)}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
          <h4>{pokemon.nombre}</h4>
            <p>N° {pokemon.numero}</p>
            <p>Tipo: {pokemon.tipo}</p>
            <p>Generación: {pokemon.generacion}</p>
          </div>
        ))}
        </div>
      </ul>

      <ul>
        <div className='listaGeneracion'>
        {buscarPorTipo.map((pokemon)=> (
          <div className='styleList'
          key={pokemon.numero}
          onClick={() => handleClick(pokemon)}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
          <h4>{pokemon.nombre}</h4>
            <p>N° {pokemon.numero}</p>
            <p>Tipo: {pokemon.tipo}</p>
            <p>Generación: {pokemon.generacion}</p>
          </div>
        ))}
        </div>
      </ul>
      
      <ul>
        <div className='listaGeneracion'>
        {buscarPorGeneracion.map((pokemon)=> (
          <div className='styleList'
          key={pokemon.numero} 
          onClick={() => handleClick(pokemon)}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
          <h4>{pokemon.nombre}</h4>
            <p>N° {pokemon.numero}</p>
            <p>Tipo: {pokemon.tipo}</p>
            <p>Generación: {pokemon.generacion}</p>
          </div>
        ))}
        </div>
      </ul>
    </div>
  );
}

export default App;

