class DonutMaker {
	constructor(donutCount, clickerCount, clickerCost) {
		this.donutCount = donutCount;
		this.clickerCount = clickerCount;
		this.clickerCost = clickerCost;
	}

	click() {
		this.donutCount += 1;
	}

	addClicker() {
		if (this.clickerCost < (this.clickerCost * 0.1) + this.clickerCost) {
            this.clickerCost = (this.clickerCost * 0.1) + this.clickerCost; 
            this.donutCount -= this.clickerCost;
            if (this.donutCount >= this.clickerCost) {
                return this.clickerCount++;
            }   else if (this.donutCount < this.clickerCost) { 
                return this.clickerCount += 0;
            }
            return this.clickerCount;
		}
		return this.clickerCost;
	}
}

export default DonutMaker;
