import carrito from "../assets/carrito.svg"
import './Header.css'
function Header(){
    return (
        <>
        <nav id="nav" >

                <section id="logo-container"> <img id="logo"src="/lunaIcon.svg" alt="LogoLuna" /></section>
                <section id="nav-items">
                    <a class="a-nav redir"href="#">Inicio</a>
                    <a class="a-nav redir" href="">Carta</a>
                    <a class="a-nav redir" href="">Contacto</a>
                    <a class="a-nav redir" href="">Nosotros</a>
                    <a class="a-nav" href=""><img id="carrito" src={carrito} alt="CarritoCompra" /></a>
                </section>
        </nav>
        </>
    )
}

export default Header