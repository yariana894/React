import { useState } from "react";

function Ejercicio2Random() {
    const [random, setRandom] = useState(0);
    const randomizar = ()=> Math.random()*(6-1)+1
    return <div>
        El número aleatorio es: {random}
        <button onClick={()=>setRandom(randomizar())}>Generar nuevo numero entre 1 y 6</button>
    </div>;
}

export default Ejercicio2Random;