// Příklad HTML struktury
const htmlContent =
`
<!DOCTYPE html>
<html>
    <head>
        <title>Manipulace s DOM</title>
    </head>
    <body>
        <h1 id="title">Hello, World!</h1>
        <p class="description">This is a paragraph.</p>
    </body>
</html>
`

// Vyhledání - elementu pomocí ID
let title1 = document.getElementById("title");
console.log("Title:", title.textContent); // Output: Hello, World!

// Vyhledání - všech odstavců (p)
let paragraphs = document.getElementsByTagName("p");
console.log("Paragraph:", paragraphs[0].textContent); // Output: This is a paragraph.

// Vyhledání - Použití querySelector
let firstParagraph = document.querySelector(".description");
console.log("Query:", firstParagraph.textContent); // Output: This is a paragraph.


// Změna obsahu - změna textu nadpisu
title.innerText = "New Title";

// Změna obsahu - změna HTML obsahu odstavce
firstParagraph.innerHTML = "<strong>Updated paragraph text</strong>";

// Změna obsahu - Nastavení atributu pro odkaz
let link = document.querySelector("a");
link.setAttribute("href", "https://example.com");


// Přidání a odstranění - Vytvoření nového odstavce
let newParagraph = document.createElement("p");
newParagraph.innerText = "This is a new paragraph.";

// Přidání a odstranění - Přidání nového odstavce do těla stránky
document.body.appendChild(newParagraph);

// Přidání a odstranění - Odstranění elementu
document.body.removeChild(newParagraph);
let title2 = document.getElementById("title");


// Manipulace s třídami - Přidání třídy
title.classList.add("highlight");

// Manipulace s třídami - Odebrání třídy
title.classList.remove("highlight");

// Manipulace s třídami - Přepnutí třídy
title.classList.toggle("hidden");


// Události a Event listeners - Přidání obsluhy události pro kliknutí
let button = document.querySelector("button");
button.addEventListener("click", () => {
    alert("Button was clicked!");
});

// Události a Event listeners - Přidání události na změnu textu v inputu
let inputField = document.querySelector("input");
inputField.addEventListener("input", () => {
    console.log("Input changed:", inputField.value);
});