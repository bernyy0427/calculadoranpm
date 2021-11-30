module.exports = {
    /**
     * Suma de dos numeros
     * @example
     * num1 = 4, num2 = 2, => resultado = 6
     * @param {*} num1 Numero 1 de la suma 
     * @param {*} num2 Numero 2 de la suma
     */
    suma: function (num1, num2){
        return `EL resultado de sumar ${num1} + ${num2} es ${num1 + num2}`
    },
    /**
     * Resta de dos numeros
     * @example
     * num1 = 4, num2 = 2, => resultado = 2
     * @param {*} num1 Numero 1 de la resta 
     * @param {*} num2 Numero 2 de la resta
     */
    resta: function (num1, num2){
        return `EL resultado de restar ${num1} - ${num2} es ${num1 - num2}`
    },
    /**
     * Multiplicacion de dos numeros
     * @example
     * num1 = 4, num2 = 2, => resultado = 8
     * @param {*} num1 Numero 1 de la multiplicacion 
     * @param {*} num2 Numero 2 de la multiplicacion
     */
    multiplicacion: function (num1, num2){
        return`EL resultado de multiplicar ${num1} * ${num2} es ${num1 * num2}`
    },
    /**
     * Division de dos numeros
     * @example
     * num1 = 4, num2 = 2, => resultado = 2
     * @param {*} num1 Numero 1 de la division 
     * @param {*} num2 Numero 2 de la division
     */
    division: function (num1, num2){
        return `EL resultado de dividir ${num1} / ${num2} es ${num1 / num2}`
    }
}