class Mammal {      // Parent class
    constructor(name){      // Constructor of parent class
        this.name = name;       // Property of parent class
        this.type = "warm-blooded";     // Property of parent class
    }
    eat(){      // Method of parent class
        console.log("I am eating food");
    }
} 

class Dog extends Mammal{       // Child class
    constructor(name){          // Constructor of child class
        super(name);        // Calls the constructor of parent class
        this.legs = 4;      // Property of child class
    }
    bark(){     // Method of child class
        console.log("Woof Woof");
    }
}

class Cat extends Mammal{       // Child class
    constructor(name){      // Constructor of child class
        super(name);        // Calls the constructor of parent class
        this.legs = 4;      // Property of child class
    }
    meow(){     // Method of child class
        console.log("Meow Meow");       
    }
}
