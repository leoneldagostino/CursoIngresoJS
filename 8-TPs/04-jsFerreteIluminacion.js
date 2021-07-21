/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let precioComun;
    let marcaLampara;
    let precioDescuento;
    let compraCantidad;
    let precioSinDescuento;

    
    precioComun=parseInt(35);
    marcaLampara=document.getElementById("Marca").value;
    compraCantidad=parseInt(document.getElementById("txtIdCantidad").value);
    precioSinDescuento=precioComun*compraCantidad;

    if(compraCantidad >= 6){
        precioDescuento = precioSinDescuento - precioSinDescuento * 0.50;
        document.getElementById("txtIdPrecioDescuento").value=precioDescuento;
    }
    switch(compraCantidad){
        case 5:
            if(marcaLampara=="ArgentinaLuz"){
                precioDescuento=precioComun * compraCantidad -precioComun*0.4;
                document.getElementById("txtIdPrecioDescuento").value=precioDescuento;
            }
            else{
                precioDescuento=precioComun * compraCantidad -precioComun*0.3;
                document.getElementById("txtIdPrecioDescuento").value=precioDescuento;
            }
            break
        case 4:
            if(marcaLampara=="ArgentinaLuz" || marcaLampara=="FelipeLamparas"){
                precioDescuento=precioComun * compraCantidad -precioComun*0.25;
                document.getElementById("txtIdPrecioDescuento").value=precioDescuento;
            }
            else{
                precioDescuento+precioComun * compraCantidad -precioComun*0.20;
                document.getElementById("txtIdPrecioDescuento").value=precioDescuento;
            }
            break
        case 3:
            if(marcaLampara=="ArgentinaLuz"){
                precioDescuento=precioComun * compraCantidad -precioComun*0.15;
                document.getElementById("txtIdPrecioDescuento").value=precioDescuento;
            }
            else if(marcaLampara=="FelipeLamparas"){
                precioDescuento=precioComun * compraCantidad -precioComun*0.10;
                document.getElementById("txtIdPrecioDescuento").value=precioDescuento;
            }
            else{
                precioDescuento=precioComun * compraCantidad -precioComun*0.5;
                document.getElementById("txtIdPrecioDescuento").value=precioDescuento;
            }
            break
        case 2:
        case 1:
            precioDescuento=precioSinDescuento;
            document.getElementById("txtIdPrecioDescuento").value=precioDescuento;
    }
    
    if(precioDescuento>120){
        let impuesto;
        let precioConImpuesto;

        impuesto=precioDescuento*10/100;
        precioConImpuesto= precioDescuento+impuesto;

        alert(`Usted pago ${impuesto} de IIBB`);

    }
    //alert(`Usted pago ${precioDescuento} por ${compraCantidad} lamparas de ${marcaLampara} `)
    

     
}
