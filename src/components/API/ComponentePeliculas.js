import {useState, useEffect} from "react";

function ComponentePeliculas({title}) {
    const [pelicula, setPelicula] = useState(null);
    useEffect(async () => {
        const url = 'https://www.omdbapi.com/?apikey=ff01f1bd&t=' + title
        const request = await fetch(url)
        const data = await request.json()
        console.log(data)
        setPelicula(data)
    }, [])

    return <div>{pelicula ?
        <div>
            {pelicula.Title}
            <img src={pelicula.Poster}/>
        </div>
        :
        'Cargando peliculas...'
    }</div>
}

export default ComponentePeliculas;