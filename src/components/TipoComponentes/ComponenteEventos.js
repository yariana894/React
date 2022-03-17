import { useState } from "react";

// Hooks useState
function ComponenteEventos() {
    //let valorContador = useState(2)[0]  //valor
    //let cambiarContador = useState(2)[1] // funcion para cambiar el valor
    const [contador, setContador] = useState(2)
    const disminuirContador = () => setContador(contador - 1)
    return <div>
        <div>El valor del contador es:{contador}</div>
        <button onClick={() => setContador(contador + 1)}>Aumentar contador</button>
        <button onClick={() => disminuirContador()}>Disminuir contador</button>
    </div>

}

export default ComponenteEventos;