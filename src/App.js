import './App.css';
import { useState } from 'react';
import { ListaDeAgua, ListaDeBicho, ListaDeElectrico, ListaDeFuego, ListaDeHielo, ListaDeLucha, ListaDePlanta, 
  ListaDePsíquico, ListaDeTierra, ListaDeVeneno, ListaDeVolador, ListaDeRoca} from './pokemon';

function App() {
  return (
  <>
    <Menu />
    <Busqueda />
    <FiltrarPorGeneracion />
    <FiltroPorTipo />
  </>
  );

}


function FiltrarPorGeneracion() {
  const [filtroGeneracion, setFiltroGeneracion] = useState('Seleccionar generación');
  const generaciones = ['canto', 'johto', 'hoenn', 'sinnoh', 'teselia', 'kalos', 'alola', 'galar'];
  
  const handleChange = (event) => {
    setFiltroGeneracion(event.target.value);
  } 
  return (
    <div className='filtrar'>
      <select value={filtroGeneracion} onChange={handleChange}>
        <option value="Seleccionar generación">
          Seleccionar generación
        </option>
        {generaciones.map((generacion) => (
          <option key={generacion} value={generacion}>
            {generacion}
          </option>
        ))}
      </select>

      <p>Generación seleccionada: {filtroGeneracion}</p>
    </div>
  );
}

function FiltroPorTipo() {
  const [filtroTipo, setFiltroTipo] = useState('Seleccionar tipo');
  const tipos = ['Fuego', 'Agua', 'Planta', 'Eléctrico', 'Hielo', 'Lucha', 'Veneno', 'Tierra', 'Volador', 'Psíquico', 'Bicho', 'Roca', 'Fantasma', 'Dragón', 'Siniestro', 'Acero', 'Hada'];

  const handleChange = (event) => {
    setFiltroTipo(event.target.value);
  }

  return (
    <div>
      <select value={filtroTipo} onChange={handleChange}>
        <option value="Seleccionar tipo">
          Seleccionar tipo
        </option>
        {tipos.map((tipo) => (
          <option key={tipo} value={tipo}>
            {tipo}
          </option>
        ))}
      </select>

      <p tipo ="">Tipo seleccionado: {filtroTipo === 'Fuego' && <ListaDeFuego/> || filtroTipo === 'Agua' && <ListaDeAgua/> || filtroTipo === 'Planta' && <ListaDePlanta/> || filtroTipo === 'Eléctrico' && <ListaDeElectrico/> 
      || filtroTipo === 'Hielo' && <ListaDeHielo/> || filtroTipo === 'Lucha' && <ListaDeLucha/> || filtroTipo === 'Veneno' && <ListaDeVeneno/> || filtroTipo === 'Tierra' && <ListaDeTierra/> ||
      filtroTipo == 'Volador' && <ListaDeVolador/> || filtroTipo === 'Psiquico' && <ListaDePsíquico/> || filtroTipo === 'Bicho' && <ListaDeBicho/> || filtroTipo === 'Roca' && <ListaDeRoca/>}</p>

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

export function Busqueda() {
 /* const [busqueda, setBusqueda] = useState('');
  const filtrados = pokemones.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h1>Buscador de Pokémon</h1>

      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <ListarTodos lista={filtrados} />
    </div>
  );*/
}

export default App;