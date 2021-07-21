/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()/*
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;*/
{

	let numero,
	numMax,
	numMin,
	respuesta;
	flag=1

	do{
		numero=parseInt(prompt("Ingrese el numero que quiere ingresar: "));


		respuesta=prompt("Quiere ingresar otro numero?");
	}while(respuesta=='s');




}//FIN DE LA FUNCIÓN
