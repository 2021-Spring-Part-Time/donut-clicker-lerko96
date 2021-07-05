class DonutMaker {
	constructor(
		donutCount,
		clickerCount,
		clickerCost,
		multiplierCount,
		multiplierCost,
		clickValue,
		cps,
		autoCPS
	) {
		this.donutCount = donutCount;
		this.clickerCount = clickerCount;
		this.clickerCost = clickerCost;
		this.multiplierCount = multiplierCount;
		this.multiplierCost = multiplierCost;
		this.clickValue = clickValue;
		this.cps = cps;
		this.autoCPS = autoCPS;
	}

	click() {
		console.log('donut click');
		this.donutCount += this.clickValue;
	}

	findDonutCount() {
		return this.donutCount;
	}

	addClicker() {
		if (this.donutCount >= this.clickerCost) {
			this.donutCount -= this.clickerCost;
			this.clickerCount++;
			this.clickerCost = this.clickerCost * 0.1 + this.clickerCost;
			this.cps++;
			this.autoCPS = this.clickerCount * this.clickValue;
		}
		setInterval(() => {
			this.click();
		}, 1000);
	}

	addMultiplier() {
		if (this.donutCount >= this.multiplierCost) {
			this.donutCount -= this.multiplierCost;
			this.multiplierCount++;
			this.multiplierCost =
				this.multiplierCost * 0.1 + this.multiplierCost;
			this.clickValue = 1.2 ** this.multiplierCount;
			this.autoCPS = this.clickerCount * this.clickValue;
		}
	}

	resetGame() {
		location.reload();
		return false;
	}
}

export default DonutMaker;
