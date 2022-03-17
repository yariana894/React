import {useState} from "react";


function BuscarPuntuacionMinima() {
    const [puntuacionFiltro, setPuntuacionFiltro] = useState(0);
    const [puntuaciones, setPuntuaciones] = useState([]);

    const handleSubmit = e => {
        e.preventDefault()

        async function llamadaApi() {
            const request = await fetch('http://localhost:5300/puntuacion/?mayor=' + puntuacionFiltro)
            const data = await request.json()
            console.log(data)
            setPuntuaciones(data.datos)
        }

        llamadaApi()
    }
    const handleChange = e => {
        setPuntuacionFiltro(e.target.value);
    }
    return <>
        <div>Formulario de filtrado</div>
        <form onSubmit={handleSubmit}>
            <label>Puntuaciones mayor que</label>
            <input type="number" name="puntuacionFiltro" onChange={handleChange}/>
            <br/>
            <input type="submit" value="Filtrar"/>
        </form>
        {puntuaciones.map(p => <div key={p._id}>{p.puntuacion}</div>)}
    </>;
}

export default BuscarPuntuacionMinima;