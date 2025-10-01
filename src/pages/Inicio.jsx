import './Inicio.css'
import {Link} from "react-router-dom"

function Inicio() {
    return (
        <>
        <section id="banner-container">
            <div id="banner-mobile">
                <img id="cafe-banner" src="./src/assets/banner.png" alt="Instrumentos de cafe" />
            </div>
            <div id="ban-barista">
                <img  id="barista"src="./barista.png" alt="Mujer haciendo cafe" />
            </div>
            <div id="banner-items">
                <div className="banner-child">
                    <h3 className="item-title">25% de descuento en desayunos  </h3>
                    <p className="item-info"> Podes elegir 5 entre los productos seleccionados para armar tu combo!</p>
                </div>
                <div className="banner-child">
                    <h3 className="item-title">  Entrega a domicilio </h3>
                    <p className="item-info"> Para que puedas disfrutar nuestros productos sin moverte de tu casa.</p>
                </div>
                <div className="banner-child">
                    <h3 className="item-title"> !Suma puntos con cada compra¡   </h3>
                    <p className="item-info">  Con cada compra sumas puntos para canjear en lo que quieras.</p>
                </div>
            </div>
        </section>
        <section id="description">
               <p> En nuestra cafeteria </p> 
                <h1 id="marca-des"> Luna & Granos cafe</h1> 
                <p>nos esforzamos por brindarte el mejor servicio y calidad en nuestros productos, para que puedas disfrutar de las mejores experiencias a la hora de la merienda.</p>
                <h3>Conoce nuestros productos!</h3>
        </section>
        <section id="sec-buttom">
            <Link to="/Carta"><button> Ver carta </button> </Link>
        </section>

        </>
    )
}
export default Inicio