import {useEffect, useState} from "react";
import {db} from "../../services/firebase";
import {collection, getDocs} from "@firebase/firestore";

function ListaTecnologiasFirebase() {
    const [tecnologias, setTecnologias] = useState([]);

    useEffect(() => {
        const array = [];
        const arrayColeccion = collection(db, 'tecnologias');
        const arraySnapshot = getDocs(arrayColeccion);
        arraySnapshot.then(e => {
            e.docs.map(doc => array.push(doc.data()))
            setTecnologias([...array])
        })
    }, [])

    return <div>
        {tecnologias.map(tecnologia => <div>{tecnologia.nombre}</div>)}
    </div>
}

export default ListaTecnologiasFirebase;