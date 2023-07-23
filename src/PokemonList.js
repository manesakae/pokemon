import Pokemon from "./Pokemon";

export default function PokemonList({pokemons}) {
    return (
        <div className="pokemon-list">
            {pokemons && pokemons.map(pokemon => {
                return <Pokemon key={pokemon.url} pokemon={pokemon}/>
            })}
        </div>
    );
}