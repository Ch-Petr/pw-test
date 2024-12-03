export const login = {
    USERNAME_CSS: 'input[placeholder="Username"]', //toto ideálně používat
    USERNAME_CSS2: '[placeholder*="Username"]', //hvězdička za placeholder hledá cokoli mezi
    USERNAME_XPATH: '//*input[@placeholder="Username"]', //ručně napsané na základe html v DevTools (//* = hledá v celém html)
    USERNAME_XPA: '//*[@id="user-name"]', // přes pravé tl. v DevTools -> Copy -> Copy XPath (//* = hledá v celém html)
    TT: '/html/body/div[8]/div[2]/div/div/div/div[7]/div/div', // vykopírované z DevTools - není dobré, pouze cesta v html


    USERNAME_CSS3: 'div[id="modal"] >> input[placeholder="Username"]', //řetězování, >> znamena, ze to pouze v ramci div vyhleda input
    USERNAME_CSS_XPATH: 'div[id="modal"] >> //*input[@placeholder="Username"]', //kombinace CSS s XPATH
}

//CVIČENÍ:

export const cviceniLogin = {
    textfield_Username: '[id="user-name"]', //Jméno
    textfield_Password: '[id="password"]', //Heslo
    button_Login: '[id="login-button"]', //CTA "Login"
}