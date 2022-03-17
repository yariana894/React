import { useState, useEffect } from "react";

function ComponenteTemporizador() {
    const [contador, setContador] = useState(0)
    
   
    useEffect( () => {
       // se ejecutará esta parte del codigo cuando el componente cambie
    })

    useEffect( () => {
        const t = setTimeout(()=>setContador(c=>contador+1) , 1000)  // monta

        return () => clearTimeout(t) // desmonta

        // se ejecutará una sola vez, al principio
     }, [])

     useEffect( () => {
         
        // se ejecutará solo cuando la variable contador cambie
     }, [contador])

    return <div>El contador vale: {contador}</div>;
}

export default ComponenteTemporizador;