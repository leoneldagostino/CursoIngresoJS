function mostrar()
{
	let edad;
	 
	edad=parseInt(document.getElementById("txtIdEdad").value);

	if(edad >17	){
		alert("la persona es mayor de edad");
	}
	else{
		alert("la persona es menor de edad");
	}
}//FIN DE LA FUNCIÓN