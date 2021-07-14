function mostrar()
{
	let destino;
	 
	destino=document.getElementById("txtIdDestino").value;
/*
	switch(destino){
		case "Bariloche":
			alert(`${destino} se encuentra al oeste de argentina`);
		break
		case "Cataratas":
			alert(`${destino} se encuentra al norte de argentina`);
		break
		case "Mar del plata":
			alert(`${destino} se encuentra al este de argentina`);
		break
		case "Ushuaia":
			alert(`${destino} se encuentra al sur de argentina`);
		
	}*/

	if (destino == "Bariloche"){
		alert(`${destino} se encuentra al oeste de argentina`);
	}
	else if (destino == "Cataratas"){
		alert(`${destino} se encuentra al norte de argentina`);
	}
	else if (destino == "Mar del plata"){
		alert(`${destino} se encuentra al este de argentina`);
	}
	else if (destino == "Ushuaia"){
		alert(`${destino} se encuentra al sur de argentina`);
	}

}//FIN DE LA FUNCIÓN