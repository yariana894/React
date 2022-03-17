import {useEffect, useState} from "react";

function NombresRandom() {
    const [names, setNames] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://randomuser.me/api/?format=json&results=10&nat=es'
            const request = await fetch(url)
            const data = await request.json()
            setNames(data.results)

            /* for (let i = 0; i < res.length; i++) {
                 const nombres = res[i]
                 setNames(nombres)
             }*/
        }
        fetchData();
    }, [])

    //console.log(names)

    return <>
        <h3>Generador de nombres de persona español aleatorio</h3>
        <div>
            {names.map((n, index) => <li key={index}>
                {n.name.first}, {n.name.last}
            </li>)}
        </div>
    </>
}

export default NombresRandom;