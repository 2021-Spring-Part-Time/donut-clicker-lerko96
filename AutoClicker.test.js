// import { expect, test } from '@jest/globals';
// import { describe } from 'yargs';
import { expect, test } from '@jest/globals';
import AutoClicker from './AutoClicker';

describe('AutoClicker', () => {
    test('does it return a count', () => {
        const underTest = new AutoClicker(0, 100);
        expect(underTest.clickerCount).toEqual(0);
    });

    test('can I add to the clickerCount', () => {
        const underTest = new AutoClicker(0, 100);
        underTest.addClicker();
        expect(underTest.clickerCount).toEqual(1);
    })
});