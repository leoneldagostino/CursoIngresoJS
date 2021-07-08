/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let mostrarSuma;

    precioUno=parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos=parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres=parseInt(document.getElementById("txtIdPrecioTres").value);

    //mostrar suma
    mostrarSuma= precioUno+precioDos+precioTres;
    alert(`la suma de los precio da: ${mostrarSuma} `);
}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let mostrarPromedio;

    precioUno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres=parseFloat(document.getElementById("txtIdPrecioTres").value);
	
    //mostrar promedio
    mostrarPromedio=(precioUno+precioDos+precioTres)/3;
    alert(`el promedio de los precios es ${mostrarPromedio}`);
}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaDePrecios;
    let iva;
    let precioMasIva;

    precioUno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres=parseFloat(document.getElementById("txtIdPrecioTres").value);
    sumaDePrecios=precioUno+precioDos+precioTres;
    iva=(precioUno+precioDos+precioTres)*21/100;

    //mostrar precio final
    precioMasIva=sumaDePrecios+iva;
    alert(`El precio final de los productos es ${precioMasIva}`);

}