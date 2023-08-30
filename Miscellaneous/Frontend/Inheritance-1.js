class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }
    talk(){
        console.log(`Hi, I am ${this.name} and I am in grade ${this.grade}`);
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
    talk(){
        console.log(`Hi, I am ${this.name} and I teach ${this.subject}`);
    }
}

