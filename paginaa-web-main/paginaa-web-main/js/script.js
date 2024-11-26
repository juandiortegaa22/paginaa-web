const productos = [
    { 
        nombre: "Jabón Ecológico", 
        descripcion: "Jabón hecho con ingredientes 100% naturales.", 
        precio: "$670", 
        imagen: "https://images.hola.com/imagenes/estar-bien/20180822128758/jabon-eco-para-la-piel-medioambiente/0-593-740/jabon-casero-t.jpg", 
        contacto: "https://business.whatsapp.com/products/business-app?lang=es_LA"
    },
    { 
        nombre: "Bolsa Reutilizable", 
        descripcion: "Bolsa fabricada con materiales reciclados.", 
        precio: "$700", 
        imagen: "https://impresionesvalencia.com/wp-content/uploads/2019/05/52A0336.jpg", 
        contacto: "https://business.whatsapp.com/products/business-app?lang=es_LA"
    },
    { 
        nombre: "Cepillo de Bambú", 
        descripcion: "Cepillo de dientes biodegradable.", 
        precio: "$550", 
        imagen: "https://veraly.mx/wp-content/uploads/Cepillo-de-Dientes-Ecol%C3%B3gico-de-Bamb%C3%BA-Biodegradable-para-Ni%C3%B1os-2.jpg", 
        contacto: "https://business.whatsapp.com/products/business-app?lang=es_LA"
    },
    {
        nombre: "Botella de Acero Inoxidable",
        descripcion: "Botella reutilizable de acero inoxidable para reducir el uso de plásticos.",
        precio: "$4360",
        imagen: "https://i.etsystatic.com/27447304/r/il/120343/2875825309/il_1140xN.2875825309_9mee.jpg",
        contacto: "https://business.whatsapp.com/products/business-app?lang=es_LA"
    },
    {
        nombre: "Pajillas de Bambú",
        descripcion: "Pajillas hechas de bambú, 100% biodegradables.",
        precio: "$400",
        imagen: "https://www.karu.com.py/storage/productos/614001605115900.jpg",
        contacto: "https://business.whatsapp.com/products/business-app?lang=es_LA"
    },
    {
        nombre: "Esponja Vegetal",
        descripcion: "Esponja biodegradable hecha de fibras vegetales.",
        precio: "$400",
        imagen: "https://www.decoloresnatur.com/wp-content/uploads/2021/03/esponja-vegetal-de-luffa-decolores-natur.jpg",
        contacto: "https://business.whatsapp.com/products/business-app?lang=es_LA"
    },
    {
        nombre: "Bolsa para Frutas",
        descripcion: "Bolsa de tela para almacenar frutas y verduras, reutilizable.",
        precio: "$620",
        imagen: "https://tesorotico.com/wp-content/uploads/2020/04/SetVerdurasFrutas2.jpg",
        contacto: "https://business.whatsapp.com/products/business-app?lang=es_LA"
    }
];

function cargarProductos() {
    const lista = document.getElementById('productos-lista');
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p><strong>Precio: ${producto.precio}</strong></p>
            <a href="${producto.contacto}" target="_blank" class="btn-whatsapp">Comprar por WhatsApp</a>
        `;
        lista.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', cargarProductos);

// JavaScript para manejar los modales de inicio de sesión y registro
document.getElementById("loginLink").onclick = function () {
    document.getElementById("loginModal").style.display = "block";
};

document.getElementById("registerLink").onclick = function () {
    document.getElementById("registerModal").style.display = "block";
};

document.getElementById("closeLogin").onclick = function () {
    document.getElementById("loginModal").style.display = "none";
};

document.getElementById("closeRegister").onclick = function () {
    document.getElementById("registerModal").style.display = "none";
};

// Cerrar el modal al hacer clic fuera de él
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
};
