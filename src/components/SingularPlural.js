import {useState} from "react";

import '../App.css'

function SingularPlural() {
    const [word, setWord] = useState("")
    const [singulares, setSingulares] = useState([])
    const [plurales, setPlurales] = useState([])

    let handleSubmit = async (e) => {
        if (word.charAt(word.length - 1) === 's') {
            setPlurales([...plurales, word])
        } else {
            setSingulares([...singulares, word])
        }
        setWord("")
        e.preventDefault();
    }
    let handleChange = (e) => {
        const {name, value} = e.target;
        if (name === "word") setWord(value);
    }

    return (
        <div className="App-header">
            <div>
                <form onSubmit={handleSubmit}>
                    <input name="word" value={word} onChange={handleChange}/>
                    <input type="submit" value="Enviar" disabled={word === ''}/>
                </form>
            </div>
            <div className='div-lists'>
                <div className='list'>
                    {singulares.map(singular => <li key={singular}>{singular}</li>)}
                </div>
                <div className='list'>
                    {plurales.map(plural => <li key={plural}>{plural}</li>)}
                </div>
            </div>
        </div>
    );
}

export default SingularPlural;