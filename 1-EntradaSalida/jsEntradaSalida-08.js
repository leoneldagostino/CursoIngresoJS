/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
  let numeroDividendo;
  let numeroDivisor;
  let resto;

  numeroDividendo = document.getElementById("txtIdNumeroDividendo").value;
  numeroDivisor = document.getElementById("txtIdNumeroDivisor").value;

  resto = numeroDividendo % numeroDivisor;

  //muestro resultado
  alert("El resto es " + resto);
}
