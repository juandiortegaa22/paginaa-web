document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Credenciales guardadas
    const storedUsername = "Ortega";
    const storedPassword = "123456";

    // Datos ingresados
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Mensaje de error
    const errorMessage = document.getElementById("errorMessage");

    // Validación
    if (username === storedUsername && password === storedPassword) {
        errorMessage.style.display = "none"; // Ocultar el mensaje de error
        alert("Inicio de sesión exitoso. Redirigiendo...");
        window.location.href = "cargaProductos.html"; // Cambiado a cargaProductos.html
    } else {
        errorMessage.textContent = "Nombre de usuario o contraseña incorrectos.";
        errorMessage.style.display = "block"; // Mostrar el mensaje de error
    }
});
