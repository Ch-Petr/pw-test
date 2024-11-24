// Události a Event listeners - Přidání obsluhy události pro kliknutí
let button = document.querySelector("button");
button.addEventListener("click", function() {
 alert("Button was clicked!");
});

// Události a Event listeners - Přidání události na změnu textu v inputu
let inputField = document.querySelector("input");
inputField.addEventListener("input", function() {
 console.log("Input changed:", inputField.value);
});