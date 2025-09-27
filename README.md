La cafetería Luna & Granos Café quiere modernizar su presencia online. Nos pidieron
crear una aplicación web en React donde los clientes puedan ver la carta de productos,
armar pedidos simples y enviar consultas o reservas. El sitio debe verse bien en celulares y
transmitir una experiencia moderna y amigable.

## Instalación y Ejecución

Para ingresar al proyecto se debe:
1. En la terminal, clonar el repositorio: `git clone https://github.com/Evhal9/CafeteriaOnline`
2. Instalar las dependencias: `npm install`
3. Ejecutar el servidor de desarrollo: `npm run dev`
4. Abrir la URL que aparece en la terminal (generalmente `http://localhost:5173`).

## Documentación

Se eligieron los siguientes colores para realizar el proyecto, buscando transmitir un ambiente ecofriendly y cálido al cliente.

![Paleta de Colores](PaletaColores.jpeg)

## Estructura del Proyecto

La estructura de carpetas principal se organiza de la siguiente manera:

- **/public**: Contiene los assets estáticos como imágenes (`.jpg`, `.svg`) y fuentes. Las imágenes específicas de algunas páginas (como "Nosotros") se organizan en subcarpetas.

- **/src**: Contiene todo el código fuente de la aplicación.
    - **/assets**: Almacena imágenes (`.svg`) que son importadas y procesadas directamente por los componentes de React.
    - **/components**: Contiene los componentes reutilizables de la aplicación. Cada componente tiene su propia carpeta que encapsula sus archivos `.jsx` y `.css`.
        - **/AppRoutes**: Gestiona el sistema de rutas de la aplicación.
        - **/Header**: Componente de la cabecera y navegación principal.
        - **/Footer**: Componente del pie de página.
        - **/MiniCarrito**: Resumen del carrito de compras.
        - **/SelectorOpciones**: Modal para seleccionar opciones de un producto.
    - **/context**: Maneja el estado global de la aplicación, como el `CarritoContext`.
    - **/data**: Almacena datos estáticos, como la lista de `productos.jsx`.
    - **/pages**: Contiene los componentes que representan las páginas completas de la aplicación (Inicio, Carta, Nosotros, etc.). Cada página tiene su archivo `.jsx` y su `.css` correspondiente en esta carpeta.

- **App.jsx**: Es el componente raíz que ensambla la estructura principal de la aplicación (Header, Rutas, Footer).
- **main.jsx**: Es el punto de entrada de la aplicación. Renderiza el componente `App` en el DOM.
