import DonutMaker from './DonutMaker';
const container = (document.querySelector('.container')),
myContainerDiv = document.getElementById('container');

const donutGame = new DonutMaker(0, 0, 100, 0, 10, 1, 1);

const donutClickerBtn = document.querySelector('.donutClickerBtn'),
	myDonutsDiv = document.getElementById('myDonuts');

const buyClickerBtn = document.querySelector('.buyClickerBtn'),
	myClickersDiv = document.getElementById('myClickers');

const buyMultiplierBtn = document.querySelector('.buyMultiplierBtn'),
	myMultipliersDiv = document.getElementById('myMultipliers');

const resetGameBtn = document.querySelector('.resetGameBtn'),
	footContainerDiv = document.getElementById('footContainer');

container.addEventListener('mouseover', () => {
	console.log('change event');
	donutGame.findDonutCount();
	myDonutsDiv.appendChild(donutCount);
	donutCount.innerText = donutGame.donutCount.toFixed(2) + ' donuts';	myDonutsDiv.appendChild(clickerValue);
	clickerValue.innerText = 'donuts made per click: ' + donutGame.clickValue.toFixed(3);

})

donutClickerBtn.addEventListener('click', () => {
	donutGame.click();
	myDonutsDiv.appendChild(donutCount);
	donutCount.innerText = donutGame.donutCount.toFixed(2) + ' donuts';
	myDonutsDiv.appendChild(clickerValue);
	clickerValue.innerText = 'donuts made per click: ' + donutGame.clickValue.toFixed(3);
});

buyClickerBtn.addEventListener('click', () => {
	if (donutGame.donutCount >= donutGame.clickerCost) {
		console.log('clicker purchase: granted')
		donutGame.addClicker();
		myDonutsDiv.appendChild(donutCount);
		donutCount.innerText = donutGame.donutCount.toFixed(2) + ' donuts';
		myDonutsDiv.appendChild(clickerValue);
		clickerValue.innerText =
			'donuts made per click: ' + donutGame.clickValue.toFixed(3);
		myClickersDiv.appendChild(numClickers);
		numClickers.innerText = 'Own: ' + donutGame.clickerCount + ' clickers';
		myClickersDiv.appendChild(clickerPrice);
		clickerPrice.innerText = 'Price: ' + donutGame.clickerCost.toFixed(2) + ' donuts';
		document.getElementById('.buyClickerBtn').disabled = false;
	} else if (donutGame.donutCount < donutGame.clickerCost) {
		console.log('clicker purchase: denied')
		return (document.getElementById('.buyClickerBtn').disabled = true);
	}
});

buyMultiplierBtn.addEventListener('click', () => {
	console.log('multiplier event ');
	if (donutGame.donutCount >= donutGame.multiplierCost) {
		donutGame.addMultiplier();
		myDonutsDiv.appendChild(donutCount);
		donutCount.innerText = donutGame.donutCount.toFixed(2) + ' donuts';
		myDonutsDiv.appendChild(clickerValue);
		clickerValue.innerText =
			'donuts made per click: ' + donutGame.clickValue.toFixed(3);
		myMultipliersDiv.appendChild(numMultipliers);
		numMultipliers.innerText =
			'Own: ' + donutGame.multiplierCount + ' multipliers';
		myMultipliersDiv.appendChild(multiplierPrice);
		multiplierPrice.innerText =
			'Price: ' + donutGame.multiplierCost.toFixed(2) + ' donuts';
		document.getElementById('.buyMultiplierBtn').disabled = false;
	} else if (donutGame.donutCount < donutGame.multiplierCost) {
		return (document.getElementById('.buyMultiplierBtn').disabled = true);
	}
});

resetGameBtn.addEventListener('click', () => {
	console.log(' reset game event ');
	return new DonutMaker;
})