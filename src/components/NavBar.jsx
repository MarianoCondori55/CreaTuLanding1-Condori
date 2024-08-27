import CartWidget from "./CartWidget"

function NavBar(){
 return (
    <div>
        <img src="/public/IMG/logo.jpg" alt="LOGO" />
        <h1>Shoori-Shop</h1>
        <nav>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#pizzas">Pizzas</a></li>
                <li><a href="#hamburguesas">Hamburguesas</a></li>
                <li><a href="#empanadas">Empanadas</a></li>
            </ul>
            <CartWidget/> 
        </nav>
    </div>
 )   
}

export default NavBar