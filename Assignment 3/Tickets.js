function calculateTicketPrice(age, showTime) {
    let price = 12;
    if (showTime < 17) {
        price *= 0.80; 
    }
    if (age < 12) {
        price *= 0.60;
    } else if (age > 60) {
        price *= 0.70;
    }
    return price;
}
console.log(calculateTicketPrice(10, 14));
console.log(calculateTicketPrice(65, 16));
console.log(calculateTicketPrice(30, 18));
console.log(calculateTicketPrice(8, 17));