import {useEffect, useState} from "react";
import {db} from "../../services/firebase";
import {collection, getDocs} from "@firebase/firestore";

function ListaPersonasFirebase() {

    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        const array = [];
        const arrayColeccion = collection(db, 'personas');
        const arraySnapshot = getDocs(arrayColeccion);
        arraySnapshot.then(e => {
            e.docs.map(doc => array.push(doc.data()))
            setPersonas([...array])
        })
    })

    return <>
        {personas.map(personas => <div>{personas.nombre}</div>)}
    </>

}

export default ListaPersonasFirebase;