function mostrar()
{	
	let mes;

	mes=document.getElementById("txtIdMes").value;
/*
	if(mes == "Enero"){
		alert("que comiences bien el año");
	}
	else if(mes == "Marzo"){
		alert("a clases");
	}
	else if (mes == "Julio"){
		alert("se viene las vacaciones!!");
	}
	else if(mes == "Diciembre"){
		alert("Felices Fiestas!!");
	}
	*/

	/*switch(variable)
	case(casos) valor:
		...
		break;
	case valor:
		...
		break;->me saca del switch y continua 
	*/
	switch(mes){
		case "Enero":
			alert("Que empieces bien el año");
			break;
		case "Marzo":
			alert("A clases");
			break;
		case "Julio":
			alert("Se viene las vacaciones!!");
			break;
		case "Diciembre":
			alert("Felices Fiestas!!");
			break;
		}
}	
	


//FIN DE LA FUNCIÓN