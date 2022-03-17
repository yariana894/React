import {useEffect, useState} from "react";

function ListadoNumeros() {
    const [numeros, setNumeros] = useState([])
    const [numero, setNumero] = useState(0)
    const [mayor, setMayor] = useState(0);
    const [media, setMedia] = useState(0);

    /*cuando el array cambie se encarga useeffect de actualizar*/
    useEffect(() => {
        calcularMayor()
        calcularMedia()
    }, [numeros])

    let handleChange = e => {
        if (e.target.value === '') {
            setNumero('');
        } else {
            setNumero(parseInt(e.target.value));
        }
    }
    
    let handleSubmit = e => {
        /* let nuevoArrayNumeros = numeros;
         nuevoArrayNumeros.push(numero);
         setNumeros(nuevoArrayNumeros);*/
        if (numero !== '') {
            setNumeros([...numeros, numero]);
        }
        e.preventDefault();
    }

    let handleRemove = index => {
        let nuevoArrayNumeros = numeros;
        nuevoArrayNumeros = nuevoArrayNumeros
            .filter((numero, i) => i !== index)
        // nuevoArrayNumeros.slice(index,1)
        setNumeros(nuevoArrayNumeros);
    }

    let calcularMayor = () => {
        let mayor = numeros[0];
        numeros.forEach(numero => {
            if (numero > mayor) {
                mayor = numero;
            }
        })
        setMayor(mayor);
    }
    let calcularMedia = () => {
        let suma = 0;
        numeros.forEach(numero => {
            suma += numero;
        })
        setMedia(suma / numeros.length);
    }

    return <>
        <form onSubmit={handleSubmit}>
            <label>Inserta un numero:
                <input name="numero" value={numero} onChange={handleChange}/>
            </label>
            <input type="submit" value="Guardar"/>
        </form>
        <ul>
            {numeros.map((numero, index) => <li key={index}>
                {numero}
                <a href="#" onClick={e => handleRemove(index)}>Eliminar</a>
            </li>)}
        </ul>
        <div>El mayor es: {mayor}</div>
        <div>La media vale: {media}</div>
    </>
}


export default ListadoNumeros;
