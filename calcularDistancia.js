//debo tener cuidado con el orden  como llamo las variables
let calcularDistancia=(x1,y1,x2,y2)=>(Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1), 2)))
    
//llamado a la función template literal o concatenación por referencia
let distancia=calcularDistancia(5,6,-15,-20)
let resultado=distancia.toFixed([2])
console.log(`La distancia calculada es ${resultado}`)