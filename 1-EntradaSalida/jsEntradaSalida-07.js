/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
  let numeroUno;
  let numeroDos;
  let suma;

  numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
  numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

  //operacion de suma
  suma = numeroUno + numeroDos;

  //mostramos resultado
  alert("la suma es " + suma);
}

function restar() {
  let numeroUno;
  let numeroDos;
  let resta;

  numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
  numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

  //operacion de resta
  resta = numeroUno - numeroDos;

  //mostramos resultado
  alert("la resta es " + resta);
}

function multiplicar() {
  let numeroUno;
  let numeroDos;
  let multiplacion;

  numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
  numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

  //operacion de resta
  multiplacion = numeroUno * numeroDos;

  //mostramos resultado
  alert("la multiplicacion es " + multiplacion);
}

function dividir() {
  let numeroUno;
  let numeroDos;
  let division;

  numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
  numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

  //operacion de resta
  division = numeroUno / numeroDos;

  //mostramos resultado
  alert("la division es " + division);
}
