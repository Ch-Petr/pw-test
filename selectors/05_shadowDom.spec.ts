import { test } from '@playwright/test';

// Příklad JavaScriptu injektující Shadow DOM
/*
    let shadowTarget = document.getElementById("shadow-root");
    let shadow = shadowTarget.attachShadow({ mode: "open" });

    let shadowButton = document.createElement("button");
    let shadowParagraph = document.createElement("p");
    let shadowStyles = document.createElement("style");
    shadowStyles.innerHTML = `
    p {
        color: purple;
        font-weight: bold;
    }
    `;
    shadowButton.type = "button";
    shadowButton.innerHTML = "Click Shadow";
    shadowParagraph.innerHTML = "Shadow Paragraph";
    shadow.appendChild(shadowStyles);
    shadow.appendChild(shadowButton);
    shadow.appendChild(shadowParagraph);
*/

// Příklad HTML stránky s Shadow DOM
/*
    <div id="app">
    <button type="button">Click</button>
    <p>Paragraph</p>
    </div>

    <p>Začátek Shadow DOM:</p>
    <div id="shadow-root"></div>
*/

// Výsledek jak vypadá HTML struktura uvnitř Shadow DOM
/*
    <div id="shadow-root">
            <button type="button">Click Shadow</button>
            <p>Shadow Paragraph</p>
    </div>
*/

test("Dynamické prvky na stránce", async ({ page }) => {
    // Lokátor pro element mimo Shadow DOM
    const buttonWithoutShadowDom = '#app button'
    
    // Lokátor pro identický element uvnitř Shadow DOM
    const buttonWithShadowDom = '#shadow-root button'
})