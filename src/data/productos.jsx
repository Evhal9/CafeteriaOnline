export const productos = [
    {
        id: 1,
        nombre: "Café Espresso",
        categoria: "bebidas-calientes",
        imagen: "/productos/cafe-espresso.jpg",
        opciones: [
            {
                id: "espresso-chico",
                nombre: "Chico",
                tamaño: "200ml",
                precio: 2500,
                descripcion: "Café negro intenso y aromático en tamaño chico"
            },
            {
                id: "espresso-mediano", 
                nombre: "Mediano",
                tamaño: "300ml", 
                precio: 3000,
                descripcion: "Café negro intenso y aromático en tamaño mediano"
            },
            {
                id: "espresso-grande",
                nombre: "Grande", 
                tamaño: "400ml",
                precio: 3500,
                descripcion: "Café negro intenso y aromático en tamaño grande"
            }
        ]
    },
    {
        id: 2,
        nombre: "Capuccino",
        categoria: "bebidas-calientes",
        imagen: "/productos/capuccino.jpg", 
        opciones: [
            {
                id: "capuccino-chico",
                nombre: "Chico",
                tamaño: "250ml",
                precio: 3000,
                descripcion: "Café con leche vaporizada y espuma en tamaño chico"
            },
            {
                id: "capuccino-grande",
                nombre: "Grande",
                tamaño: "400ml", 
                precio: 4000,
                descripcion: "Café con leche vaporizada y espuma en tamaño grande"
            }
        ]
    },
    {
        id: 3,
        nombre: "Medialuna",
        categoria: "comidas",
        imagen: "/productos/medialuna.jpg",
        opciones: [
            {
                id: "medialuna-grasa",
                nombre: "De grasa", 
                tipo: "Tradicional",
                precio: 1500,
                descripcion: "Factura tradicional de grasa, crocante y sabrosa"
            },
            {
                id: "medialuna-manteca",
                nombre: "De manteca",
                tipo: "Premium", 
                precio: 2000,
                descripcion: "Factura premium de manteca, más esponjosa"
            }
        ]
    },
    {
        id: 4,
        nombre: "Tostado",
        categoria: "comidas", 
        imagen: "/productos/tostado.jpg",
        opciones: [
            {
                id: "tostado-jamon-queso",
                nombre: "Jamón y Queso",
                precio: 4500,
                descripcion: "Sandwich de jamón y queso gratinado"
            },
                       {
                id: "tostado-vegano",
                nombre: "Jamón y Queso Apto Vegano",
                precio: 4500,
                descripcion: "Sandwich de jamón y queso gratinado apto vegano"
            },

            {
                id: "tostado-queso-only",
                nombre: "Solo Queso",
                precio: 4000, 
                descripcion: "Sandwich de queso gratinado"
            }
        ]
    },
    {
        id: 5,
        nombre: "Jugo de Naranja",
        categoria: "bebidas-frias",
        imagen: "/productos/jugo-naranja.jpg",
        opciones: [
            {
                id: "jugo-chico",
                nombre: "Vaso Chico",
                tamaño: "300ml",
                precio: 3000,
                descripcion: "Jugo natural recién exprimido"
            },
            {
                id: "jugo-grande",
                nombre: "Vaso Grande", 
                tamaño: "500ml",
                precio: 4500,
                descripcion: "Jugo natural recién exprimido"
            }
        ]
    },
    {
        id: 5,
        nombre: "Jugo de Pomelo",
        categoria: "bebidas-frias",
        imagen: "/productos/jugo-pomelo.jpg",
        opciones: [
            {
                id: "jugo-chico",
                nombre: "Vaso Chico",
                tamaño: "300ml",
                precio: 3000,
                descripcion: "Jugo natural recién exprimido"
            },
            {
                id: "jugo-grande",
                nombre: "Vaso Grande", 
                tamaño: "500ml",
                precio: 4500,
                descripcion: "Jugo natural recién exprimido"
            }
        ]
    }
];

export const agruparPorCategoria = (productos) => {
    return productos.reduce((acc, producto) => {
        if (!acc[producto.categoria]) {
            acc[producto.categoria] = [];
        }
        acc[producto.categoria].push(producto);
        return acc;
    }, {});
};

export const formatearCategoria = (categoria) => {
    const nombres = {
        'bebidas-calientes': 'Bebidas Calientes ☕',
        'bebidas-frias': 'Bebidas Frías 🧊', 
        'comidas': 'Comidas y Postres 🥐'
    };
    return nombres[categoria] || categoria;
};

export default productos