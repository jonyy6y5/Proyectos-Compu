    function control(){
let cant = document.getElementById("cant");
let nom = document.getElementById("nom");
let tm = document.querySelector('input[name="tm"]:checked')

let cantidad = parseInt(cant.value)
let total = parseInt(tm.dataset.precio)

const extra = document.querySelectorAll('input[name="extra"]:checked')
let Extras = "";
extra.forEach(extra => {
    Extras+= extra.value + " ";
    total+=parseInt(extra.dataset.precio)
})
total = total * cantidad
 alert("Nombre del cliente: "+ nom.value + "\ncantidad de cafes: " + cant.alue + "\nTamaño de cafe elegido: "+ tm.value + "\nExtras elejidos: "+Extras + "\nTotal de pago: " + total) ;
    }

    