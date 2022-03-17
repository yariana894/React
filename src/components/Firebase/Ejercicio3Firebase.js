import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getAllFrutas } from "../../services/frutasDB";

function Ejercicio3Firebase() {
    const [frutas, setFrutas] = useState([]);

    useEffect(() => {
        const unsubcribe = onSnapshot(
            getAllFrutas,
            snapshot => {
                setFrutas(snapshot.docs.map(doc => doc.data()))
            }
        )
        return () => unsubcribe()

    }, [])

    return <div>
        {frutas.map(fruta => <div key={fruta.nombre}>{fruta.nombre}</div>)}
    </div>;
}

export default Ejercicio3Firebase;