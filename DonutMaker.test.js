// import { expect, test } from '@jest/globals';
import DonutMaker from './DonutMaker';

describe('1.1 DonutMaker', () => {
    test('1.1.1 Increase donutCount by 1 under click()', () => {
        const underTest = new DonutMaker(0, 0, 100);
        underTest.click();
        expect(underTest.donutCount).toEqual(1);
    });

    test('1.1.2 Return donutCount', () => {
        const underTest = new DonutMaker(50, 0, 0);
        expect(typeof underTest.donutCount).toMatch('number');
    });
});

describe('1.2 AutoClicker', () => {
    test('1.2.1 does AutoClicker return a count', () => {
        const underTest = new DonutMaker(110, 1, 100);
        underTest.addClicker();
        expect(underTest.clickerCount).toEqual(1);
    });

    test('1.2.2 ability to  add to the clickerCount', () => {
        const underTest = new DonutMaker(300, 1, 110);
        underTest.addClicker();
        expect(underTest.clickerCount).toEqual(2);
    })

    test('1.2.3 does .addClicker subtract the AutoClicker cost from  donutCount', () => {
        const underTest = new DonutMaker(100, 100, 100);
        underTest.addClicker();
        expect(underTest.donutCount).toEqual(0);
    })
});

describe('1.3 AutoClicker Cost', () => {
    test('1.3.1 does the clicker cost increase by 10% after first purchase', () => {
        const underTest = new DonutMaker(100, 0, 100);
        underTest.addClicker();
        expect(underTest.clickerCost).toEqual(110);
    })

    test('1.3.2 does the clicker cost increase by 10% after each purchase', () => {
        const underTest = new DonutMaker(50, 1, 121);
        underTest.addClicker();
        expect(underTest.clickerCost).toEqual(133.1);
    })
})

describe('1.4 Buy AutoClicker', () => {
    test('1.4.1 Can buy AutoClicker ONLY when user has enough in donutCount', () => {
        const underTest = new DonutMaker(250, 0, 100);
        underTest.addClicker();
        expect(underTest.clickerCount).toEqual(1);
    })
    test('1.4.2 Can NOT buy AutoClicker when user doesnt have enough in donutCount', () => {
        const underTest = new DonutMaker(200, 0, 91);
        underTest.addClicker();
        expect(underTest.clickerCount).toEqual(0);
    })

})