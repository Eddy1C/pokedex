export function ListaDeFuego() {  
    const pokemonesDeFuego = [
        { nombre: 'Charmander', numero: 4 },
        { nombre: 'Vulpix', numero: 37 },
        { nombre: 'Growlithe', numero: 58 },
        { nombre: 'Ponyta', numero: 77 },
        { nombre: 'Magmar', numero: 126 },
    ];

    return (
        <div>
            <h2>Pokémon de tipo Fuego</h2>  
            <ul>
                {pokemonesDeFuego.map((pokemon) => (
                    <li key={pokemon.numero}>
                        {pokemon.numero} - {pokemon.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );
}


export function ListaDeAgua() {  
    const pokemonesDeAgua = [
        { nombre: 'Squirtle', numero: 7 },
        { nombre: 'Psyduck', numero: 54 },
        { nombre: 'Poliwag', numero: 60 },
        { nombre: 'Tentacool', numero: 72 },
        { nombre: 'Seel', numero: 86 },
    ]; 
    return (  
        <div>
            <h2>Pokémon de tipo Agua</h2>  
            <ul>
                {pokemonesDeAgua.map((pokemon) => (
                    <li key={pokemon.numero}>
                        {pokemon.numero} - {pokemon.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function ListaDePlanta() {  
    const pokemonesDePlanta = [
        { nombre: 'Bulbasaur', numero: 1 },
        { nombre: 'Oddish', numero: 43 },
        { nombre: 'Bellsprout', numero: 69 },
        { nombre: 'Exeggcute', numero: 102 },
        { nombre: 'Tangela', numero: 114 },
    ]; 
    return (
        <div>
            <h2>Pokémon de tipo Planta</h2>  
            <ul>
                {pokemonesDePlanta.map((pokemon) => (
                    <li key={pokemon.numero}>
                        {pokemon.numero} - {pokemon.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function ListaDeElectrico() {  
    const pokemonesDeElectrico = [
        { nombre: 'Pikachu', numero: 25 }, 
        { nombre: 'Magnemite', numero: 81 },
        { nombre: 'Voltorb', numero: 100 },
        { nombre: 'Electabuzz', numero: 125 },
        { nombre: 'Jolteon', numero: 135 },
    ];
    return (
        <div>
            <h2>Pokémon de tipo Eléctrico</h2>  
            <ul>
                {pokemonesDeElectrico.map((pokemon) => (
                    <li key={pokemon.numero}>
                        {pokemon.numero} - {pokemon.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function ListaDeHielo() {  
    const pokemonesDeHielo = [
        { nombre: 'Jynx', numero: 124 },
        { nombre: 'Sneasel', numero: 215 },
        { nombre: 'Swinub', numero: 220 },
        { nombre: 'Delibird', numero: 225 },
        { nombre: 'Smoochum', numero: 238 },
    ];  
    return (
        <div>
            <h2>Pokémon de tipo Hielo</h2>  
            <ul>
                {pokemonesDeHielo.map((pokemon) => (
                    <li key={pokemon.numero}>
                        {pokemon.numero} - {pokemon.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function ListaDeLucha() {  
    const pokemonesDeLucha = [
        { nombre: 'Machop', numero: 66 },
        { nombre: 'Mankey', numero: 56 },
        { nombre: 'Hitmonlee', numero: 106 },
        { nombre: 'Hitmonchan', numero: 107 },
        { nombre: 'Tyrogue', numero: 236 }, 
    ]; 
    return (
        <div>   
            <h2>Pokémon de tipo Lucha</h2>
            <ul>
                {pokemonesDeLucha.map((pokemon) => (
                    <li key={pokemon.numero}>   
                        {pokemon.numero} - {pokemon.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function ListaDeVeneno() {  
    const pokemonesDeVeneno = [
        { nombre: 'Ekans', numero: 23 },
        { nombre: 'Nidoran♀', numero: 29 },
        { nombre: 'Zubat', numero: 41 },
        { nombre: 'Grimer', numero: 88 },
        { nombre: 'Koffing', numero: 109 },
    ]; 
    return (
        <div>
            <h2>Pokémon de tipo Veneno</h2>  
            <ul>
                {pokemonesDeVeneno.map((pokemon) => (
                    <li key={pokemon.numero}>
                        {pokemon.numero} - {pokemon.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function ListaDeTierra() { 
    const pokemonesDeTierra = [
        { nombre: 'Sandshrew', numero: 27 },
        { nombre: 'Diglett', numero: 50 },
        { nombre: 'Geodude', numero: 74 },
        { nombre: 'Cubone', numero: 104 },
        { nombre: 'Phanpy', numero: 231 },
    ];
    return (
        <div>
            <h2>Pokémon de tipo Tierra</h2>
            <ul>
                {pokemonesDeTierra.map((pokemon) => (
                    <li key={pokemon.numero}>
                        {pokemon.numero} - {pokemon.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function ListaDeVolador() {  
    const pokemonesDeVolador = [
        { nombre: 'Pidgey', numero: 16 },   
        { nombre: 'Spearow', numero: 21 },
        { nombre: 'Zubat', numero: 41 },
        { nombre: 'Farfetch’d', numero: 83 },
        { nombre: 'Hoothoot', numero: 163 },
    ]; 
    return (
        <div>
            <h2>Pokémon de tipo Volador</h2>  
            <ul>    
                {pokemonesDeVolador.map((pokemon) => (
                    <li key={pokemon.numero}>
                        {pokemon.numero} - {pokemon.nombre}
                    </li>   
                ))}
            </ul>
        </div>
    );
}

export function ListaDePsíquico() {  
    const pokemonesDePsíquico = [
        { nombre: 'Abra', numero: 63 }, 
        { nombre: 'Drowzee', numero: 96 },
        { nombre: 'Exeggcute', numero: 102 },
        { nombre: 'Starmie', numero: 121 },
        { nombre: 'Mewtwo', numero: 150 },
    ]; 
    return (
        <div>
            <h2>Pokémon de tipo Psíquico</h2>
            <ul>
                {pokemonesDePsíquico.map((pokemon) => (
                    <li key={pokemon.numero}>       
                        {pokemon.numero} - {pokemon.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );
}   

export function ListaDeBicho() {  
    const pokemonesDeBicho = [
        { nombre: 'Caterpie', numero: 10 },
        { nombre: 'Weedle', numero: 13 },
        { nombre: 'Scyther', numero: 123 },
        { nombre: 'Pinsir', numero: 127 },
        { nombre: 'Heracross', numero: 214 },   
    ];  
    return (
        <div>
            <h2>Pokémon de tipo Bicho</h2>
            <ul>
                {pokemonesDeBicho.map((pokemon) => (
                    <li key={pokemon.numero}>
                        {pokemon.numero} - {pokemon.nombre}
                    </li>   
                ))}
            </ul>
        </div>
    );
}


export function ListaDeRoca() {  
    const pokemonesDeRoca = [
        { nombre: 'Geodude', numero: 74 },
        { nombre: 'Onix', numero: 95 },
        { nombre: 'Rhyhorn', numero: 111 },
        { nombre: 'Sudowoodo', numero: 185 },
        { nombre: 'Larvitar', numero: 246 },
    ]; 
    return (    
        <div>
            <h2>Pokémon de tipo Roca</h2>  
            <ul>    
                {pokemonesDeRoca.map((pokemon) => (
                    <li key={pokemon.numero}>
                        {pokemon.numero} - {pokemon.nombre} 
                    </li>
                ))} 
            </ul>
        </div>
    );
}


