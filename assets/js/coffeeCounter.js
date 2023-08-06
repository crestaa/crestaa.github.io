function calculateCoffee() {
    const startDate = new Date('2020-09-21');
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;
    const hoursPassed = Math.floor(timeDifference / (1000 * 60 * 60)); 

    const coffeeCounter = Math.floor(hoursPassed / (24 / 5));
    document.getElementById('coffee-counter').innerText = coffeeCounter;
}

calculateCoffee();