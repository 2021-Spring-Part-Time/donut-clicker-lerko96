import DonutMaker from './DonutMaker';
// const container = (document.querySelector('.container')),
// myContainerDiv = document.getElementById('container');
const donutGame = new DonutMaker(0, 0, 100, 0, 10, 1, 1);

const donutClickerBtn = document.querySelector('.donutClickerBtn'),
	myDonutsDiv = document.getElementById('myDonuts');

const buyClickerBtn = document.querySelector('.buyClickerBtn'),
	myClickersDiv = document.getElementById('myClickers');

const buyMultiplierBtn = document.querySelector('.buyMultiplierBtn'),
	myMultipliersDiv = document.getElementById('myMultipliers');

// myContainerDiv.
// function disableBtn() {
// 	clickerCost = 0;
// 	switch (donutGame.buyClickerBtn.disabled) {
// 		case donutGame.clickerCost > donutGame.donutCount:
// 			document.getElementById('.buyClickerBtn').disabled = false;
// 			break;
// 		default:
// 			document.getElementById('.buyClickerBtn').disabled = true;
// 	}
// }

donutClickerBtn.addEventListener('click', () => {
	donutGame.click();
	myDonutsDiv.appendChild(donutCount);
	donutCount.innerText = donutGame.donutCount + ' donuts';
});

buyClickerBtn.addEventListener('click', () => {
	console.log(' clicker event ');
	// donutGame.disableBtn();
	if (donutGame.donutCount >= donutGame.clickerCost) {
		donutGame.addClicker();
		myDonutsDiv.appendChild(donutCount);
		donutCount.innerText = donutGame.donutCount + ' donuts';
		myClickersDiv.appendChild(numClickers);
		numClickers.innerText = 'Own: ' + donutGame.clickerCount + ' clickers';
		myClickersDiv.appendChild(clickerPrice);
		clickerPrice.innerText = 'Price: ' + donutGame.clickerCost + ' donuts';
		document.getElementById('.buyClickerBtn').disabled = false;
	} else if (donutGame.donutCount < donutGame.clickerCost) {
		return (document.getElementById('.buyClickerBtn').disabled = true);
	}

	// donutGame.findClickerCount();
});

buyMultiplierBtn.addEventListener('click', () => {
	console.log('multiplier event ');
	// if (donutGame.donutCount < donutGame.multiplierCost) {
	//   return (document.getElementById('.buyMultiplierBtn').disabled = true);
	// } else if (donutGame.donutCount >= donutGame.multiplierCost) {
	donutGame.addMultiplier();
	myDonutsDiv.appendChild(donutCount);
	donutCount.innerText = donutGame.donutCount + ' donuts';
	myMultipliersDiv.appendChild(numMultipliers);
	numMultipliers.innterText =
		'Own: ' + donutGame.multiplierCount + ' multipliers';
	myMultipliersDiv.appendChild(multiplierPrice);
	multiplierPrice.innterText =
		'Price: ' + donutGame.multiplierCost + ' donuts';
	//   return (document.getElementById('.buyMultiplierBtn').disabled = false);
	// }
});
