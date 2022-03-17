import {squad} from "./Members";

function ComponenteMiembros() {
    return <div>
        {squad.map((data, key) => {
            return (
                <div key={key}>
                    {data.members.map((miembro, clave) => {
                        return <div>
                            {miembro.name + ", " +
                            miembro.age
                            }
                        </div>
                    })}
                </div>
            )
        })}
    </div>

}

export default ComponenteMiembros;
