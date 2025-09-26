import './Inicio.css'
import Header from '../components/Header';

function Inicio() {
    return (
        <>
        <Header></Header>
        <section id="banner-container">
            <div id="ban-barista">
                <img  id="barista"src="./barista.png" alt="" />
            </div>
            <div id="banner-items">
                <div className="banner-child">
                    <h3 className="item-title">🔥 25% de descuento en desayunos 🔥 </h3>
                    <p className="item-info"> Podes elegir 5 entre los productos seleccionados para armar tu combo!</p>
                </div>
                <div className="banner-child">
                    <h3 className="item-title"> 🚗 Entrega a domicilio 🚗 </h3>
                    <p className="item-info"> Para que puedas disfrutar nuestros productos sin moverte de tu casa.</p>
                </div>
                <div className="banner-child">
                    <h3 className="item-title"> !Suma puntos con cada compra¡   </h3>
                    <p className="item-info">  Con cada compra sumas puntos para canjear en lo que quieras.</p>
                </div>
            </div>
        </section>
        <section>
            <button type="button"> Ver carta </button>
        </section>
        </>
    )
}
export default Inicio