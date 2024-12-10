// Aritmetické operátory
let sum = 5 + 3;   // Sčítání
let diff = 10 - 2; // Odčítání
let prod = 4 * 6;  // Násobení
let div = 12 / 3;  // Dělení
let mod = 10 % 3;  // Zbytek po dělení

// Porovnávací operátory
let isEqual = (5 == 5);                         // Výsledek = true
let isGreater = (10 > 5);                       // Výsledek = true
let isString = (typeof "Hello" === 'string');   // true (porovnává typ string)
let isNumber = (typeof 42 === 'number');        // true (porovnává typ number)
let isBoolean = (typeof true === 'boolean');    // true (porovnává typ boolean)

    // Porovnávací operátory - Porovnávání objektů 
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
let isSameObject = (obj1 === obj2); // false (různé reference v paměti, i když obsah je stejný)
console.log(isSameObject);

    // Porovnávací operátory - Porovnávání polí
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let isSameArray = (arr1 === arr2); // false (různé reference v paměti, i když obsah je stejný)
console.log(isSameObject);

    // Porovnávací operátory - Porovnání hodnot uvnitř polí
let isObjEqual = (obj1.toString() === obj2.toString()); // true (převod polí na string a porovnání)
console.log(isObjEqual);
let isArrayEqual = (arr1.toString() === arr2.toString()); // true (převod polí na string a porovnání)
console.log(isArrayEqual);

// Logické operátory
let isTrue = (5 > 3 && 10 > 8);  // Výsledek = true (logické AND)
let isFalse = (5 > 3 || 2 > 5);  // Výsledek = true (logické OR)
let notTrue = !(5 > 3);          // Výsledek = false (logické NOT)

    // Logické operátory - Ternární operátor
let age = 17
let isAdult = (age >= 18) ? "Dospělý" : "Mladistvý"; // Pokud je věk větší nebo rovný 18, výsledek je "Dospělý", jinak "Mladistvý"