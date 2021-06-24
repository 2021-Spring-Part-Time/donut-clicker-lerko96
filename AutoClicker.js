class AutoClicker {
    constructor(clickerCount, clickerCost) {
        this.clickerCount = clickerCount;
        this.clickerCost = clickerCost;
    }

    addClicker() {
        this.clickerCount += 1;
    }
}

export default AutoClicker;