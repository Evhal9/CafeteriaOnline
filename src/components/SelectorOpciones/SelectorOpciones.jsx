import { useState } from 'react';
import './SelectorOpciones.css';

function SelectorOpciones({ producto, onAgregarAlCarrito, onCerrar }) {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(0);
    const [cantidad, setCantidad] = useState(1);

    const opcionActual = producto.opciones[opcionSeleccionada];
    const precioTotal = (opcionActual.precio * cantidad).toFixed(2);

    const handleAgregar = () => {
        onAgregarAlCarrito(producto, opcionActual, cantidad);
    };

    return (
        <div className="modal-overlay" onClick={onCerrar}>
            <div className="modal-opciones" onClick={(e) => e.stopPropagation()}>
                <button className="cerrar-modal" onClick={onCerrar}>×</button>
                
                <h2>{producto.nombre}</h2>
                
                
                <div className="selector-grupo">
                    <label>Elegir variante:</label>
                    <select 
                        value={opcionSeleccionada}
                        onChange={(e) => setOpcionSeleccionada(parseInt(e.target.value))}
                        className="selector-opciones"
                    >
                        {producto.opciones.map((opcion, index) => (
                            <option key={opcion.id} value={index}>
                                {opcion.nombre} 
                                {opcion.tamaño && ` (${opcion.tamaño})`} - ${opcion.precio}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="selector-grupo">
                    <label>Cantidad:</label>
                    <div className="cantidad-controls">
                        <button 
                            onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                            className="cantidad-btn"
                        >-</button>
                        <span className="cantidad-display">{cantidad}</span>
                        <button 
                            onClick={() => setCantidad(cantidad + 1)}
                            className="cantidad-btn"
                        >+</button>
                    </div>
                </div>

                <div className="resumen-pedido">
                    <p>Total: <strong>${precioTotal}</strong></p>
                    <button onClick={handleAgregar} className="agregar-btn">
                        Agregar {cantidad} al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SelectorOpciones;