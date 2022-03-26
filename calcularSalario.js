//Declaro la función principal
function calcularSalario (navVendidas){
 //proceso de la función principal
     //proceso que hace la función 
            let salario=3500000    
            let comision=navVendidas*1500000
            let deduccion= 0.05
            let descuento=comision*deduccion
            let total=salario+comision-descuento

            return total    
}
let netoPagar=calcularSalario(3)
console.log(netoPagar)

//función flecha 
let pagarventas=navVendidas1=> nomina=3500000 +((1500000*navVendidas1)-(1500000*navVendidas1) * 0.05)

console.log(pagarventas(3))