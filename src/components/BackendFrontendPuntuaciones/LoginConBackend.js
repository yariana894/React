import {useState} from "react";

function LoginConBackend() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const readStorage = async e => {
        try {
            const rawResponse = await fetch('http://localhost:5300/usuario/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email: email, password: password})
            });
            const content = await rawResponse.json();

            localStorage.setItem("token", JSON.stringify(content));
            console.log(localStorage.getItem('token'))
        } catch (e) {
            alert("error")
        }
    }

    let handleSubmit = async e => {
        e.preventDefault()
        await readStorage()
    }

    const handleChange = e => {
        const {name, value} = e.target;
        if (name === "email") {
            setEmail(value);
        } else {
            setPassword(value);
        }
    }

    return <>
        <form onSubmit={handleSubmit}>
            <label>Email </label>
            <input name="email" value={email} onChange={handleChange}/>

            <label>Password </label>
            <input name="password" value={password} onChange={handleChange}/>

            <input type="submit" name="enviar" value="Guardar Datos"/>
        </form>
    </>
}

export default LoginConBackend;