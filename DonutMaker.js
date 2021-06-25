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
        //Clicker count
		// this.clickerCount += 1;
        // if (this.donutCount >= this.clickerCost) {
        //     return this.clickerCount += 1;
        // }   else if (this.donutCount < this.clickerCost) {
        //     return this.clickerCount += 0;
        // }
        // return this.clickerCount 

        
        //Donut 
		this.donutCount -= this.clickerCost;
        
		if (this.clickerCost < (this.clickerCost * 0.1) + this.clickerCost) {
            this.clickerCost = (this.clickerCost * 0.1) + this.clickerCost; 
            if (this.donutCount >= this.clickerCost) {
                return this.clickerCount += 1;
            }   else if (this.donutCount < this.clickerCost) {
                return this.clickerCount += 0;
            }
            return this.clickerCount;
		}
		return this.clickerCost;
	}
    
    // function buyClicker(this.clickerCount) {
    //     if (this.donutCount < this.clickerCost) {
    //         this.clickerCount+=0
    //     }
    //     else (this.donutCount >= this.clickerCost) {
    //         this.clickerCount += 1;
    //     }
        
    // }
}

export default DonutMaker;
