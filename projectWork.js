class Books{
    constructor(format){
        this._format = format
    }
    get format(){
        return this._format
    }
    sayInfo(){
        console.log(`this book is in ${this._format} format!`)
    }
}

class Type extends Books{
    constructor(format,name,type,author){
        super(format)
        this._name = name
        this._type = type
        this._author = author
    }
    get name(){
        return this._name
    }
    get type(){
        return this._type
    }
    get author(){
        return this._author
    }
    sayInfo(){
        console.log(`The name of this book is ${this._name}, the author  ${this._author}, the type is ${this._type} and the format is ${this._format} `)
    }
}
class Philosophy extends Type{
    constructor(format,name,type,author,intro){
        super(type, author, format, name)
        this._intro = intro
    }
    get intro(){
        return this._intro
    }
    sayInfo(){
        console.log(`this is a book of philosophy, you win ${this._intro} coins for pick  ${this._name} from him/her ${this._author}`)
    }
}
let elBanquete = new Books('traditional')
let principito = new Type('electronic', 'principito','novel','saint-exupery')
let leviatan = new Philosophy('electronic','leviatan', 'novel', 'hobbes', 500)

let listOfBooks = [elBanquete,principito,leviatan]

for(person of listOfBooks){
    person.sayInfo()
}