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
				break

			case "Cataratas":
			case "Cordoba":
				precioFinal=precio - precio *0.10;
				break

			case "Mar del plata":
				precioFinal = precio - precio * .20;
		}
	}
	else if (estacion =="Verano"){
		switch(destino){
			case "Bariloche":
				precioFinal=precio - precio * .20;
				break 

			case "Cordoba":
			case "Cataratas":
				precioFinal=precio - precio * .10 ;
				break

			case "Mar del plata":
				precioFinal=precio * .20 + precio;
		}
	}
	else if (estacion=="Otoño" || estacion == "Primavera"){
		switch(destino){
			case "Bariloche":
			case "Cataratas":
			case "Mar del plata":
				precioFinal=precio * .10 + precio;
				break

			case "Cordoba":
				precioFinal= precio;
		}
	}
	alert(`el costo de la estadia en ${destino} es de ${precioFinal}`);


	
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