import { useState, useEffect } from "react";

function Pokemon({url}) {
    const [pokemon, setPokemon] = useState(null);
    useEffect(async () => {
        /*fetch(props.url)
            .then(response => response.json())
            .then(data => setPokemon(data))*/
        const request = await fetch(url)
        const data = await request.json()
        setPokemon(data)
    }, [])
    return <div>{pokemon ?
        <div>
            {pokemon.name}
            <img src={pokemon.sprites.front_default} />
        </div>
        :
        'Cargando pokemon...'
    }</div>
}

export default Pokemon;