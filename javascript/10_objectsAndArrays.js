// Terminálový příkaz na provolání scriptů:
// node examples/javascript/09_objectsAndArrays.js

console.log('')
function objects() {
    console.log('OBJECTS')
    // Příklad Objektu
    let person = {
        name: "John",
        age: 30,
        isEmployed: true
    };
    console.log(`Default: ${JSON.stringify(person)}`)

    // Manipulace s Objekty - Přidání hodnot
    person.city = "Prague";
    console.log(`Město: ${person.city}`); // Hodnota: Prague

    // Manipulace s Objekty - Úprava hodnot
    person.age = 31;
    console.log(`Věk: ${person.age}`); // Hodnota: 31

    // Manipulace s Objekty - Mazání hodnot
    delete person.isEmployed;
    console.log(`Zaměstnanost: ${person.isEmployed}`); // Hodnota: undefined

    // Vnořené objekty
    let company = {
        name: "Tech Corp",
        address: {
            city: "New York",
            zip: 10001
        }
    };
    console.log(`Company: ${company.name}, Zip kód: ${company.address.zip}`);
};
objects();



console.log('')
function arrays() {
    console.log('ARRAYS')
    // Příklad Pole
    let fruits = [
        "Apple",
        "Banana",
        "Cherry"
    ];
    console.log(`Default: ${fruits}`)

    // Manipulace s Poli - Přidání hodnot
    fruits.push("Orange"); // Přidání prvku na konec
    fruits.unshift("Strawberry"); // Přidání prvku na začátek
    console.log(fruits)

    // Manipulace s Poli - Úprava hodnot
    fruits[1] = "Kiwi"; // Změna hodnoty na indexu 1 ("Apple")
    console.log(fruits)

    // Manipulace s Poli - Mazání hodnot
    fruits.shift(); // Odebrání prvního prvku
    fruits.pop(); // Odebrání posledního prvku
    console.log(fruits)

    // Vnořená pole
    let company = [
        "Tech Corp",
        [
            "Brno",
            62000,
            "Prague",
            10001
        ]
    ];
    console.log(`City 2: ${company[1][2]}, Zip:  ${company[1][3]}`);
}
arrays()



console.log('')
function objectIterration() {
    console.log('OBJECT ITERRATION')
    let person = { name: "John", age: 30, city: "New York" };

    // Iterace Objektů - FOR ... IN
    for (let key in person) {
        console.log(key, person[key]); // Vypíše klíč a jeho hodnotu
    }

    // Iterace Objektů - Object.keys()
    Object.keys(person).forEach(key => {
        console.log(key, person[key]); // Vypíše klíč a jeho hodnotu
    });

    // Iterace Objektů - Object.values()
    Object.values(person).forEach(value => {
        console.log(value); // Vypíše hodnoty objektu
    });

    // Iterace Objektů - Object.entries()
    Object.entries(person).forEach(([key, value]) => {
        console.log(key, value); // Vypíše klíč a jeho hodnotu
    });

    // Iterace Objektů přes klíče pomocí FOR ... OF
    for (let key of Object.keys(person)) {
        console.log(key, person[key]);
    }

    // Iterace Objektů přes hodnoty pomocí FOR ... OF
    for (let value of Object.values(person)) {
        console.log(value);
    }

    // Iterace Objektů přes [klíč, hodnota] pomocí FOR ... OF
    for (let [key, value] of Object.entries(person)) {
        console.log(key, value);
    }

    // Iterace Objektů - Object.getOwnPropertyNames()
    Object.getOwnPropertyNames(person).forEach(key => {
        console.log(key, person[key]); // Vypíše klíče a jejich hodnoty
    });
}
objectIterration()



