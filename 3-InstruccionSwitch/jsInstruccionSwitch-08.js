function mostrar()
{
	let destino;

	destino=document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			alert(`En ${destino} hace frio`);
		break
		case "Cataratas":
		case "Mar del plata":
			alert(`En ${destino} hace calor`);
	}

	if(destino == "Bariloche" || destino == "Ushuaia"){
		alert(`En ${destino} hace frio`);
	}
	else{
		alert (`En ${destino} hace calor`);
	}
}//FIN DE LA FUNCIÓN