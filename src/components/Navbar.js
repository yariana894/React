import {Link} from 'react-router-dom'

function NavBar() {
    return <div>
        <Link to="/">Home</Link> |

        <h3>Simples</h3>
        <Link to="/random">Numero random</Link> |
        <Link to="/temp/88">Temperatura</Link> |
        <Link to="miembros">Miembros</Link> |
        <Link to="props">Props</Link> |
        <Link to="lista">Listado Numeros</Link> |
        <Link to="mui">Mui Angular Material</Link> |
        <Link to="botonesColores">Botones colores</Link> |
        <Link to="singuPlural">Diferenciar entre singular y plural</Link> |
        <Link to="tareas">Gestor de tareas</Link> |

        <h3>API</h3>
        <Link to="buscarPokemon">Buscar Pokemon</Link> |
        <Link to="/listaPokemons">Listar los pokemons</Link> |
        <Link to="/nombresRandom">Formar nombres random</Link> |

        <h3>Firebase</h3>
        <Link to="tecnologias">Lista Tecnologías</Link> |
        <Link to="personas">Lista Personas</Link> |
        <Link to="formulario">Guardar Nombre y Edad</Link> |

        <h3>FRONTEND Y BACKEND</h3>

        <Link to="listadoPuntuaciones">Listado Puntuaciones Hook</Link> |
        <Link to="insertarPuntuacion">Insertar Puntuaciones</Link> |
        <Link to="buscarPuntuaciones">Buscar Puntuaciones</Link> |
        <Link to="borrarIdPuntuacion">Borrar Puntuacion por ID</Link> |
        <Link to="borrarPuntuaciones">Borrar Puntuaciones</Link> |
        <Link to="login">Login</Link>|

        <h3>EXAMEN</h3>
        <Link to="fonetica">Fonética</Link>|

        <br/>
        <br/>
        <br/>

    </div>
}

export default NavBar;