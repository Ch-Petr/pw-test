// Definice funkce "multiply"
export function multiply(a, b) {
    return a * b;
}

// Definice funkce "login"
export const login = async (page, username, password) => {
    await page.fill('#username', username);
    await page.fill('#password', password);
    await page.click('#login-button');
};