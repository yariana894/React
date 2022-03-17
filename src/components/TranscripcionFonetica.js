import '../App.css'
import {useEffect, useState} from "react";
import {saveForm} from "../services/formularioDB";

function TranscripcionFonetica() {
    const [word, setWord] = useState('')
    const [words, setWords] = useState([])
    const [wordsList, setWordsList] = useState([])
    const [id, setId] = useState('')


    useEffect(() => {
        async function callAPI() {
            const req = await fetch("http://localhost:5300/palabra/");
            const data = await req.json();
            setWordsList(data.datos)
            //console.log(data.datos)
        }

        callAPI()
    }, [])


    let handleSubmit = async e => {
        e.preventDefault()

        await saveForm({word})


        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const request = await fetch(url)
        const data = await request.json()

        for (let i = 0; i < data.length; i++) {
            setWords(data[i].phonetics)
        }



        const rawResponseInsert = await fetch('http://localhost:5300/palabra/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({palabra: word, fecha: new Date()})
        });
        const contentInsert = await rawResponseInsert.json();
        //console.log(contentInsert);

        const rawResponseDelete = await fetch(`http://localhost:5300/palabra/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({_id: id})
        });
        const content = await rawResponseDelete.json();
        console.log(content)
    }

    let handleRemove = async index => {


        let nuevoArrayWords = wordsList;
        nuevoArrayWords = nuevoArrayWords
            .filter((w, i) => i !== index)
        setWordsList(nuevoArrayWords);
    }

    const handleChange = e => {
        const {name, value} = e.target;
        if (name === "word") setWord(value);
    }
    // console.log(wordsList)

    return <>

        <div className="borde">
            <img className="imagen"
                 src="https://thumbs.dreamstime.com/b/dibujo-de-caricatura-aislado-sonrisas-boca-y-lengua-sobre-fondo-blanco-156950049.jpg"/>

            <div className="div-lists">
                <div>
                    <h1>Transcripción fonética</h1>
                    <form onSubmit={handleSubmit} className="form">
                        Inserta la palabra a buscar:
                        <input type="text" name="word" value={word} onChange={handleChange}/>
                        <button type="submit" name="buscar">Buscar transición</button>

                        <div>
                            {words.map((n) => <ul className="cajas">
                                {n.text}
                                <br/>
                                <audio controls>
                                    <source src={n.audio}/>
                                </audio>
                            </ul>)}
                        </div>
                    </form>
                </div>

                <div>
                    <h2>Lista de palabras buscadas</h2>
                    <ul>
                        {wordsList.map((w, index) => <li key={index}>
                            {w.palabra}
                            <a href="#" onClick={e => handleRemove(index)}>(Borrar)</a>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default TranscripcionFonetica;