function mostrar()
{
	let edad;
	let EstadoCivil;

	edad=parseInt(document.getElementById("txtIdEdad").value);
	EstadoCivil=document.getElementById("estadoCivil").value;

	if(edad > 17 && EstadoCivil == "Soltero"){
		alert("Es soltero y no es menor");
	}
	


}//FIN DE LA FUNCIÓN