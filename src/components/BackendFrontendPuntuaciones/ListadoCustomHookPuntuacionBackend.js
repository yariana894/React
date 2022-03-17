import {usePuntuaciones} from "../../hooks/usePuntuaciones";

function ListadoCustomHookPuntuacionBackend() {
    const {scores, loading} = usePuntuaciones()

    return <>
        <h3>Listado de puntuaciones</h3>
        {
            loading ? <p>Cargando....</p> :
                <ul>
                    {scores.map(score => <li key={score._id}>{score.puntuacion}</li>)}
                </ul>
        }
    </>
}

export default ListadoCustomHookPuntuacionBackend;