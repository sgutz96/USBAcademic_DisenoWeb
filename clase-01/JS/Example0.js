console.log("Hello World");

document.getElementById("Ejemplo1").innerHTML = "Hola Mundo desde JS";

var a = 5;
let b = 10;
const c = 15;
//const c = 20; // This will cause an error because 'c' is a constant and cannot be reassigned.
console.log(a);
console.log(b);
console.log(c);

function suma(x, y) {
    return x + y;
}
console.log(suma(a, b));

let resultado = suma(20, 30);
console.log(resultado);