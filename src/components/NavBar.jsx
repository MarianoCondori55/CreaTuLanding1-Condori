import CartWidget from "./CartWidget"

function NavBar(){
 return (
    <div>
        <img src="/public/IMG/logo.jpg" alt="LOGO" />
        <h1>Shoori-Shop</h1>
        <nav>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Sobre nosotros</a></li>
                <li><a href="#services">Contacto</a></li>
                <li><a href="#contact">Servicios</a></li>
            </ul>
            <CartWidget/>
        </nav>
    </div>
 )   
}

export default NavBar