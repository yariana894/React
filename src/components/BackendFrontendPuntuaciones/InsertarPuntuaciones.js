import {useState} from "react";
import LoginConBackend from "./LoginConBackend";

function InsertarPuntuaciones() {
    const [puntuacion, setPuntuacion] = useState(0);

    let handleSubmit = async (e) => {
        //para que el formulario no se refresque
        e.preventDefault();
        let tok = JSON.parse(localStorage.getItem("token"));
        console.log(tok.token)

        const rawResponse = await fetch('http://localhost:5300/puntuacion/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'auth-token': tok.token
            },
            body: JSON.stringify({puntuacion: puntuacion, date: new Date()})
        });
        const content = await rawResponse.json();
        console.log(content);
    }


    let handleChange = (e) => {
        const {name, value} = e.target;
        if (name === "puntuacion") setPuntuacion(value);
    }

    return <form onSubmit={handleSubmit}>
        <label>Puntuacion:
            <input name="puntuacion" value={puntuacion} onChange={handleChange}/>
        </label>
        <input type="submit" value="Enviar"/>
    </form>

}

export default InsertarPuntuaciones;