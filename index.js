import DonutMaker from './DonutMaker';
const container = document.querySelector('.container');

const donutGame = new DonutMaker(0, 0, 100, 0, 10, 1, 0);

const donutClickerBtn = document.querySelector('.donutClickerBtn'),
	myDonutsDiv = document.getElementById('myDonuts');

const buyClickerBtn = document.querySelector('.buyClickerBtn'),
	myClickersDiv = document.getElementById('myClickers');

const buyMultiplierBtn = document.querySelector('.buyMultiplierBtn'),
	myMultipliersDiv = document.getElementById('myMultipliers');

const resetGameBtn = document.querySelector('.resetGameBtn');

container.addEventListener('mouseover', () => {
	console.log('mouseover event');
	donutGame.findDonutCount();
	myDonutsDiv.appendChild(donutCount);
	donutCount.innerText = donutGame.donutCount.toFixed(2) + ' donuts';
	myDonutsDiv.appendChild(clickerValue);
	clickerValue.innerText =
		donutGame.clickValue.toFixed(2) + ' donuts per click';
	myDonutsDiv.appendChild(clickerCountOne);
	clickerCountOne.innerText = donutGame.clickerCount + ' auto clickers';
	myDonutsDiv.appendChild(numAutoCPS);
	numAutoCPS.innerText = 'per second: ' + donutGame.autoCPS.toFixed(2);
});

donutClickerBtn.addEventListener('click', () => {
	donutGame.click();
	myDonutsDiv.appendChild(donutCount);
	donutCount.innerText = donutGame.donutCount.toFixed(2) + ' donuts';
	myDonutsDiv.appendChild(clickerValue);
	clickerValue.innerText =
		donutGame.clickValue.toFixed(2) + ' donuts per click';
	myDonutsDiv.appendChild(clickerCountOne);
	clickerCountOne.innerText = donutGame.clickerCount + ' auto clickers';
	myDonutsDiv.appendChild(numAutoCPS);
	numAutoCPS.innerText = 'per second: ' + donutGame.autoCPS.toFixed(2);
});

buyClickerBtn.addEventListener('click', () => {
	if (donutGame.donutCount >= donutGame.clickerCost) {
		console.log('clicker purchase: GRANTED');
		donutGame.addClicker();
		myDonutsDiv.appendChild(donutCount);
		donutCount.innerText = donutGame.donutCount.toFixed(2) + ' donuts';
		myDonutsDiv.appendChild(clickerValue);
		clickerValue.innerText =
			donutGame.clickValue.toFixed(2) + ' donuts per click';
		myDonutsDiv.appendChild(clickerCountOne);
		clickerCountOne.innerText = donutGame.clickerCount + ' auto clickers';
		myDonutsDiv.appendChild(numAutoCPS);
		numAutoCPS.innerText = 'per second: ' + donutGame.autoCPS.toFixed(2);
		myClickersDiv.appendChild(numClickers);
		numClickers.innerText = 'Auto Clickers: ' + donutGame.clickerCount;
		myClickersDiv.appendChild(clickerPrice);
		clickerPrice.innerText =
			'Cost: ' + donutGame.clickerCost.toFixed(2) + ' Donuts';
		document.getElementById('.buyClickerBtn').disabled = false;
	} else if (donutGame.donutCount < donutGame.clickerCost) {
		console.log('clicker purchase: DENIED');
		return (document.getElementById('.buyClickerBtn').disabled = true);
	}
});

buyMultiplierBtn.addEventListener('click', () => {
	if (donutGame.donutCount >= donutGame.multiplierCost) {
		console.log('multiplier purchase: GRANTED');
		donutGame.addMultiplier();
		myDonutsDiv.appendChild(donutCount);
		donutCount.innerText = donutGame.donutCount.toFixed(2) + ' donuts';
		myDonutsDiv.appendChild(clickerValue);
		clickerValue.innerText =
			donutGame.clickValue.toFixed(2) + ' donuts per click';
		myDonutsDiv.appendChild(clickerCountOne);
		clickerCountOne.innerText = donutGame.clickerCount + ' auto clickers';
		myDonutsDiv.appendChild(numAutoCPS);
		numAutoCPS.innerText = 'per second: ' + donutGame.autoCPS.toFixed(2);
		myMultipliersDiv.appendChild(numMultipliers);
		numMultipliers.innerText = 'Multipliers: ' + donutGame.multiplierCount;
		myMultipliersDiv.appendChild(multiplierPrice);
		multiplierPrice.innerText =
			'Cost: ' + donutGame.multiplierCost.toFixed(2) + ' donuts';
		document.getElementById('.buyMultiplierBtn').disabled = false;
	} else if (donutGame.donutCount < donutGame.multiplierCost) {
		console.log('multiplier purchase: DENIED');
		return (document.getElementById('.buyMultiplierBtn').disabled = true);
	}
});

resetGameBtn.addEventListener('click', () => {
	console.log(' reset game event ');
	donutGame.resetGame();
});
