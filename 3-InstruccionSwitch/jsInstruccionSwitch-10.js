function mostrar()
{
	let estacion,
	destino;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			if (destino =="Bariloche"){
			alert("Se viaja");
			}
			else {
			alert("No se viaja");
			}
			break
		case "Verano":
			if(destino=="Mar del plata" || destino=="Cataratas"){
				alert("Si se viaja");
			}
			else{
				alert("No se viaja");
			}
			break
		case "Otoño":
			alert("Si se viaja");
			break
		case "Primavera":
			if (destino=="Bariloche"){
				alert("No se viaja");
			}
			else{
				alert("Si se viaja");
			}
	}
}//FIN DE LA FUNCIÓN