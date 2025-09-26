import carrito from '../assets/carrito.svg'
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
                    <Link id="logo" to="/Inicio"><img src="/lunaIcon.svg" alt="LogoLuna" /></Link>
                    <h1 id="marca">Luna & Granos cafe </h1>
                    </section>
                <section id="nav-items">
                    <Link className="a-nav" to="/Inicio">Inicio</Link>
                    <Link className="a-nav" to="/Carta">Carta</Link>
                    <Link className="a-nav" to="/Contacto">Contacto</Link>
                    <Link className="a-nav" to="/Nosotros"> Nosotros</Link>
                    <Link className="a-nav" to="/Carrito"> <img id="carrito" src={carrito} alt="" /></Link>
                </section>
        </nav>
        </>
    )
}

export default Header