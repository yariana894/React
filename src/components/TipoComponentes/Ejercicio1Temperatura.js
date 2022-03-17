function Ejercicio1Temperatura( {grados} ) {
    const convertir = (g)=> (g * 9/5) + 32;
    return <div>{convertir(grados)}</div>
}

export default Ejercicio1Temperatura;