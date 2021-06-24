// import { expect, test } from '@jest/globals';
import DonutMaker from './DonutMaker';

describe('DonutMaker', () => {
    test('does the donutCount increase when clicked', () => {
        const underTest = new DonutMaker(0);
        underTest.click();
        expect(underTest.donutCount).toEqual(1);
    });

    test('does it return a count', () => {
        const underTest = new DonutMaker(50);
        expect(typeof underTest.donutCount).toMatch('number');
    });
});