/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//declaracion de variables
	let importe;
	let descuento;
	let importeConDescuento;

	//toma de datos
	importe=parseInt(document.getElementById("txtIdImporte").value);

	//operaciones
	descuento=importe*0.25;

	//motrardescuento 
	importeConDescuento=importe-descuento;
	document.getElementById("txtIdResultado").value=importeConDescuento;

}