console.log('')
function arrayIterration() {
    console.log('ARRAY ITTERATION')
    let fruits = ["Apple", "Banana", "Cherry"];

    // Iterace Poli - FOR
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]); // Vypíše každý prvek pole
    };

    // Interace Polí - FOR ... OF
    for (let fruit of fruits) {
        console.log(fruit); // Vypíše každý prvek pole
    }

    // Iterace Polí - FOREACH
    fruits.forEach(fruit =>
        console.log(fruit)  // Vypíše každý prvek pole
    );

    // Iterace Polí - MAP
    let upperFruits = fruits.map(fruit =>
        fruit.toUpperCase()
    );
    console.log(upperFruits);  // Nepřepisuje pole, ale vrací nové

    // Iterace Polí - FILTER
    let longFruits = fruits.filter(fruit =>
        fruit.length > 5
    );
    console.log(longFruits);

    // Iterace Polí - REDUCE
    let totalLength = fruits.reduce((total, fruit) =>
        total + fruit.length, 0
    );
    console.log(totalLength); // 16 (celkový počet znaků všech prvků pole)
}
arrayIterration()



console.log('')
function objectArrayCombo() {
    console.log('ARRAY AND OBJECT ITTERATION')
    // Příklad kombinace objektů a polí
    let fruitOwner = [
        {
            fruit: "Apple",
            person: [
                { name: "John", age: 25 },
                { name: "Carl", age: 30 }
            ]
        },
        {
            fruit: "Banana",
            person: [
                { name: "Carl", age: 30 },
                { name: "Frank", age: 35 }
            ]
        }
    ];

    // Příklad iterace u výše uvedeného příkladu
    fruitOwner.forEach(fruitItem => {
        console.log("Fruit:", fruitItem.fruit);

        fruitItem.person.forEach(person => {
            console.log(`Person: ${person.name}, Age: ${person.age}`);
        });
    });
}
objectArrayCombo()



console.log('')
function objectDestructuring() {
    console.log('OBJECT DESTRUCTURING');
    let person = {
        name: "John",
        age: 30,
        city: "New York"
    };

    // Destrukturalizace objektu
    let { name, age, city } = person;
    console.log(name); // "John"
    console.log(age);  // 30
    console.log(city); // "New York"

    // Změna názvu proměnných
    let { name: personName, age: personAge } = person;
    console.log(personName); // "John"
    console.log(personAge);  // 30

    // Defaultní hodnoty (použití jiného názvu proměnných kvůli konfliktu)
    let { name: newName, age: newAge = 25 } = person;
    console.log(newName); // "John"
    console.log(newAge);  // 30 (protože v person existuje age)
}
objectDestructuring()



console.log('')
function arrayDestructuring() {
    console.log('ARRAY DESTRUCTURING');
    let fruits = ["Apple", "Banana", "Cherry"];

    // Destrukturalizace pole
    let [firstFruit, secondFruit, thirdFruit] = fruits;

    console.log(firstFruit);  // "Apple"
    console.log(secondFruit); // "Banana"
    console.log(thirdFruit);  // "Cherry"

    // Přeskočení prvků (přidání jiné proměnné, aby nedošlo ke konfliktu)
    let [, , ThirdFruit] = fruits;
    console.log(ThirdFruit); // "Cherry"

    // Defaultní hodnoty (přidání jiné proměnné)
    let [firstFruitNew, secondFruitNew = "Kiwi"] = fruits;
    console.log(firstFruitNew);  // "Apple"
    console.log(secondFruitNew); // "Banana" (defaultní hodnota)
}
arrayDestructuring()



console.log('')
function arrayObjectDestructuring() {
    console.log('ARRAY AND OBJECT DESTRUCTURING')
    let fruitOwner = [
        {
            fruit: "Apple",
            person: [
                { name: "John", age: 25 },
                { name: "Carl", age: 30 }
            ]
        }
    ];

    let [{ fruit, person: [{ name: firstPerson = "Pepa" }] }] = fruitOwner;
    console.log(fruit);       // "Apple"
    console.log(firstPerson);  // "John"
}
arrayObjectDestructuring()