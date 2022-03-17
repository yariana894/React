import {useState} from "react";

function BorrarTodasPuntuaciones() {
    const [disable, setDisable] = useState(false)

    let handleSubmit = async e => {
        e.preventDefault();

        let tok = JSON.parse(localStorage.getItem("token"));
        console.log(tok.token)

        const rawResponse = await fetch(`http://localhost:5300/puntuacion/all`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'auth-token': tok.token
            },
        });
        const content = await rawResponse.json();
        console.log(content)
        if (content.datos.deletedCount === 0) {
            setDisable(true)
        }
        console.log(content.datos.deletedCount);
    }

    return <>
        <h3>Formulario borrar todas las puntuaciones</h3>
        <form onSubmit={handleSubmit}>
            <button type="submit" disabled={disable} onClick={handleSubmit}>Borrar</button>
        </form>
    </>;

}

export default BorrarTodasPuntuaciones;