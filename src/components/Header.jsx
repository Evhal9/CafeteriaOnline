import carrito from '../assets/carrito.svg'
import './Header.css'

function Header(){
    return (
        <>
        <nav id="nav" >

                <section id="logo-container"> 
                    <img id="logo"src="/lunaIcon.svg" alt="LogoLuna" />
                    <h1 id="marca">Luna & Granos cafe </h1>
                    </section>
                <section id="nav-items">
                    <a class="a-nav "href="#">Inicio</a>
                    <a class="a-nav " href="">Carta</a>
                    <a class="a-nav " href="">Contacto</a>
                    <a class="a-nav" href=""> Nosotros</a>
                    <a class="a-nav"  href=""> <img id="carrito" src={carrito} alt="" /></a>  
                                    </section>
        </nav>
        </>
    )
}

export default Header