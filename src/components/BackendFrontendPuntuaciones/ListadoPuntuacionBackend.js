import {useEffect, useState} from "react";


function ListadoPuntuacionBackend() {
    const [scores, setScores] = useState([]);
    useEffect(() => {
        async function callAPI() {
            const req = await fetch("http://localhost:5300/puntuacion/");
            const data = await req.json();
            setScores(data.datos)
        }
        callAPI()
    }, [])

    return <>
        <h3>Listado de puntuaciones</h3>
        <ul>
        {scores.map(score => <li key={score._id}>{score.puntuacion}</li>)}
    </ul>
    </>
}

export default ListadoPuntuacionBackend;