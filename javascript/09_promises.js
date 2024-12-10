// Terminálový příkaz na provolání scriptů:
// node examples/javascript/08_promises.js

// Základní definice Promise
const promise01 = new Promise((resolve, reject) => {
    // Jakýkoliv asynchronní kód, např. načítání dat z API
    let success = true; // Simulace podmínky

    if (success) {
        resolve("Data načtena úspěšně!");
    } else {
        reject("Načtení dat selhalo!");
    }
});

// Celý zápis jak s Promise, tak s metody
const promise02 = new Promise((resolve, reject) => {
    // Jakýkoliv asynchronní kód, např. načítání dat z API
    let success = true; // Simulace podmínky

    if (success) {
        resolve("Data načtena úspěšně!");
    } else {
        reject("Načtení dat selhalo!");
    }
}).then((result) => {
    console.log(result); // Výpis "Data načtena úspěšně!"
}).catch((error) => {
    console.error(error); // Výpis "Načtení dat selhalo."
}).finally(() => {
    console.log("Operace dokončena."); // Tento blok se provede vždy
});

// NEBO s použitím proměnné
promise02
    .then((result) => {
        console.log(result); // Výpis "Data načtena úspěšně!"
    })
    .catch((error) => {
        console.error(error); // Výpis "Načtení dat selhalo."
    })
    .finally(() => {
        console.log("Operace dokončena."); // Tento blok se provede vždy
    });

// Použití ASYNC a AWAIT v Playwright s asynchronní operací
const promise = new Promise((resolve, reject) => {
    // Jakýkoliv asynchronní kód, např. načítání dat z API
    let success = true; // Simulace podmínky

    if (success) {
        resolve("Data načtena úspěšně!");
    } else {
        reject("Načtení dat selhalo!");
    }
});

async function fetchData() {
    try {
        const result = await promise; // Čeká na dokončení Promise
        console.log(result); // Výpis "Data načtena úspěšně!"
    } catch (error) {
        console.error(error); // Zpracuje chybu
    } finally {
        console.log("Operace dokončena.");
    }
}