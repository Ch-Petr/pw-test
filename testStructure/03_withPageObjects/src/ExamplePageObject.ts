import { Page } from '@playwright/test';

export class ExamplePageObject {
    protected _page: Page
    constructor() {}

    async navigate() {
        await this._page.goto('https://example.com/login');
    }

    async login(username: string, password: string) {
        await this._page.fill('#username', username);
        await this._page.fill('#password', password);
        await this._page.click('button[type="submit"]');
    }
}