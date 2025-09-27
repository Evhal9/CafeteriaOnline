import './Nosotros.css';

function Nosotros() {
    return (
        <div className="nosotros-container">
            <header className="nosotros-header">
                <h1>Sobre Nosotros</h1>
                <p>Una historia de pasión por el café y la comunidad.</p>
            </header>

            <main className="nosotros-content">
                <section className="nosotros-section">
                    <div className="nosotros-image">
                        <img src="/nosotros/barista2.jpg" alt="Barista preparando café" />
                    </div>
                    <div className="nosotros-text">
                        <h2>Nuestra Filosofía</h2>
                        <p>
                            Nacimos de un sueño simple: crear un espacio donde cada taza de café cuente una historia. 
                            Creemos que el café es más que una bebida; es un ritual, una conexión y una fuente de inspiración. 
                            Por eso, nos dedicamos a seleccionar los mejores granos y a prepararlos con un cuidado artesanal que se siente en cada sorbo.
                        </p>
                    </div>
                </section>

                <section className="nosotros-section">
                    <div className="nosotros-image">
                        <img src="/nosotros/postres.jpeg" alt="Granos de café de alta calidad" />
                    </div>
                    <div className="nosotros-text">
                        <h2>Calidad y Sabor</h2>
                        <p>
                            Nuestro compromiso es con la calidad. Trabajamos directamente con productores locales para obtener granos frescos y de origen ético. 
                            Cada lote es tostado en nuestra casa para resaltar sus sabores únicos. Además de nuestro café, ofrecemos una selección de pastelería y bocadillos 
                            hechos con ingredientes frescos y mucho amor.
                        </p>
                    </div>
                </section>

                <section className="nosotros-section">
                     <div className="nosotros-image">
                        <img src="/nosotros/cafess.jpeg" alt="Comunidad disfrutando en la cafetería" />
                    </div>
                    <div className="nosotros-text">
                        <h2>Un Lugar para Ti</h2>
                        <p>
                            Queremos que te sientas como en casa. Nuestra cafetería está diseñada para ser un refugio cálido y acogedor, 
                            perfecto para trabajar, encontrarte con amigos o simplemente disfrutar de un momento de tranquilidad. 
                            Gracias por ser parte de nuestra comunidad. 
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Nosotros;
