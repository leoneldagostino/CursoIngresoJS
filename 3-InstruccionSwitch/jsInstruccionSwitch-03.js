function mostrar()
{
	let mes;

	mes=document.getElementById("txtIdMes").value;

	switch(mes){
		case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "agosto":
		case "septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Este mes tiene 30 dias o mas dias ");
		break

		case "Febrero":
			alert("este mes tiene 28 dias");
		break
	}
	


}//FIN DE LA FUNCIÓN