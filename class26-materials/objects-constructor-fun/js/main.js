//Create a constructor with 4 properties and 3 methods
class MakePizza {
    constructor(pizzaSize, pizzaFlavor, pizzaMasa, pizzaCrust) {
        this.size = pizzaSize
        this.flavor = pizzaFlavor
        this.masa = pizzaMasa
        this.crust = pizzaCrust
    }
    crunch = function () {
            console.log('its crunchy!!')
        }
    smelss = function () {
            alert('smells so good')
        }
    frisbee = function () {
            console.log('fkldjalñfks')
        }
    }

let peperoni = new MakePizza('xxl', 'peperoni', 'thin', 'stuffed')