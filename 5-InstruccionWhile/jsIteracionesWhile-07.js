/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let suma;
	let promedio;
	let numero;
	let seguir;
	let anotador=0;
	let contador=0;

	do{
		numero=parseInt(prompt("Ingrese un numero: "));
		contador++;
		anotador=anotador + numero;
		seguir=prompt("Desea ingresar otro numero? ");

	}while(seguir=='s');

	suma=anotador;
	promedio=anotador/contador;

	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=promedio;
	
}//FIN DE LA FUNCIÓN