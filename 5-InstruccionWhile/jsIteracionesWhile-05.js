/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo = prompt("ingrese f ó m .").toLowerCase();

	//while(sexo != 'f' && sexo != 'm'){

	while(!(sexo == 'f' || sexo == 'm')){
		sexo = prompt("Dato invalido. Ingrese f o m.").toLowerCase();
	}
	
	document.getElementById("txtIdSexo").value=sexo;
}