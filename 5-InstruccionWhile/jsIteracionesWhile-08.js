/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{/*
	let respuesta,
	numero,
	acumuladorPositivos=0;
	acumuladoNegativos=1;
	flag=0;

	do{
		numero=parseInt(prompt("Ingrese un numero: "));

		if (numero > 0){
			acumuladorPositivos=numero+acumuladorPositivos;
		}
		else{
			acumuladoNegativos*=numero;
			flag=1;
		}

		respuesta=prompt("Quiere ingresar otro numero? ");
	}while(respuesta=='s');	

	if(flag==0){
		acumuladoNegativos=0;
	}

	document.getElementById("txtIdSuma").value=acumuladorPositivos;
	document.getElementById("txtIdProducto").value=acumuladoNegativos;
	*/
	let nota;
	nota=parseInt(prompt("ingrese una nota (0-10)"))
	while(nota < 0 || nota >10 || isNaN(nota)){
		nota=parseInt("ingrese un numero boludo");
	}

	

} //FI N DE LA FUNCIÓN