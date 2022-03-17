function Admin() {
    return <p>Soy el administrador</p>;
}
function User() {
    return <p>Soy un usuario normal</p>;
}


function ComponenteCondicional() {
    const isAdmin = false;
    return isAdmin ? <Admin/> : <User/>;
}

export default ComponenteCondicional;