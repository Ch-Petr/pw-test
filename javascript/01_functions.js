// Terminálový příkaz na provolání scriptů:
// node examples/javascript/06_functions.js

// Základní definice funkcí

/**
 * Declarative function
 */
export async function sayHello() {
    console.log("Hello, World!");
}

await sayHello();  // Výstup: Hello, World!


/**
 * Anonymous function
 */
const greet = function() {
    console.log("Hello, World!");
};
greet();  // Výstup: Hello, World!


/**
 * Arrow function
 */
const hiBye = () =>
    console.log("Hello, World!");
hiBye();   // Výstup: Hello, World!


// Parametry funkcí a návratové hodnoty

/**
 * Funkce s parametry a návratovou hodnotou "a + b"
 */
function add(a, b) {
    return a + b;
}
const sum = add(5, 3);
console.log(sum);  // Výstup: 8

// Defaultní hodnoty funkcí

/**
 * Funkce s defaultní hodnotou "World"
 */
function greetings(name = "World") {
    console.log(`Hello, ${name}`);
    console.log("Hello " + name);
}
greetings();  // Výstup: Hello, World
greetings("Alice");  // Výstup: Hello, Alice