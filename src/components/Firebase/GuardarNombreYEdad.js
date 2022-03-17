import {useState} from "react";
import {saveForm} from "../../services/formularioDB";

function GuardarNombreYEdad() {
    //el usestate es como se inician
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState(18);
    let handleSubmit = async (e) => {
        e.preventDefault()
        //tratar con los datos del formulario
        //para qwue no se me recargue la página

        await saveForm({nombre, edad})
        console.log(nombre, edad)
    }

    let handleChange = (e) => {
        const {name, value} = e.target;
        if (name === "nombre") setNombre(value);
        if (name === "edad") setEdad(value);
    }

    return <form onSubmit={handleSubmit}>
        <label>Nombre:
            <input name="nombre" value={nombre} onChange={handleChange}/>
        </label>
        <label>Edad:
            <input name="edad" value={edad} onChange={handleChange}/>
        </label>
        <input type="submit" value="Enviar"/>
    </form>
}

export default GuardarNombreYEdad;