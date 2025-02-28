
function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    let additionalCharge = 0;
    if (classType === "Business") {
        additionalCharge += 200;
    } else if (classType === "First") {
        additionalCharge += 500;
    }
    if (luggageWeight > 20) {
        const extraLuggage = luggageWeight - 20; 
        additionalCharge += Math.ceil(extraLuggage / 10) * 50;
    }
    let totalFare = baseFare + additionalCharge;
    if (isStudent) {
        totalFare *= 0.85;
    } else if (isSenior) {
        totalFare *= 0.90;
    }
     return totalFare;
}
console.log(calculateFlightFare("Economy", 15, false, false));
console.log(calculateFlightFare("Business", 25, false, false));
console.log(calculateFlightFare("First", 30, true, false));
console.log(calculateFlightFare("Business", 35, false, true));
console.log(calculateFlightFare("First", 50, true, true));
