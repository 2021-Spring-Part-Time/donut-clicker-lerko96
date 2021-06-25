// import { expect, test } from '@jest/globals';
import DonutMaker from './DonutMaker';

describe('DonutMaker', () => {
    test('does the donutCount increase when clicked', () => {
        const underTest = new DonutMaker(0, 0, 100);
        underTest.click();
        expect(underTest.donutCount).toEqual(1);
    });

    test('does it return a count', () => {
        const underTest = new DonutMaker(50, 0, 0);
        expect(typeof underTest.donutCount).toMatch('number');
    });
});

describe('AutoClicker', () => {
    test('does it return a count', () => {
        const underTest = new DonutMaker(0, 0, 100);
        underTest.addClicker();
        expect(underTest.clickerCount).toEqual(1);
    });

    test('can I add to the clickerCount', () => {
        const underTest = new DonutMaker(100, 5, 500);
        underTest.addClicker();
        expect(underTest.clickerCount).toEqual(6);
    })

    test('does it subtract the auto clicker cost from the donut count', () => {
        const underTest = new DonutMaker(100, 100, 100);
        underTest.addClicker();
        expect(underTest.donutCount).toEqual(0);
    })
});

describe('Auto Clicker Cost', () => {
    test('does the clicker cost increase by 10% after purchase', () => {
        const underTest = new DonutMaker(100, 0, 100);
        underTest.addClicker();
        expect(underTest.clickerCost).toEqual(110);
    })
})