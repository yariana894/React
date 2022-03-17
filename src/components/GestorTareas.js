import {useState} from "react";

function GestorTareas() {
    const [checked, setChecked] = useState(false);
    const [tarea, setTarea] = useState('')
    const [tareas, setTareas] = useState([])

    let handleChange = e => {
        if (e.target.value === '') {
            setTarea('');
        } else {
            setTarea(e.target.value);
        }
    }

    const handleClick = () => {
        if (checked === true) {//Cuando al propiedad checked es true
            tarea.css("text-decoration", "line-through");
        } else {
            tarea.css("text-decoration", "none");//Cuando la porpiedad checked es false quita el tachado
        }
    };

    let handleRemove = index => {
        let nuevoArrayTareas = tareas;
        nuevoArrayTareas = nuevoArrayTareas
            .filter((numero, i) => i !== index)
        setTareas(nuevoArrayTareas);
    }

    let handleSubmit = e => {
        if (tarea !== '') {
            setTareas([...tareas, tarea]);
        }
        e.preventDefault();
        console.log(tarea)
        console.log(tareas)

    }

    return <>
        <form onSubmit={handleSubmit}>
            <h3>GESTOR DE TAREAS</h3>
            <div>
                {tareas.map((tarea, index) => <ul key={index}>
                    <input type="checkbox" checked={checked}/>
                    {tarea}
                    <button type="submit" onClick={e => handleRemove(index)}>Borrar</button>
                </ul>)}
            </div>

            <input type="text" value={tarea} onChange={handleChange}/>
            <button onClick={handleClick}>Añadir tarea</button>
        </form>
    </>
}

export default GestorTareas;