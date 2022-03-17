import './App.css';
import {Route, Routes} from 'react-router-dom'
import NavBar from './components/Navbar';
import ComponenteConFunciones from './components/TipoComponentes/ComponenteConFunciones';
import ComponenteConFuncionesFlecha from './components/TipoComponentes/ComponenteConFuncionesFlecha';
import Saludador from './components/TipoComponentes/Saludador';
import ComponenteProps from './components/TipoComponentes/ComponenteProps';
import ComponenteCondicional from './components/TipoComponentes/ComponenteCondicional';
import ComponenteMapeado from './components/TipoComponentes/ComponenteMapeado';
import ComponenteEventos from './components/TipoComponentes/ComponenteEventos';
import Ejercicio1Temperatura from './components/TipoComponentes/Ejercicio1Temperatura';
import Ejercicio2Random from './components/TipoComponentes/Ejercicio2Random';
import ComponenteTemporizador from './components/TipoComponentes/ComponenteTemporizador';
import ListaPokemons from './components/API/ListaPokemons';
import ComponentePeliculas from "./components/API/ComponentePeliculas";
import ComponenteMiembros from "./components/JSON/ComponenteMiembros";
import Ejercicio1EsPrimo from "./components/TipoComponentes/Ejercicio1EsPrimo";
import ListaTecnologiasFirebase from "./components/Firebase/ListaTecnologiasFirebase";
import GuardarNombreYEdad from "./components/Firebase/GuardarNombreYEdad";
import ListadoNumeros from "./components/ListadoNumeros";
import ListadoPuntuacionBackend from "./components/BackendFrontendPuntuaciones/ListadoPuntuacionBackend";
import ListadoCustomHookPuntuacionBackend
    from "./components/BackendFrontendPuntuaciones/ListadoCustomHookPuntuacionBackend";
import InsertarPuntuaciones from "./components/BackendFrontendPuntuaciones/InsertarPuntuaciones";
import BuscarPuntuacionMinima from "./components/BackendFrontendPuntuaciones/BuscarPuntuacionMinima";
import LoginConBackend from "./components/BackendFrontendPuntuaciones/LoginConBackend";
import ComponenteMui from "./components/TipoComponentes/ComponenteMui";
import BuscarPokemon from "./components/API/BuscarPokemon";
import BorrarPuntuacionId from "./components/BackendFrontendPuntuaciones/BorrarPuntuacionId";
import BotonesColores from "./components/BotonesColores";
import SingularPlural from "./components/SingularPlural";
import ListaPersonasFirebase from "./components/Firebase/ListaPersonasFirebase";
import BorrarTodasPuntuaciones from "./components/BackendFrontendPuntuaciones/BorrarTodasPuntuaciones";
import NombresRandom from "./components/API/NombresRandom";
import GestorTareas from "./components/GestorTareas";
import TranscripcionFonetica from "./components/TranscripcionFonetica";


function App() {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Saludador nombre="Angel" apellido="Gonzalez"/>}/>
                <Route path="listaPokemons" element={<ListaPokemons cantidad={5}/>}/>
                <Route path="random" element={<Ejercicio2Random/>}/>
                <Route path="peliculas" element={<ComponentePeliculas title={'Batman'}/>}/>
                <Route path="temp/:grados" element={<Ejercicio1Temperatura grados={33}/>}/>
                <Route path="props" element={<ComponenteProps mensaje="hola"
                                                              valor={10}
                                                              activo={true}
                                                              profesores={['angel', 'bea', 'pepe', 'isabel']}
                                                              miFuncion={num => num * num}
                                                              miJsx={<p> Soy un JSX </p>}
                                                              otroComponente={<Saludador nombre="Juan"
                                                                                         apellido="Perez"/>}
                                                              primo={<esPrimo numero={11}/>}
                >
                </ComponenteProps>}/>
                <Route path="funciones" element={<ComponenteConFunciones/>}/>
                <Route path="condicional" element={<ComponenteCondicional/>}/>
                <Route path="temporizador" element={<ComponenteTemporizador/>}/>
                <Route path="mapeado" element={<ComponenteMapeado/>}/>
                <Route path="eventos" element={<ComponenteEventos/>}/>
                <Route path="funcionesFecha" element={<ComponenteConFuncionesFlecha/>}/>
                <Route path="miembros" element={<ComponenteMiembros/>}/>
                <Route path="tecnologias" element={<ListaTecnologiasFirebase/>}/>
                <Route path="personas" element={<ListaPersonasFirebase/>}/>
                <Route path="formulario" element={<GuardarNombreYEdad/>}/>
                <Route path="isPrimo" element={<Ejercicio1EsPrimo numero={5}/>}/>
                <Route path="lista" element={<ListadoNumeros/>}/>
                <Route path="listadoPuntuaciones" element={<ListadoPuntuacionBackend/>}/>
                <Route path="listadoPuntuacionesHook" element={<ListadoCustomHookPuntuacionBackend/>}/>
                <Route path={"insertarPuntuacion"} element={<InsertarPuntuaciones/>}/>
                <Route path={"buscarPuntuaciones"} element={<BuscarPuntuacionMinima/>}/>
                <Route path={"borrarIdPuntuacion"} element={<BorrarPuntuacionId/>}/>
                <Route path={"borrarPuntuaciones"} element={<BorrarTodasPuntuaciones/>}/>
                <Route path={"login"} element={<LoginConBackend/>}/>
                <Route path={"mui"} element={<ComponenteMui/>}/>
                <Route path={"buscarPokemon"} element={<BuscarPokemon/>}/>
                <Route path={"botonesColores"} element={<BotonesColores/>}/>
                <Route path={"singuPlural"} element={<SingularPlural/>}/>
                <Route path={"nombresRandom"} element={<NombresRandom/>}/>
                <Route path={"tareas"} element={<GestorTareas/>}/>
                <Route path={"fonetica"} element={<TranscripcionFonetica/>}/>
            </Routes>
        </div>
    );
}

export default App;
