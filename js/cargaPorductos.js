document.addEventListener("DOMContentLoaded", () => {
    // Lista de productos
    const productos = [
        { id: 1, nombre: "Bolsa de algodón reutilizable", descripcion: "Ideal para compras ecológicas.", precio: 50, imagen: "https://etibolsa.es/wp-content/uploads/2020/08/bolsa-reutilizable-maqueta_23-2148473855.jpg" },
        { id: 2, nombre: "Botella de vidrio reciclado", descripcion: "Perfecta para agua y jugos.", precio: 150, imagen: "https://hablandoenvidrio.com/wp-content/uploads/2017/06/botellas-de-vidrio-con-simbolo-recilaje.jpg" },
        { id: 3, nombre: "Jabón artesanal", descripcion: "Hecho con ingredientes naturales.", precio: 40, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQSon92ZtIK5SPW41VY2DYU6iAvsldeHcmg&s" },
        { id: 4, nombre: "Cepillo de dientes de bambú", descripcion: "Alternativa ecológica al plástico.", precio: 25, imagen: "https://acdn.mitiendanube.com/stores/112/735/products/b0742ef4-73b2-4878-8071-5405642c8ce4_nube-640c840d9073bb4ef315870453414271-1024-1024.jpg" },
        { id: 5, nombre: "Envases de silicona", descripcion: "Para almacenar alimentos sin residuos.", precio: 120, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBuIKl8tnFey14Wzi7P5Sti0Jy4dixSjXRA&s" },
        { id: 6, nombre: "Pajitas reutilizables", descripcion: "Juego de acero inoxidable.", precio: 30, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYuWaiJ5WU2BkxVWxhtS7DIFOSQ3xCAQ97Q&s" },
        { id: 7, nombre: "Tazas de cerámica artesanal", descripcion: "Diseño único y ecológico.", precio: 80, imagen: "https://patriciainvernon.com/cdn/shop/files/taza-pellizco-flores-multicolor-manos.jpg?v=1682714639&width=1445" },
        { id: 8, nombre: "Eco-lápices de semillas", descripcion: "Lápices que se convierten en plantas.", precio: 15, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ67OgmZYJ9b3xxMdGCdwHV6uVh6rnS7NZBgA&s" },
        { id: 9, nombre: "Bolsa térmica reciclada", descripcion: "Mantén la comida fresca y ecológica.", precio: 100, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFboR1vk0niSKNt2vpewLdsu4f25A-wLI00w&s" },
        { id: 10, nombre: "Caja de bambú multiusos", descripcion: "Ideal para almacenamiento ecológico.", precio: 200, imagen: "https://http2.mlstatic.com/D_NQ_NP_978835-MLA74621470855_022024-O.webp" },
        { id: 11, nombre: "Cesta de mimbre reciclado", descripcion: "Hecha con materiales sostenibles.", precio: 90, imagen: "https://http2.mlstatic.com/D_NQ_NP_769019-MLA47701201888_092021-O.webp" },
        { id: 12, nombre: "Lámpara solar de jardín", descripcion: "Energía renovable para exteriores.", precio: 150, imagen: "https://http2.mlstatic.com/D_NQ_NP_925039-MLA73959480052_012024-O.webp" }
    ];

    const productosTableBody = document.getElementById("productosTableBody");

    // Cargar los productos al cargar la página
    productos.forEach(producto => agregarProducto(producto));

    function agregarProducto(producto) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>$${producto.precio}</td>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" width="50"></td>
            <td><button class="btn-eliminar" data-id="${producto.id}">Eliminar</button></td>
        `;
        productosTableBody.appendChild(row);

        const btnEliminar = row.querySelector(".btn-eliminar");
        btnEliminar.addEventListener("click", () => {
            const productoId = parseInt(btnEliminar.getAttribute("data-id"));
            eliminarProducto(productoId, row);
        });
    }

    function eliminarProducto(id, row) {
        productosTableBody.removeChild(row);

        // Enviar un mensaje para eliminar el producto de detalleProductos
        window.parent.postMessage({ type: "eliminarProducto", id }, "*");
    }
});
