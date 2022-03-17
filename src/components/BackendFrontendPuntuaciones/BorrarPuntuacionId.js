import {useState} from "react";

function BorrarPuntuacionId() {
    const [id, setId] = useState(0)

    let handleSubmit = async e => {
        e.preventDefault()
        let tok = JSON.parse(localStorage.getItem("token"));
        console.log(tok.token)
        const rawResponse = await fetch(`http://localhost:5300/puntuacion/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'auth-token': tok.token
            },
            body: JSON.stringify({scores: id})
        });
        const content = await rawResponse.json();
        console.log(content);
    }
    const handleChange = e => {
        const {name, value} = e.target;
        if (name === "id") setId(value);
    }

    return <>
        <div>Formulario de filtrado</div>
        <form onSubmit={handleSubmit}>
            <label>Id que quiere eliminar</label>
            <input  name="id" onChange={handleChange}/>
            <br/>
            <input type="submit" value="Borrar"/>
        </form>
    </>;


}

export default BorrarPuntuacionId;