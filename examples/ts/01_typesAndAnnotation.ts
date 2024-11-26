let ageNum: number = 21;
let firstName: string = "John";
let isStudent: boolean = true;
console.log(`${firstName}, ${ageNum}, ${isStudent}`);

// Typová inference
let greeting = "Hello";     // Typ je automaticky odvozen jako string
let ageNumber = 34;         // Typ je automaticky odvozen jako number
let isDriving = true;       // Typ je automaticky odvozen jako boolean, atd.

// Základní typy - number
let xAxis: number = 42;
let piNumber: number = 3.14;

// Základní typy - string
let carBrand: string = "Mercedes";
let cityName: string = "Prague";

// Základní typy - boolean
let isPlane: boolean = false;
let isCar: boolean = true;

// Základní typy - array
let numbersArray: number[] = [1, 2, 3];
let stringsArray: Array<string> = ["apple", "banana", "cherry"];

// Základní typy - object
let keyAndNumberObject: { [key: string]: number } = { seatNumber: 10 }
let keyAndStringObject: { houseType: string } = { houseType: 'flat' }

// Základní typy - tuple
let personDetails: [string, number] = ["Alice", 30,];
let carDetails: [string, number, boolean] = ["Peugeot", 2021, true]

// Základní typy - enum
enum Role { Admin, User, Guest };
let userRole: Role = Role.Admin;

// Základní typy - any
let data: any;
data = "random string";
data = 42;
data = true
data = null
data = undefined
data = []
data = {}

// Základní typy - unknown (alternativa k any)
let greetingValue: unknown = "Hello";
greetingValue = 42;     // Takto nepoužívat!

// Základní typy - void
function logMessage(): void {
    console.log();
};                      // Funkce bez návratové hodnoty

// Základní typy - null
function returnNullValue(): null {
    return null;
};                      // Funkce s návratovou hodnotou null

// Základní typy - undefined
function returnUndefinedValue(): undefined {
    return undefined;
};                      // Funkce s návratovou hodnotou undefined

// Union Types - kombinování typů
let id: number | string;                    // Může být číslo nebo řetězec
id = "12345"
id = 12345

let userNumber: number | null;              // Může být číslo nebo null
userNumber = 12345
userNumber = null

let carBradns: Array<string> | undefined;   // Může být pole stringů nebo undefined
carBradns = ['Mercedes', 'Peugeot', 'Mazda']
carBradns = undefined

let planeTypes: { [key: string]: number | string } // Může být object čísel nebo stringů
planeTypes = { Boeing: 747, Airbus: 'A320' }

// Tuples
let person: [string, number] = ["John", 25];
let isForKids: [string, boolean] = ['Sharp object', false]
// Kombinace Tuples s Union
let planeBrand: [string, Array<number | string>] = ['Boeing', [747, "787 Dreamliner"]]

// Enum
// Ve výchozím nastavení jsou číselné hodnoty přiřazeny automaticky (počínaje 0), ale můžeme je také explicitně definovat.
enum Direction {
    North, // 0
    East,  // 1
    South, // 2
    West   // 3
}

let currentDirection: Direction = Direction.North;
console.log(currentDirection); // Výstup: 0

// Nebo s definovanými hodnotami
enum DirectionDegrees {
    NorthDegrees = "N000",
    EastDegrees = "E090",
    SouthDegrees = "S180",
    WestDegrees = "W270"
}
let currentDirectionDegrees: DirectionDegrees = DirectionDegrees.SouthDegrees;
console.log(currentDirectionDegrees); // Výstup: "S180"

// Typové aliasy
type ID = number | string;
let userId: ID = 123;
let orderId: ID = "ORD001";

type Persona = {
    name: string;
    age: number;
};
let user: Persona = {
    name: "Alice",
    age: 30
};

