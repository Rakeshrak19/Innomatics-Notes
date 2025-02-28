
function applyCoupon(orderAmount, couponCode) {
    let finalAmount = orderAmount;
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        finalAmount -= finalAmount * 0.10;
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
    } else {
        return finalAmount;
    }
    return finalAmount;
}
console.log(applyCoupon(600, "DISCOUNT10"));
console.log(applyCoupon(250, "FREESHIP"));
console.log(applyCoupon(150, "DISCOUNT10")); 
console.log(applyCoupon(300, "FREESHIP"));
console.log(applyCoupon(700, "INVALIDCODE"));
