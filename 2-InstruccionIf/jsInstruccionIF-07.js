function mostrar()
{
	let edad;
	let EstadoCivil;

	edad=parseInt(document.getElementById("txtIdEdad").value);
	EstadoCivil=document.getElementById("estadoCivil").value;

	if(edad < 18 && EstadoCivil != "Soltero"){
		alert("es muy chico para no ser soltero")
	}
	


}//FIN DE LA FUNCIÓN