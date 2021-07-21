/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave =prompt("Ingrese su clave. ");

	while(clave != "utn750" ){
		clave = prompt("clave invalida. Reingrese clave:");
	}

	alert("clave correcta!!");
}
