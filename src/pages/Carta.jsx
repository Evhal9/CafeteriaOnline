import { useState } from 'react';
import './Carta.css';
import { productos, agruparPorCategoria, formatearCategoria } from '../data/productos';
import SelectorOpciones from '../components/SelectorOpciones';
import MiniCarrito from '../components/MiniCarrito/MiniCarrito';
import { useCarrito } from '../context/CarritoContext'; 


function Carta() {
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);
    

    const { carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, totalCarrito } = useCarrito();

    const productosPorCategoria = agruparPorCategoria(productos);

    const abrirOpciones = (producto) => {
        setProductoSeleccionado(producto);
        setMostrarModal(true);
    };

    const cerrarOpciones = () => {
        setMostrarModal(false);
        setProductoSeleccionado(null);
    };

    const handleAgregarAlCarrito = (producto, opcion, cantidad) => {
        agregarAlCarrito(producto, opcion, cantidad); 
        cerrarOpciones();
    };

    return (
        <div className="carta-container">
            <MiniCarrito 
                carrito={carrito}
                total={totalCarrito}
                onEliminarItem={eliminarDelCarrito}
                onVaciarCarrito={vaciarCarrito}
            />

            <header className="carta-header">
                <h1>Nuestra Carta</h1>
                <p>Personaliza tu pedido seleccionando opciones y cantidades</p>
                {carrito.length > 0 && (
                    <div className="carrito-counter">
                        🛒 {carrito.reduce((sum, item) => sum + item.cantidad, 0)} items - Total: ${totalCarrito.toFixed(2)}
                    </div>
                )}
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
                                        {producto.imagen ? (
                                            <img 
                                                src={producto.imagen} 
                                                alt={producto.nombre}
                                                className="producto-img"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    const placeholder = e.target.nextSibling;
                                                    if (placeholder) placeholder.style.display = 'flex';
                                                }}
                                            />
                                        ) : null}
                                        <div className="imagen-placeholder" style={{display: producto.imagen ? 'none' : 'flex'}}>
                                            {producto.nombre.charAt(0)}
                                        </div>
                                    </div>
                                    <div className="producto-info">
                                        <h3 className="producto-nombre">{producto.nombre}</h3>
                                        <p className="producto-opciones-info">
                                            {producto.opciones.length} opciones disponibles
                                        </p>
                                        <div className="producto-precio-container">
                                            <span className="producto-precio-range">
                                                Desde ${Math.min(...producto.opciones.map(op => op.precio)).toFixed(2)}
                                            </span>
                                            <button 
                                                className="ver-opciones-btn"
                                                onClick={() => abrirOpciones(producto)}
                                            >
                                                Ver Opciones
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </main>

            {mostrarModal && productoSeleccionado && (
                <SelectorOpciones 
                    producto={productoSeleccionado}
                    onAgregarAlCarrito={handleAgregarAlCarrito} 
                    onCerrar={cerrarOpciones}
                />
            )}
        </div>
    );
}

export default Carta;