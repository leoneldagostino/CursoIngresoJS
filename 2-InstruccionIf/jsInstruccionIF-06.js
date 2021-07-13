function mostrar()
{
	let edad;

	edad=parseInt(document.getElementById("txtIdEdad").value);

	if(edad > 17){
		alert("La persona es mayor de edad");
	}
	else if ( edad >12 ){
		alert("la persona es adolescente");
	}
	else{
		alert("la persona es un niño ")
	}
	


}//FIN DE LA FUNCIÓN