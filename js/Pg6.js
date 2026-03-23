function Arreglo(){
    let orden= []
let nm1 = parseInt(document.getElementById("nm1").value)
let nm2 = parseInt(document.getElementById("nm2").value)
let nm3 = parseInt(document.getElementById("nm3").value)

orden.push(nm1, nm2, nm3)
console.log(orden)
return orden
}
function Mayor(){
 let may= Arreglo()  
 
 if (may[0] > may [1] && may[0]>may[2]){
        console.log("es mayor: " + may[0])
 }else if (may[1]> may[0] && may[1]> may[2]){
    console.log("Es mayor: "+may[1])
 }else if (may[2]>may[0] && may[2]>may[1]){
    console.log("Es mayor: "+may[2])
 }
         
}

