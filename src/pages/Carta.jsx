function Carta() {
    const productos = [
        { id: 1, nombre: "Café Espresso", precio: 2500, categoria: "bebidas-calientes",descripcion: "Café negro intenso y aromático",imagen: "/cafe-espresso.jpg"  },
        { id: 2, nombre: "Capuccino", precio: 3000, categoria: "bebidas-calientes" ,descripcion: "Café con sabor chocolate",imagen: "/capuccino.jpg" },
        { id: 3, nombre: "Medialuna", precio: 3500, categoria: "comidas",descripcion: "Medialuna de manteca o de grasa",imagen: "/medialuna.jpg" },
        { id: 4, nombre: "Tostado apto vegano", precio: 3500, categoria: "comidas",descripcion: "Tostado de miga de J&Q apto vegano",imagen: "/tostado.jpg" }
    ];

    const productosPorCategoria = productos.reduce((acc, producto) => {
        if (!acc[producto.categoria]) {
            acc[producto.categoria] =[];
        }
        acc[producto.categoria].push(producto);
        return acc;
    },{})

    const formatearCategoria = (categoria) => {
        const nombres = {
            'bebida-calientes': 'Bebidas Calientes',
            'comidas': 'Comidas'
        };
        return nombres[categoria] || categoria;
    };

    return (
        <div className="carta-container">
                <header className="carta-header">
                    <h1>Nuestra Carta</h1>
                    <p>Descubre nuestros deliciosos productos</p>
                </header>

                <main className="carta-main">
                    {Object.entries(productosPorCategoria).map(([categoria, productosCategoria]) => (
                        <section key={categoria} className="categoria-section">
                            <h2 className="categoria-titulo">
                               {formatearCategoria(categoria)}
                            </h2>

                <div className="productos-grid">
                    {productosCategoria.map(producto => (
                            <div key={producto.id} className="producto-card">
                            <div className="producto-imagen">
                                {/*alguna img*/}
                                <div className="imagen-placeholder">
                                    {producto.nombre.charAt(0)}
                                </div>
                                </div>
                            <div className="producto-infoo">
                                <h3 className="producto-nombre">{producto.nombre}</h3>
                                <p className="producto-descripcion">${producto.descripcion}</p>
                                <div className="producto-precio-container">
                                    <span className="producto-precio">${producto.precio}</span>
                                    <button className="Agregar-al-carrito">Agregar +</button>
                                </div>
                            </div>    
                        </div>    
                        ))}
                    </div>
                        </section>
                    ))}
                </main>
        </div>
    );
}

export default Carta