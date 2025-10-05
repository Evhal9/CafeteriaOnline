import './Contacto.css';

import { useState } from 'react';

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        fecha: '',
        hora: '',
        personas: '',
        mensaje: ''
    });

    const [enviado, setEnviado] = useState(false);

    const manejarCambio = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        setEnviado(true);
        setTimeout(() => setEnviado(false), 5000);
        
        // Limpiar formulario
        setFormData({
            nombre: '',
            email: '',
            telefono: '',
            fecha: '',
            hora: '',
            personas: '',
            mensaje: ''
        });
    };


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

                {enviado && (
                            <div className="mensaje-exito">
                                ✅ ¡Gracias por tu mensaje! Te contactaremos pronto.
                            </div>
                        )}

                <form className="formulario-contacto" onSubmit={manejarEnvio}>
                    <div className="form-fila">
                    <div className="form-grupo">
                    <label htmlFor="nombre">Nombre completo *</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={manejarCambio}
                        required
                    />
                    </div>
                        <div className="form-grupo">
                            <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={manejarCambio}
                                     required
                                    />
                                </div>
                            </div>

                    <div className="form-fila">
                        <div className="form-grupo">
                            <label htmlFor="telefono">Teléfono</label>
                                <input
                                    type="tel"
                                    id="telefono"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={manejarCambio}
                                    />
                                </div>
                    <div className="form-grupo">
                        <label htmlFor="personas">Número de personas</label>
                            <select
                                id="personas"
                                name="personas"
                                value={formData.personas}
                                onChange={manejarCambio}
                                >
                                <option value="">Seleccionar</option>
                                <option value="1">1 persona</option>
                                <option value="2">2 personas</option>
                                <option value="3-4">3-4 personas</option>
                                <option value="5-6">5-6 personas</option>
                                <option value="7+">7+ personas</option>
                                </select>
                                </div>
                            </div>

                    <div className="form-fila">
                        <div className="form-grupo">
                            <label htmlFor="fecha">Fecha preferida</label>
                                <input
                                    type="date"
                                    id="fecha"
                                    name="fecha"
                                    value={formData.fecha}
                                    onChange={manejarCambio}
                                    />
                                </div>
                    <div className="form-grupo">
                        <label htmlFor="hora">Hora preferida</label>
                            <input
                                type="time"
                                id="hora"
                                name="hora"
                                value={formData.hora}
                                onChange={manejarCambio}
                                />
                                </div>
                            </div>

                    <div className="form-grupo">
                        <label htmlFor="mensaje">Mensaje *</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={manejarCambio}
                            rows="5"
                            placeholder="Cuéntanos cómo podemos ayudarte..."
                            required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-enviar">
                            Enviar Mensaje
                            </button>
                        </form>
                    

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