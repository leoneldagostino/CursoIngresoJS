function mostrar() {
  let edad;

  edad = parseInt(document.getElementById("txtIdEdad").value);

  if (edad > 12 ) {
    if (edad <= 17) {
      alert("la persona es un adolescente");
    }
  }
} //FIN DE LA FUNCIÓN
