import useFetch from "./common/useFetch";

export default function Pokemon({pokemon}) {
    const [pokemonDetail] = useFetch(pokemon.url);
    // console.log('pokemonDetail', pokemonDetail);
    return (
        <div className="pokemon">
            <div className="pokemon-header">
                <div>
                    {pokemon.name.toUpperCase()}
                </div>
                <div>
                    ID: {pokemonDetail.id}
                </div>
            </div>
            <div className="image-container">
                <img src={pokemonDetail?.sprites?.front_default} alt="pokemon image"/>
            </div>
        </div>
    );
}