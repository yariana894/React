function ComponenteProps(props) {
    return <ul>
        <li>{props.mensaje}</li>
        <li>{props.valor}</li>
        <li>{props.activo?'Verdadero':'Falso'}</li>
        <li>{props.profesores.join(',')}</li>
        <li>{[1,2,3,4].map(props.miFuncion).join(',')}</li>
        <li>{props.miJsx}</li>
        <li>{props.otroComponente}</li>
        <li>{props.primo}</li>
    </ul>;
}

export default ComponenteProps;