/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let contado=0;
	let numero;
	let numerosPositivos=0;
	let numeroNegativos=1;
	let sumaNegativos;
	let sumaPositivos;
	let cantidadPositivos;
	let cantidadNegativos;
	let flag=1
	let numerosPares;
	let cantidadCeros;
	let promediosPositivos;
	let promediosNegativos;
	let respuesta;
	let diferenciaPositivosNegativos
	
	do{

		numero=parseInt(prompt("Ingrese un numero: "));
		if(numero > 0){
			numerosPositivos+=numero;
			sumaPositivos=numerosPositivos;
		}
		else{
			numeroNegativos-=numero;
			sumaNegativos=numeroNegativos;
			flag=0;
		}
		if(flag){
			numeroNegativos=0;
		}


		respuesta=prompt("Usted quiere ingresar otro numero? ");
	}while(respuesta=='s');

	document.write("Suma de nros positivos: "+sumaPositivos+", Suma de los nros negativos: " +sumaNegativos);



}//FIN DE LA FUNCIÓN