// Terminálový příkaz na provolání scriptů:
// node examples/javascript/05_cycles.js

function cycleFor() {
    let i = 0;
    
    /**
     * Cyklus pro definovaný počet opakování kódu.
     * Proměnná `i` se inicializuje na 0, a dokud je `i < 5`, cyklus pokračuje.
     * Po každé iteraci se hodnota `i` zvýší o 1.
     */
    for (i; i < 5; i++) {
        console.log(`For: ${i}`);
    }
}
cycleFor()

function cycleWhile() {
    let i = 0; 

    /**
     * Cyklus, který opakuje blok kódu, dokud je podmínka pravdivá.
     * Proměnná `i` je inicializována na 0, a dokud je `i < 5`, cyklus běží.
     * Po každé iteraci se `i` zvýší o 1.
     */
    while (i < 5) {
        console.log(`Cycle ... While: ${i}`);
        i++;
    }
}
cycleWhile()

function cycleDo() {
    let i = 0;

    /**
     * Cyklus, který se provede alespoň jednou, i kdyby podmínka nebyla splněna.
     * Proměnná `i` je inicializována na 0. Blok kódu uvnitř `do` se vykoná a poté se zkontroluje podmínka.
     * Pokud je podmínka splněna (i < 5), cyklus pokračuje, jinak se ukončí.
     */
    do {
        console.log(`Cycle ... Do: ${i}`);
        i++;
    } while (i < 5);
}
cycleDo()