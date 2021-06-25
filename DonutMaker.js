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
        this.clickerCount += 1;
        this.donutCount -= 100;
        this.clickerCost *= 1.1;
    }
    
}



export default DonutMaker;