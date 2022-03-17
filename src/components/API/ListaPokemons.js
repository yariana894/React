import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

function ListaPokemons({cantidad}) {
    const [pokemons, setPokemons] = useState([]);
    useEffect(async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/?limit='+cantidad
        const request = await fetch(url)
        const data = await request.json()
        setPokemons(data.results)
    }, [])
    return <div>
       { pokemons.map( pokemon => <Pokemon key={pokemon.name} url={pokemon.url} />) }
    </div>;
}

export default ListaPokemons;