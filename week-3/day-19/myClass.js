class Person{
    constructor(name , age)
    {
        this.name = name;
        this.age = age;
    }
  
    greet()
    {
        return console.log(`Hello ${this.name}`);
    }


}

let person = new Person("Suraj" , 20);
person.greet()