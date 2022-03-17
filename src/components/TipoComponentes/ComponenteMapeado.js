function ComponenteMapeado(props){
    const nombres = ['naranja', 'limon', 'pera', 'manzana']
    return <ul>
       {   nombres.map(fruta=><li key={fruta}>{fruta}</li>)   }
    </ul>
}
export default ComponenteMapeado;

