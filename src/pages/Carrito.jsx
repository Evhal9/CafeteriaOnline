
import { useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext'; 
import './Carrito.css';

function Carrito() {
    const navigate = useNavigate();
    const { carrito, eliminarDelCarrito, actualizarCantidad, vaciarCarrito, totalCarrito } = useCarrito(); 

    const handleSeguirComprando = () => {
        navigate('/carta');
    };
    const volverAlInicio = () => {
        navigate('/');
    };

    const handleConfirmarPedido = () => {
        if (carrito.length === 0) {
            alert('Tu carrito está vacío');
            return;
        }
        
        alert(`¡Pedido confirmado! Total: $${totalCarrito.toFixed(2)}\nGracias por tu compra.`);
        vaciarCarrito();
        navigate('/');
    };

    const handleEliminarItem = (itemId) => {
        if (window.confirm('¿Eliminar este item del carrito?')) {
            eliminarDelCarrito(itemId);
        }
    };

    const handleActualizarCantidad = (itemId, nuevaCantidad) => {
        actualizarCantidad(itemId, nuevaCantidad);
    };

    return (
        <div className="carrito-page">
            <header className="carrito-header">
                <button onClick={volverAlInicio} className="volver-btn">
                    ← Volver al Inicio
                </button>
                <h1>🛒 Tu Carrito de Compras</h1>
            </header>

            <main className="carrito-main">
                {carrito.length === 0 ? (
                    <div className="carrito-vacio">
                        <h2>Tu carrito está vacío</h2>
                        <p>¡Descubre nuestros deliciosos productos!</p>
                        <button onClick={handleSeguirComprando} className="explorar-btn">
                            Explorar Carta
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="carrito-items">
                            {carrito.map(item => (
                                <div key={item.id} className="carrito-item">
                                    <div className="item-details">
                                        <h3>{item.productoNombre}</h3>
                                        <p className="item-opcion">{item.opcionNombre}</p>
                                        <p className="item-precio-unitario">
                                            ${item.precioUnitario.toFixed(2)} c/u
                                        </p>
                                    </div>
                                    <div className="item-controls">
                                        <div className="cantidad-control">
                                            <button 
                                                onClick={() => handleActualizarCantidad(item.id, item.cantidad - 1)}
                                                className="cantidad-btn"
                                            >
                                                -
                                            </button>
                                            <span className="cantidad-display">{item.cantidad}</span>
                                            <button 
                                                onClick={() => handleActualizarCantidad(item.id, item.cantidad + 1)}
                                                className="cantidad-btn"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="item-total">
                                            ${item.precioTotal.toFixed(2)}
                                        </div>
                                        <button 
                                            onClick={() => handleEliminarItem(item.id)}
                                            className="eliminar-btn"
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="carrito-resumen">
                            <div className="resumen-total">
                                <h3>Resumen del Pedido</h3>
                                <div className="total-line">
                                    <span>Subtotal:</span>
                                    <span>${totalCarrito.toFixed(2)}</span>
                                </div>
                                <div className="total-line">
                                    <span>Envío:</span>
                                    <span>Gratis</span>
                                </div>
                                <div className="total-line final">
                                    <span>Total:</span>
                                    <span>${totalCarrito.toFixed(2)}</span>
                                </div>
                            </div>

                            <button onClick={handleConfirmarPedido} className="confirmar-pedido-btn">
                                Confirmar Pedido (${totalCarrito.toFixed(2)})
                            </button>
                            
                            <button onClick={vaciarCarrito} className="vaciar-carrito-btn-page">
                                Vaciar Carrito
                            </button>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}

export default Carrito;