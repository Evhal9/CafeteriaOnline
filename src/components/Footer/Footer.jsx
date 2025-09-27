import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Sobre Nosotros</h4>
                    <p>Apasionados por el café, dedicados a ofrecerte la mejor experiencia desde el grano hasta la taza. Visítanos y siéntete como en casa.</p>
                </div>

                <div className="footer-section">
                    <h4>Navegación</h4>
                    <ul className="footer-links">
                        <li><Link to="/Inicio">Inicio</Link></li>
                        <li><Link to="/carta">Nuestra Carta</Link></li>
                        <li><Link to="/nosotros">Sobre Nosotros</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Síguenos</h4>
                    <p>Mantente conectado a través de nuestras redes sociales.</p>
                    <div className="social-icons">
                        {/* Replace with actual icons if you have an icon library */}
                        <a href="#" aria-label="Facebook">FB</a>
                        <a href="#" aria-label="Instagram">IG</a>
                        <a href="#" aria-label="Twitter">TW</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Cafetería Online. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
