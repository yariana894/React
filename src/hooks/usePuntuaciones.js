import {useEffect, useState} from "react";

export function usePuntuaciones() {
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        async function callAPI() {
            const req = await fetch("http://localhost:5300/puntuacion/");
            const data = await req.json();
            setScores(data.datos)
            setLoading(false)
        }

        callAPI()
    }, [])

    return {scores, loading}
}