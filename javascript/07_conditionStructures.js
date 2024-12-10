// Terminálový příkaz na provolání scriptů:
// node examples/javascript/04_conditionStructures.js

// Jednoduchá IF podmínka
function ifCondition() {
    let age = 20

    if (age >= 18) {
        console.log("Dospělý");
    }
}
ifCondition()

// Podmínka IF s ELSE
function ifElseCondition() {
    let age = 20
    
    if (age >= 18) {
        console.log("Dospělý");
    } else {
        console.log("Mladistvý");
    }
}
ifElseCondition()

// Vícenásobná podmínka IF ELSE IF
function ifElseIfCondition() {
    let age = 20
    
    if (age < 18) {
        console.log("Mladistvý");
    } else if (age >= 65) {
        console.log("Důchodce");
    } else {
        console.log("Dospělý");
    }
}
ifElseIfCondition()

// Vyhodnocující podmínka SWITCH
function name() {
    let color = 'blue';

    switch (color) {
        case 'red': {
            console.log('Barva je červená');
            break;
        }

        case 'blue': {
            console.log('Barva je modrá');
            break;
        }

        default: {
            console.log('Neznámá barva');
        }
    }
}
name()