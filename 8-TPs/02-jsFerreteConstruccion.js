/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo,
    calculo,
    ancho;


    largo=document.getElementById("txtIdLargo").value;
    ancho=document.getElementById("txtIdAncho").value;

    calculo=(ancho*largo) * 3;

    alert(`Se debe comprar ${calculo} metros de hilo`);

}
function Circulo (){

    let radioTerreno,
    calculo;

    radioTerreno=parseInt(document.getElementById("txtIdRadio").value);
    calculo=radioTerreno*3;


    alert(`La cantidad a comprar es de ${calculo} metros`);
}
function Materiales () 
{

    let cal,
    cemento,
    largoTerreno,
    anchoTerreno,
    calculoTerrenoAncho,
    calculoBolsaCal,
    calculoBolsaCemento;

    largoTerreno=parseInt(document.getElementById("txtIdLargo").value);
    anchoTerreno=parseInt(document.getElementById("txtIdAncho").value);
    cal =3 ;
    cemento = 2;
	
    calculoTerrenoAncho=largoTerreno*anchoTerreno;
    calculoBolsaCal=calculoTerrenoAncho*cal;
    calculoBolsaCemento=calculoTerrenoAncho*cemento;

    alert(`Se nesecita ${calculoBolsaCal} bolsas de cal y ${calculoBolsaCemento} bolsas de cemento para los ${calculoTerrenoAncho} metros del terreno `);
}