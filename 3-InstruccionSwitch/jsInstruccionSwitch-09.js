function mostrar()
{
	let estacion,
	destino,
	precio=15000;
	let precioFinal;
	
	destino=document.getElementById("txtIdDestino").value;
	estacion=document.getElementById("txtIdEstacion").value;

	if (estacion=="Invierno"){
		switch(destino){
			case "Bariloche":
				precioFinal=precio *20 /100 + precio;
				alert(` el costo de la estadia en ${destino} es de ${precioFinal}`);
				break

			case "Cataratas":
			case "Cordoba":
				precioFinal=precio - precio *0.10;
				alert(`El costo de la estadia en ${destino} es de ${precioFinal}`);
				break

			case "Mar del plata":
				precioFinal = precio - precio * .20;
				alert(`El costo de la estadia en ${destino} es de ${precioFinal}`);
		}
	}
	else if (estacion =="Verano"){
		switch(destino){
			case "Bariloche":
				precioFinal=precio - precio * .20;
				alert("el costo de la estadia "+precioFinal);
				break 
			case "Cataratas":
				precioFinal=precio * .10 + precio;
				
			case "Mar del plata":
			case "Cordoba":
		}
	}
/*
	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					let precioAumentado;
					precioAumentado=precio *20 / 100 + precio;
					alert(`El costo de la estadia en ${destino}es de ${precioAumentado}`);
					break
				case "Cataratas":
				case "Cordoba":
					let precioRebajado;
					precioRebajado=precio- precio*0.10;
					alert(`El costo de la estadia en ${destino} es de ${precioRebajado}`);
					break
				case "Mar del plata":
					precioRebajado=precio - precio *0.20;
					alert(`El costo de la estadia en ${destino} es de ${precioRebajado}`); 
			}
			break
		case "Verano":
			switch(destino){
				case "Bariloche":
					let precioRebajado;
					precioRebajado=precio - precio *0.20;
					alert (`El costo de la estadia en ${destino} es de ${precioRebajado}`);
					break
				case "Cataratas":
			}
					
			break
		case "Otoño":
		case "Primavera":

	}*/

}//FIN DE LA FUNCIÓN