//Declaro la función principal
function recibirSables(n1, n2, n3, n4, n5,n6, n7,n8, n9, n10,n11, n12,n13,n14,n15,n16,n17,n18,n19,n20, callback){
    //proceso de la función principal
        setTimeout (function(){
    //proceso que hace la función 
            let sable=[n1, n2, n3, n4, n5,n6, n7,n8, n9, n10,n11, n12,n13,n14,n15,n16,n17,n18,n19,n20]
            let sablesFiltrados=sable.filter(function(sable){
                return (sable>=1 && sable<=20)
            })
            //llamo al callback
            callback(sablesFiltrados)
        },1000)
}

//llamando la función principal
recibirSables(100,50,10,150,17,25,5,40,30,16,19,12, 48, 50,5,7,14, 60, 58,30, function(sablesFiltrados){
    if (sablesFiltrados.length<20){
        console.log("Hay " + sablesFiltrados.length  +  " sables menores de 20 Joules ")
    }
    else{
        console.log("No hay sables con energía menor a 20 Joules")
    }
})
