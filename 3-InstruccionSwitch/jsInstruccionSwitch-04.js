function mostrar()
{
	let mes;

	mes=document.getElementById("txtIdMes").value;
	
		switch(mes){
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 30 dias");
		break

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 31 dias ");
			break
		default:
			alert("este mes tiene 28 dias ");
		
	}
	
	



}//FIN DE LA FUNCIÓN