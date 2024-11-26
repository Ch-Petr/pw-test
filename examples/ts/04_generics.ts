// Generika - základní použití v třídách
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hello world");
let output2 = identity<number>(123);

// Generika - použití v třídách a rozhraních
class Box<T> {
    contents: T;
    constructor(value: T) {
        this.contents = value;
    }
}

let stringBox = new Box<string>("Hello world");
let numberBox = new Box<number>(123);

// Generika v rozhraních (Interface)
interface Pair<T, U> {
    first: T;
    second: U;
}

let stringNumberPair: Pair<string, number> = {
    first: "Hello world",
    second: 123
};


// Generika - složitější scénář
class List<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getItems(): T[] {
        return this.items;
    }
}

let numberList = new List<number>();
numberList.add(1);
numberList.add(2);

let stringList = new List<string>();
stringList.add("jablko");
stringList.add("banán");

console.log(numberList.getItems()); // [1, 2]
console.log(stringList.getItems()); // ["jablko", "banán"]


function greetings(name:string = "World") {
    console.log(`Hello, ${name}`);
}
greetings();  // Výstup: Hello, World