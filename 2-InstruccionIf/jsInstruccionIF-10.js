function mostrar()
{
	let nota,
	max,
	min;

	max=10
	min=1
	nota=Math.floor(Math.random()*(max-min+1)+min);

	if(nota >= 9 ){
		alert(`${nora}; excelente`);
	}
	else if(nota >= 4){
		alert(`${nota}; Aprobado`);
	}
	else{
		alert(`${nota}; Vamos que la proxima se puede`);
	}

}//FIN DE LA FUNCIÓN