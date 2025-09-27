import { createContext, useContext, useState } from 'react';


const CarritoContext = createContext();


export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState([]);




    const agregarAlCarrito = (producto, opcion, cantidad) => {
        const nuevoItem = {
            id: `${producto.id}-${opcion.id}-${Date.now()}`,
            productoNombre: producto.nombre,
            opcionNombre: opcion.nombre,
            precioUnitario: opcion.precio,
            cantidad: cantidad,
            precioTotal: opcion.precio * cantidad
        };  
        setCarrito(prev => [...prev, nuevoItem]);
    };

    const eliminarDelCarrito = (itemId) => {
        setCarrito(prev => prev.filter(item => item.id !== itemId));
    };


    const actualizarCantidad = (itemId, nuevaCantidad) => {
        if (nuevaCantidad < 1) {
            eliminarDelCarrito(itemId);
            return;
        }
        
        setCarrito(prev =>
            prev.map(item =>
                item.id === itemId
                    ? { 
                        ...item, 
                        cantidad: nuevaCantidad, 
                        precioTotal: item.precioUnitario * nuevaCantidad 
                    }
                    : item));};
    const vaciarCarrito = () => {
        setCarrito([]);
    };


    const totalCarrito = carrito.reduce((sum, item) => sum + item.precioTotal, 0);
    const cantidadTotalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);

    const value = {
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        actualizarCantidad,
        vaciarCarrito,
        totalCarrito,
        cantidadTotalItems
    };

    return (
        <CarritoContext.Provider value={value}>
            {children}
        </CarritoContext.Provider>
    );
}

//eslint-disable-next-line react-refresh/only-export-components
export function useCarrito() {
    const context = useContext(CarritoContext);
    
    if (context === undefined) {
        throw new Error('useCarrito debe usarse dentro de CarritoProvider');
    }
    
    return context;
}