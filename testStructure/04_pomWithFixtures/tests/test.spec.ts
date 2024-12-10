import { test } from './fixtures/base'

test('test', async ({ site }) => {
    await site.navigate();
    await site.login('user', 'pass');
});