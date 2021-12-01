module.exports = {
    /**
     * Suma de dos numeros
     * @example
     * num1 = 4, num2 = 2, => resultado = 6
     * @param {*} num1 Numero 1 de la suma 
     * @param {*} num2 Numero 2 de la suma
     */
    suma: function (num1, num2){
        return (this.esNumero(num1, num2) ? `EL resultado de sumar ${num1} + ${num2} es ${num1 + num2}` : this.mensajeError()) 
    },
    /**
     * Resta de dos numeros
     * @example
     * num1 = 4, num2 = 2, => resultado = 2
     * @param {*} num1 Numero 1 de la resta 
     * @param {*} num2 Numero 2 de la resta
     */
    resta: function (num1, num2){
        return (this.esNumero(num1, num2) ? `EL resultado de restar ${num1} - ${num2} es ${num1 - num2}` : this.mensajeError()) 
    },
    /**
     * Multiplicacion de dos numeros
     * @example
     * num1 = 4, num2 = 2, => resultado = 8
     * @param {*} num1 Numero 1 de la multiplicacion 
     * @param {*} num2 Numero 2 de la multiplicacion
     */
    multiplicacion: function (num1, num2){
        return(this.esNumero(num1, num2) ? `EL resultado de multiplicar ${num1} * ${num2} es ${num1 * num2}` : this.mensajeError() ) 
    },
    /**
     * Division de dos numeros
     * @example
     * num1 = 4, num2 = 2, => resultado = 2
     * @param {*} num1 Numero 1 de la division 
     * @param {*} num2 Numero 2 de la division
     */
    division: function (num1, num2){
        return (this.esNumero(num1, num2) ? `EL resultado de dividir ${num1} / ${num2} es ${num1 / num2}` : this.mensajeError()) 
    },
    /**
     * Mensaje de error que se ejecuta cuando no tengamos valores numericos
     */
    mensajeError: function() {
        console.log('Uno o los dos valores que se han introducido no son numeros')
    },
    /**
     * Comprueba que los valores ingresados sean numericos
     * @param {*} num1 
     * @param {*} num2 
     * @returns 
     */
    esNumero: function (num1, num2) {
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            return false
        }
        return true
    }
}