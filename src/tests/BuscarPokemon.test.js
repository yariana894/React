import BuscarPokemon from "../components/API/BuscarPokemon";
import {fireEvent, render, screen} from "@testing-library/react";


beforeEach(() => {
    render(<BuscarPokemon/>)
    fetch.resetMocks();
})

test('rendea correctamente el componente', () => {

    //screen.get *   // me devuelve algo y tiene que existir
    //screen.query *  // me devuelve algo y no tiene por que existir
    //screen.find *   // me devuelve algo que es asincrono

    /*npm run test*/

    /*si empieza por By me devuelve una cosa
    * sino me devuelve un array*/

    const titulo = screen.getByText("Search pokemons")
    /*espero que este titulo que busco exista en el documento*/
    expect(titulo).toBeInTheDocument()
})

test('Formulario correctamente rendeado', () => {
    /*permite buscar un botón*/
    const submit = screen.findByRole('button', {name: /buscar/i})
    expect(submit).toBeInTheDocument()

    const cajaTexto = screen.getByRole('textbox')
    expect(cajaTexto).toBeInTheDocument()
})

test('buscar un pokemon', async ()=>{
    fetch.mockResponseOnce(JSON.stringify(
        {
            weight: 400,
            sprites: {
                front_default: 'https://fotoguapa/pokemon.png'
            }
        }
    ))

    const cajaTexto = screen.getByLabelText(/Nombre/i)
    const submit = screen.getByRole('button')

    fireEvent.change(cajaTexto, {target:{value:'pepe'}})
    fireEvent.click(submit)

    const valorPeso = await screen.findByText(/400/i)
    expect(valorPeso).toBeInTheDocument()
})