class DonutMaker {
	constructor(
		donutCount,
		clickerCount,
		clickerCost,
		multiplierCount,
		multiplierCost,
		clickValue,
		cps
	) {
		this.donutCount = donutCount;
		this.clickerCount = clickerCount;
		this.clickerCost = clickerCost;
		this.multiplierCount = multiplierCount;
		this.multiplierCost = multiplierCost;
		this.clickValue = clickValue;
		this.cps = cps;
	}

	click() {
		console.log('donut made');
		this.donutCount += this.clickValue;
	}

	findDonutCount() {
		return this.donutCount;
	}

	findClickerCount() {
		return this.clickerCount;
	}

	addClicker() {
		if (this.donutCount >= this.clickerCost) {
			this.donutCount -= this.clickerCost;
			this.clickerCount++;
			this.clickerCost = this.clickerCost * 0.1 + this.clickerCost;
			// this.clickValue = this.clickValue;
			this.cps++;
		}
		setInterval(() => {
			this.click();
		}, 1000);
	}

	findMultiplierCount() {
		return this.multiplierCount;
	}

	addMultiplier() {
		if (this.donutCount >= this.multiplierCost) {
			this.donutCount -= this.multiplierCost;
			this.multiplierCount++;
			this.multiplierCost =
				this.multiplierCost * 0.1 + this.multiplierCost;
			this.clickValue =
				1.2 ** this.multiplierCount;
		}
	}
}

// function counter() {
// 	i = 0;
// 	var clicksPerSecond = function () {
// 		if (i == 100) clearInterval(this);
// 		else console.log('Currently at ' + i++);
// 	};

// 	setInterval(clicksPerSecond, 1000);
// 	clicksPerSecond();
// }

export default DonutMaker;
