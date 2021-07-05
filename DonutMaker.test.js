// import { expect, test } from '@jest/globals';
import DonutMaker from './DonutMaker';

describe('1.1 DonutMaker', () => {
	test('1.1.1 Increase donutCount by 1 under click()', () => {
		const underTest = new DonutMaker(0, 0, 100, 0, 10, 1);
		underTest.click();
		expect(underTest.donutCount).toEqual(1);
	});

	test('1.1.2 Return donutCount', () => {
		const underTest = new DonutMaker(50, 0, 100);
		underTest.findDonutCount();
		expect(underTest.donutCount).toEqual(50);
	});
});

describe('1.2 AutoClicker', () => {
	test('1.2.1 Does AutoClicker return a count', () => {
		const underTest = new DonutMaker(100, 0, 100);
		underTest.click();
		expect(underTest.clickerCount).toEqual(0);
	});

	test('1.2.2 Ability to  add an AutoClicker', () => {
		const underTest = new DonutMaker(110, 1, 110);
		underTest.addClicker();
		expect(underTest.clickerCount).toEqual(2);
	});

	test('1.2.3 does .addClicker subtract the AutoClicker cost from  donutCount', () => {
		const underTest = new DonutMaker(100, 0, 100);
		underTest.addClicker();
		expect(underTest.donutCount).toEqual(0);
	});
});

describe('1.3 AutoClicker Cost', () => {
	test('1.3.1 does the clicker cost increase by 10% after first purchase', () => {
		const underTest = new DonutMaker(150, 0, 100);
		underTest.addClicker();
		expect(underTest.clickerCost).toEqual(110);
	});

	test('1.3.2 does the clicker cost increase by 10% after each purchase', () => {
		const underTest = new DonutMaker(140, 2, 110);
		underTest.addClicker();
		expect(underTest.clickerCost).toEqual(121);
	});
});

describe('1.4 Buy AutoClicker', () => {
	test('1.4.1 Can buy AutoClicker ONLY when user has enough in donutCount', () => {
		const underTest = new DonutMaker(250, 0, 100);
		underTest.addClicker();
		expect(underTest.clickerCount).toEqual(1);
	});
	test('1.4.2 Can NOT buy AutoClicker when user doesnt have enough in donutCount', () => {
		const underTest = new DonutMaker(90, 0, 100);
		underTest.addClicker();
		expect(underTest.clickerCount).toEqual(0);
	});
});

describe('2.1 donutMultiplier', () => {
	test('2.1.1 Can retrieve multiplierCount', () => {
		const underTest = new DonutMaker(90, 0, 100, 0, 10);
		underTest.click();
		expect(underTest.multiplierCount).toEqual(0);
	});
	test('2.1.2 Can add to the multiplierCount', () => {
		const underTest = new DonutMaker(90, 0, 100, 0, 10);
		underTest.addMultiplier();
		expect(underTest.multiplierCount).toEqual(1);
	});
	test('2.1.3 Subtract multiplierCost from donutCount', () => {
		const underTest = new DonutMaker(90, 0, 100, 0, 10);
		underTest.addMultiplier();
		expect(underTest.donutCount).toEqual(80);
	});
});

describe('2.2 multiplierCost will go up w each purchase', () => {
	test('2.2.1 increase cost of second multiplier by additional 10%', () => {
		const underTest = new DonutMaker(90, 0, 100, 0, 10);
		underTest.addMultiplier();
		expect(underTest.multiplierCost).toEqual(11);
		expect(underTest.multiplierCount).toEqual(1);
	});
	test('2.2.2 increase cost of every additional multiplier by an additional 10%', () => {
		const underTest = new DonutMaker(90, 0, 100, 2, 11);
		underTest.addMultiplier();
		expect(underTest.multiplierCost).toEqual(12.1);
		expect(underTest.multiplierCount).toEqual(3);
	});
});

describe('2.3 Enough donuts to buy donut multiplier', () => {
	test('2.3.1 if there are not enough donuts, multiplierCount remains', () => {
		const underTest = new DonutMaker(5, 0, 100, 0, 10);
		underTest.addMultiplier();
		expect(underTest.multiplierCount).toEqual(0);
	});
});

describe('2.4 Donut Multiplier should increase value of a click 1.2x', () => {
	test('2.4.1 increase amount of donuts added to donutCount by 1.2x after multiplier purchase', () => {
		const underTest = new DonutMaker(10, 0, 100, 0, 10, 1);
		underTest.addMultiplier();
		underTest.click();
		expect(underTest.donutCount).toEqual(1.2);
	});
});

describe('2.5 Subsequent Multipliers bonus goes up exponentially', () => {
	test('2.5.1 increase click value to 1.2 to the xth power (x=donutCount)', () => {
		const underTest = new DonutMaker(20, 0, 100, 1, 11, 1.2);
		underTest.addMultiplier();
		underTest.click();
		expect(underTest.clickValue).toEqual(1.44);
	});
});

describe('2.6 Donut Multiplier applies to Auto Clickers', () => {
	test('2.6.1 addAutoClicker event, increase clickValue of each autoClicker by amount of donutMult', () => {
		const underTest = new DonutMaker(500, 0, 100, 0, 10, 1, 1);
		underTest.addMultiplier();
		underTest.addClicker();
		expect(underTest.clickValue).toEqual(1.2);
	});
});
