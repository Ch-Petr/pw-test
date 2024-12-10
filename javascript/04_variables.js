// Terminálový příkaz na provolání scriptů:
// node examples/javascript/01_variables.js

/**
 * SPRÁVNÍ DEKLARACE PROMĚNNÝCH - LET, CONST, VAR
 */
function declareVariablesCorrect() {

    /**
     * Declare LET
     */
    function declareLet() {
        let tree = 0;
        tree = 5

        if (tree) {
            let grass = 0;
            grass = 5
            tree = 10
            console.log(grass, tree)
        } else {
            tree = 15
            console.log(tree)
        }

        tree = 20
        console.log(tree)
    }
    declareLet()

    /**
     * Declare CONST
     */
    function declareConst() {
        const branch = 0

        if (branch) {
            const root = 0
            console.log(root, branch)
        } else {
            console.log(branch)
        }s

        console.log(branch)

        return branch
    }
    declareConst()

    /**
     * Declare VAR
     */
    function declareVar() {
        var flower;
        flower = 5
    
        if (flower) {
            var seed = 0;
            seed = 5
            flower = 10
            console.log(flower, seed)
        } else {
            seed = 10
            flower = 15
            console.log(flower, seed)
        }
    
        seed = 10
        flower = 20
        console.log(flower, seed)
    }
    declareVar()
}
declareVariablesCorrect()



/**
 * NESPÁRVNÁ DEKLARACE PROMĚNNÝCH - LET, CONST, VAR
 */
function declareVariablesIncorrect() {

    /**
     * Declare LET
     */
    function declareLet() {
        let tree = 0;
        tree = 5             // Hodnotu můžeme změnit

        if (tree) {
            let grass = 0;
            grass = 5        // Hodnotu můžeme změnit
            tree = 10         // Hodnotu můžeme změnit
            console.log(grass, tree)
        } else {
            grass = 10        // Chyba – Proměnná "grass“ není dostupná
            tree = 15        // Hodnotu můžeme změnit
            console.log(grass, tree) // Chyba – Proměnná "grass" není dostupná
        }

        grass = 15           // Chyba – Proměnná "grass“ není dostupná
        tree = 20            // Hodnotu můžeme změnit
        console.log(grass, tree)     // Chyba – Proměnná "grass" není dostupná
    }

    /**
     * Declare CONST
     */
    function declareConst() {
        const branch = 0
        branch = 5            // Chyba - Nelze znovu deklarovat ani změnit hodnotu
    
        if (branch) {
            const root = 0
            root = 5          // Chyba - Nelze znovu deklarovat ani změnit hodnotu
            branch = 10       // Chyba - Nelze změnit hodnotu
            console.log(root, branch) // Obě proměnné jsou dostupné
        } else {
            root = 10         // Chyba – "root" není dostupná
            branch = 15       // Chyba - Nelze změnit hodnotu
            const branch = 15 // Lze deklarovat v jiném bloku, ALE takto ne!!!
            const root = 15   // Lze deklarovat v jiném bloku, ALE takto ne!!!
            console.log(root, branch) // Chyba – Proměnná "root" není dostupná
        }
    
        root = 15             // Chyba – Proměnná "root" není dostupná
        branch = 20           // Chyba - Nelze změnit hodnotu
        console.log(root, branch)     // Chyba – Proměnná "root" není dostupná
    }    

    /**
     * Declare VAR
     */
    function declareVar() {
        var flower = 0;
        flower = 5          // Hodnotu můžeme změnit

        if (flower) {
            var seed = 0;
            seed = 5        // Hodnotu můžeme změnit
            flower = 10     // Hodnotu můžeme změnit
            console.log(flower, seed)
        } else {
            seed = 10       // Hodnotu můžeme změnit
            flower = 15     // Hodnotu můžeme změnit
            console.log(flower, seed)
        }

        seed = 10           // Hodnotu můžeme změnit
        flower = 20         // Hodnotu můžeme změnit
        console.log(flower, seed)
    }
}