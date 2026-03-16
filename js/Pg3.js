function calcular(){
let paraelprimernum = parseFloat(document.getElementById('nm1').value); 
let paraelsegdnum = parseFloat(document.getElementById('nm2').value); 
let operacionn = document.querySelector('input[name="ope"]:checked')

let resultado
if (!operacionn) {
    alert("Elije la operación");
    return;
}


if (operacionn.value =='sumaa') {
    resultado = paraelprimernum + paraelsegdnum;
}
 else if (operacionn.value == 'rees') {
    resultado = paraelprimernum - paraelsegdnum;

    if (resultado < 0){
        alert("No se puede restar numeros negativos")
        return;
    }
}
else if (operacionn.value == 'multii') {
    resultado = paraelprimernum * paraelsegdnum;
}
else if (operacionn.value == 'div') {
    if ( paraelsegdnum ==0){
        alert("Error no puedes dividir entre 0")
        return;
    }
    resultado = paraelprimernum / paraelsegdnum;
}
 alert("El resultado es : "+ resultado)
}

