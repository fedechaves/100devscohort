class Animal{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }    
}
class Cat extends Animal{
    constructor(name, breed){
        super(name)
        this._breed = breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} miaus`)
    }
}

class Duck extends Animal{
    constructor(name, type){
        super(name)
        this._type = type
    }
    get type(){
        return this._type
    }
    speak(){
        super.speak()
        console.log(`${this.name} cuacks`)
    }
}