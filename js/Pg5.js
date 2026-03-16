let formulario=document.getElementById("form1")

let miA= []
    formulario.addEventListener('submit',function(event){
        event.preventDefault();
        let foData = new FormData (formulario);
        let d1 = foData.get("dato1")
        
        miA.push(d1)
        
        
    
console.log( miA)


});

function buscar() {
    let textoBusqueda = document.getElementById("busqueda").value;

    if (miA.includes(textoBusqueda)) {
        console.log(textoBusqueda + " SÍ existe en el arreglo");
    } else {
        console.log(textoBusqueda + " NO existe en el arreglo");
    
        }
    }