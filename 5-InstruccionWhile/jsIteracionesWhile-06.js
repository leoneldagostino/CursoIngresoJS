function mostrar()
{
	let numero,
	contador,
	acumulador;


	contador=0

	while(contador < 5){
		console.log("el contador ahora vale"+ contador);
		contador++;
		numero=parseInt(prompt("ingrese el primer numero:"));
		acumulador+=numero;//o acumulador=acumulador+numero; 


	}
	
	let promedio=acumulador/contador;

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;
	
	
	
	
	
	
	/*
	let suma,
	promedio,
	numero,
	numero1,numero2,numero3,numero4,numero5;

	numero=0;

	while(// condicion ) {
		numero1=parseInt(prompt("Ingrese un numero:"));
		

	}
	
	numero2=parseInt(prompt("Ingrese un numero:"));
	numero3=parseInt(prompt("Ingrese un numero:"));
	numero4=parseInt(prompt("Ingrese un numero:"));
	numero5=parseInt(prompt("Ingrese un numero:"));


	suma=numero1+numero2+numero3+numero4+numero5;
	promedio=suma/5;
	
	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=promedio;
	*/

	
}
//FIN DE LA FUNCIÓN