var password = prompt("Ingresa la contraseña.");

if (password !== "12345") {
  alert('Contraseña incorrecta.');
  setTimeout(function() {
    window.history.back(); // Redirigir a la página anterior (index.html)
  });
  window.history.back();
} else {
  // Mostrar el contenido oculto
  document.getElementById("contenido-oculto").style.display = "block";
  alert('Contraseña correcta. Acceso permitido.');
}
