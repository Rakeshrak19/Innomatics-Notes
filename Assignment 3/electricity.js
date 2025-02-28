function calculateElectricityBill(units, timeOfDay) {
    let rate;
    if (units < 100) {
        rate = 5;
    } else if (units <= 300) {
        rate = 4;
    } else {
        rate = 3;
    }
    let totalBill = units * rate;
    if (timeOfDay < 8 || timeOfDay >= 20) {
        totalBill *= 1.10; 
    }
    return totalBill;
}
console.log(calculateElectricityBill(50, 10));
console.log(calculateElectricityBill(150, 15));
console.log(calculateElectricityBill(350, 22)); 
console.log(calculateElectricityBill(80, 21)); 
console.log(calculateElectricityBill(200, 7));