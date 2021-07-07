/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
  let numeroUno;
  let numeroDos;
  let suma; 

  numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
  numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

  //operacion de suma
  suma = numeroUno + numeroDos;
	/*otra forma 
	suma=parseInt(numeroUno)+parseInt(numeroDos)
	*/
  //mostramos resultado
  alert("la suma es " + suma);
}
