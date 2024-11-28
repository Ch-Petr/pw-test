// Export selektorů mimo daný soubor
export const storeSelectors = {
    FIELD_USERNAME: 'input[data-test="username"]',
    FIELD_PASSWORD: 'input[data-test="password"]',
    BUTTON_LOGIN: 'button[data-test="login-button"]'
}

export const login = {
    FIELD_USERNAME: 'input[data-test="username"]',
    FIELD_PASSWORD: 'input[data-test="password"]',
    BUTTON_LOGIN: 'input[data-test="login-button"]',
}

export const navigation = {
    BUTTON_HAMBURGER: '#react-burger-menu-btn',
    BUTTON_ALLPRODUCTS: '[data-test="inventory-sidebar-link"]'
}

export const products = {
    BUTTON_ADDTOCART: '[data-test="add-to-cart"]',
    firstCategory: {
        FIRST_CATEGORY: '[data-test="category-filter-1"]',
        FIRST_PRODUCT: '[data-test="item-4-title-link"]',
    
    },
    secondCategory: {
        SECOND_CATEGORY: '[data-test="category-filter-2"]',
        FIRST_PRODUCT: '[data-test="item-0-title-link"]',
    }
}