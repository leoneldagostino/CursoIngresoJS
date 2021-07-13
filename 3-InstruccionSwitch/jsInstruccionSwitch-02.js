function mostrar()
{
	let mes;

	mes=document.getElementById("txtIdMes").value;
/*
	switch(mes){
		case "Enero":
			alert("aun falta para invierno");
			break;
		case "Febrero":
			alert("aun falta para invierno");
			break;
		case "Marzo":
			alert("aun falta para invierno");
			break;
		case "Abril":
			alert("aun falta para invierno");
			break;
		case "Mayo":
			alert("aun falta para invierno");
			break;
		case "Junio":
			alert("aun falta para invierno");
			break;
		case "Julio":
			alert("Abrigate que hace frio");
			break;
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		case "Septiembre":
			alert("Ya pasamos el frio, ahora hace calor");
			break;
		case "Octubre":
			alert("Ya pasamos el frio, ahora hace calor");
			break;
		case "Noviembre":
			alert("Ya pasamos el frio, ahora hace calor");
			break;
		case "Diciembre":
			alert("Ya pasamos el frio, ahora hace calor");
			break;
		}
*/

	if(mes =="Enero" || mes=="Febrero" || mes=="Marzo" || mes=="Abril" || mes=="Mayo" || mes=="Junio"){
		alert("Falta para el invierno");
	}
	else if(mes == "Julio" || mes == "Agosto"){
		alert("Estamos en invierno,Abrigate");
	}
	else {
		alert("ya pasamos el frio,ahora hace calor");
	}
}//FIN DE LA FUNCIÓN