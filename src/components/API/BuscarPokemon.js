import {useState} from "react";

function BuscarPokemon() {
    const [name, setName] = useState("");
    const [weight, setWeight] = useState(0);
    const [picture, setPicture] = useState();
    const [find, setFind] = useState(false);


    let handleSubmit = async e => {
        e.preventDefault()
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${name}`
            const request = await fetch(url)
            const data = await request.json()
            setWeight(data.weight)
            setPicture(data.sprites.front_default)
            setFind(true)
        } catch (e) {
            setFind(false)
        }
    }


    const handleChange = e => {
        const {name, value} = e.target;
        if (name === "name") setName(value);
    }

    return <>
        <h2>Search pokemons</h2>
        <form onSubmit={handleSubmit}>
            <label>Name
                <input name="name" value={name} onChange={handleChange}/>
            </label>
            <input type="submit" name="enviar" value="Buscar"/>
            <br/>
            {find && <span>Weight: {weight}</span>}
            <br/>
            {find && <img src={picture} alt="Picture of pokemon"/>}
            {!find && <span>No se encontro el pokemon</span>}
        </form>
    </>
}

export default BuscarPokemon