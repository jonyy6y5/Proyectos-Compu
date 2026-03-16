let formulario=document.getElementById("form1")
    formulario.addEventListener('submit',function(event){
        event.preventDefault();
        let foData = new FormData (formulario);
        let d1 = foData.get("dato1")
        let d2 = foData.get("dato2")
        let d3 = foData.get("dato3")
    
console.log("Dato 1:" + d1 + "\nDato 2:" + d2 + "\nDato 3:" + d3)
    
let resta = d2 - d3;

    if (resta > d1) {
        ms= "\nLa resta es mayor que el primer numero";
    } else if (resta < d1) {
        ms = "\nLa resta es menor que el primer número";
    }

  
    alert("Resultado de la resta es  : " + resta + ms);

});
