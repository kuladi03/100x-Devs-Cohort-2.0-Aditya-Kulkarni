class Animal{
    constructor(name , legCount){
        this.name = name;
        this.legcount = legCount;
    }
    describe(){
        return `${this.name} has ${this.legcount} legs`;
    }
}

let dog = new Animal("Dog",4,"Bhow");
console.log(dog.describe());
console.log(dog.Speak());