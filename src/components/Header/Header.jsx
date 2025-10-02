import carrito from '../../assets/carrito.svg'
import './Header.css'
import {Link} from "react-router-dom"

function Header(){
    return (
        <>
        <nav id="nav" >
                <section id="first-child" >
                    <p>Date tu gusto ☕</p>
                </section>
                <section id="logo-container"> 
                    <Link id="logo" to="/"><img src="/lunaIcon.svg" alt="LogoLuna" /></Link>
                    <h1 id="marca">Luna & Granos cafe </h1>
                    </section>
                <section id="nav-items">
                    <Link class="a-nav" to="/">Inicio</Link>
                    <Link class="a-nav" to="/carta">Carta</Link>
                    <Link class="a-nav" to="/contacto">Contacto</Link>
                    <Link class="a-nav" to="/cosotros"> Nosotros</Link>
                    <Link class="a-nav" to="/carrito"> <img id="carrito" src={carrito} alt="" /> </Link>
                </section>
        </nav>
        </>
    )
}

export default Header