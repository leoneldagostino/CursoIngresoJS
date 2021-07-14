/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let f,
    c;

    f=parseInt(document.getElementById("txtIdTemperatura").value);

    c=f-32;

    alert(`la temperatura son ${c} grados centigrados`);
}

function CentigradosFahrenheit () 
{
    let f,
    c;

    c=parseInt(document.getElementById("txtIdTemperatura").value);

    f=c+32;

    alert(`La temperatura son ${f} grados fahrenheit`);
}
