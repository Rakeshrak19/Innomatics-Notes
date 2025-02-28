
function calculateFinalAmount(orderAmount) {
    let discount = 0;
    if (orderAmount > 1000) {
        discount = 0.20;
    } else if (orderAmount >= 500) {
        discount = 0.10;
    }
    const discountedAmount = orderAmount - (orderAmount * discount);
    let shippingCharge = 0;
    if (discountedAmount > 50) {
        shippingCharge = 0;
    } else {
        shippingCharge = 10;
    }
    const finalAmount = discountedAmount + shippingCharge;
    return finalAmount;
}
const orderAmount1 = 1200;
const orderAmount2 = 700;
const orderAmount3 = 30;

console.log(calculateFinalAmount(orderAmount1));
console.log(calculateFinalAmount(orderAmount2));
console.log(calculateFinalAmount(orderAmount3));
