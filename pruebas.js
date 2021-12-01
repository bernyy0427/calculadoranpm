const mod = require('.')


console.log(mod.suma(2, 8))
console.log(mod.suma('a', 8))
console.log(mod.suma(2, 'b'))
console.log(mod.suma(true, 'b'))

console.log(mod.resta(80, 50))
console.log(mod.resta('a', 50))
console.log(mod.resta('a', false))

console.log(mod.multiplicacion(3, 7))
console.log(mod.multiplicacion('a', false))

console.log(mod.division(15, 3))
console.log(mod.division('c', 2))



