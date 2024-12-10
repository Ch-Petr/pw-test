import { test } from '@playwright/test';
import { ExamplePageObject } from '../src/ExamplePageObject';

test('test', async () => {
    const loginPage = new ExamplePageObject();
    await loginPage.navigate();
    await loginPage.login('user', 'pass');
});