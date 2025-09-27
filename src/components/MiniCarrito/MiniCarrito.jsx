import { useNavigate } from 'react-router-dom';
import './MiniCarrito.css';
function MiniCarrito({ carrito, total, onEliminarItem, onVaciarCarrito }) {
    const navigate = useNavigate();

    if (carrito.length === 0) {
        return null;
    }

    const handleFinalizarPedido = () => {
        navigate('/carrito');
    };

    return (
        <div className="mini-carrito">
            <div className="mini-carrito-header">
                <h3>🛒 Tu Pedido</h3>
                <button onClick={onVaciarCarrito} className="vaciar-carrito-btn">
                    Vaciar
                </button>
            </div>
            
            <div className="mini-carrito-items">
                {carrito.map(item => (
                    <div key={item.id} className="mini-carrito-item">
                        <div className="item-info">
                            <span className="item-cantidad">{item.cantidad}x</span>
                            <span className="item-nombre">
                                {item.productoNombre} ({item.opcionNombre})
                            </span>
                        </div>
                        <div className="item-precio">
                            <span>${item.precioTotal.toFixed(2)}</span>
                            <button 
                                onClick={() => onEliminarItem(item.id)}
                                className="eliminar-item-btn"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mini-carrito-total">
                <strong>Total: ${total.toFixed(2)}</strong>
            </div>
            
            <button 
                onClick={handleFinalizarPedido} 
                className="finalizar-pedido-btn"
            >
                Finalizar Pedido
            </button>
        </div>
    );
}

export default MiniCarrito;