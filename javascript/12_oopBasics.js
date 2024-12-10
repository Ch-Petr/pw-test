// Terminálový příkaz na provolání scriptů:
// node examples/javascript/11_oopBasics.js

// Třídy + Vlastnosti + Metody
class Person {
    constructor(
        name,
        age
    ) {
        this.name = name; // Vlastnost
        this.age = age;   // Vlastnost
    }

    greet() { // Metoda
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("John", 25); // Vytvoření nového objektu
person1.greet(); // "Hello, my name is John and I am 25 years old."



// Dědičnost + Polymorfismus (Příklad s třídou "Person" definovanou v příkladu výše)
class Employee extends Person {
    constructor(
        name,
        age,
        jobTitle
    ) {
        super( name, age ); // Volání konstruktoru nadřazené třídy
        this.jobTitle = jobTitle; // Nová vlastnost
    }

    // Přepsání metody greet
    greet() {
        console.log(`Hello, I am ${this.name}, I work as a ${this.jobTitle}.`);
    }
}

const employee1 = new Employee("Alice", 30, "Software Developer");
employee1.greet(); // "Hello, I am Alice, I work as a Software Developer."



// Polymorfismus
class BankAccount {
    #balance = 0; // Privátní vlastnost

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        }
    }

    getBalance() {
        console.log(`Current balance: $${this.#balance}`);
    }
}

const account = new BankAccount();
account.deposit(100);
account.getBalance(); // "Current balance: $100"



// Statické hodnoty a vlastnosti
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}
console.log(MathUtils.add(5, 10)); // 15