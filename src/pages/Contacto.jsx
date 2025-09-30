import './Contacto.css';

function Contacto() {
    return (
        <div className="contacto-container">
            <header className="contacto-header">
                <h1>Contacto</h1>
                <p>Estamos aquí para atenderte. ¡Visítanos o escríbenos!</p>
            </header>

            <main className="contacto-content">
                <section className="contacto-section">
                    <div className="contacto-image">
                        <img src="/contacto/ExteriorCafeteria.jpg" alt="Exterior de la cafetería" />
                    </div>
                    <div className="contacto-text">
                        <h2>Visítanos</h2>
                        <p>
                            Te esperamos en nuestro acogedor espacio donde el aroma del café recién tostado 
                            te dará la bienvenida. Ven a disfrutar de un momento de tranquilidad, a trabajar 
                            con tranquilidad o a compartir una buena conversación con amigos.
                        </p>
                        <div className="contacto-info">
                            <p><strong>📍 Dirección:</strong> Av. Corrientes 123, Buenos Aires</p>
                            <p><strong>📞 Teléfono:</strong> (011) 1234-5678</p>
                            <p><strong>✉️ Email:</strong> cafeterialunaygranos@gmail.com</p>
                        </div>
                    </div>
                </section>

                <section className="contacto-section">
                    <div className="contacto-image">
                        <img src="/contacto/InteriorCafeteria.jpg" alt="Interior de la cafetería" />
                    </div>
                    <div className="contacto-text">
                        <h2>Horarios de Atención</h2>
                        <p>
                            Estamos abiertos para que nos visites cuando más lo necesites. 
                            Ya sea para empezar tu día con energía o para relajarte al final de la tarde, 
                            tenemos tu taza de café lista.
                        </p>
                        <div className="horarios-info">
                            <p><strong>Lunes a Viernes:</strong> 7:00 - 20:00 hs</p>
                            <p><strong>Sábados:</strong> 8:00 - 22:00 hs</p>
                            <p><strong>Domingos:</strong> 9:00 - 18:00 hs</p>
                        </div>
                    </div>
                </section>

                <section className="contacto-section">
                    <div className="contacto-image"></div>
                    <div className="contacto-text">
                        <h2>Reservas y Eventos</h2>
                        <p>
                            ¿Planeas una reunión de trabajo, un encuentro con amigos o un evento especial? 
                            Ofrecemos espacios reservados y podemos organizar todo para que tu experiencia 
                            sea única e inolvidable.
                        </p>
                        <div className="reservas-info">
                            <p><strong>🎉 Eventos privados</strong></p>
                            <p><strong>💼 Reuniones de trabajo</strong></p>
                            <p><strong>🎂 Celebraciones especiales</strong></p>
                            <p><em>Contáctanos para más información</em></p>
                        </div>
                    </div>
                </section>

                <section className="mapa-section">
                    <h2>¿Cómo llegar?</h2>
                    <div className="mapa-container">
                        <div className="mapa-info">
                            <p><strong>🚇 Metro:</strong> Estación Lima (Línea A)</p>
                            <p><strong>🚌 Colectivos:</strong> 34, 56, 78, 90</p>
                            <p><strong>🚗 Estacionamiento:</strong> Gratuito para clientes</p>
                        </div>
                        <div className="mapa-placeholder">
                            <p>📍 Ubicación: Av. Corrientes 123, Bs.As. Entre las calles Aroma y Sabores.</p>
                        </div>
                        <div className="contacto-image">
                        <img src="/contacto/UbicacionCafeteria.jpg" alt="Ubicación de la cafetería" />
                         </div>
                    </div>
                </section>
            </main>
        </div>
    );
}


export default Contacto;