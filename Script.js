document.addEventListener('DOMContentLoaded', function() {
    showProblem('atm-problem'); // Show ATM problem by default on page load
});

function showProblem(problemId) {
    const problemCards = document.querySelectorAll('.problem-card');
    problemCards.forEach(card => {
        card.style.display = 'none'; // Hide all problem cards
    });

    const selectedProblem = document.getElementById(problemId);
    if (selectedProblem) {
        selectedProblem.style.display = 'block'; // Show the selected problem card
    }
}

// 1. ATM Withdrawal System
function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) {
        return "Incorrect PIN";
    }
    if (amount > balance) {
        return "Insufficient Funds";
    }
    if (amount % 100 !== 0) {
        return "Enter amount in multiples of 100";
    }
    return "Withdrawal Successful. Please take your cash.";
}

function solveATM() {
    const balance = parseFloat(document.getElementById('atm-balance').value);
    const amount = parseFloat(document.getElementById('atm-amount').value);
    const pin = document.getElementById('atm-set-pin').value; // Use set pin as the correct PIN
    const enteredPin = document.getElementById('atm-entered-pin').value;
    const result = atmWithdrawal(balance, amount, pin, enteredPin);
    document.getElementById('atm-result').textContent = result;
}

// 2. Online Shopping Discount & Free Shipping
function calculateFinalAmount(orderAmount) {
    let discount = 0;
    let shipping = 0;

    if (orderAmount > 1000) {
        discount = 0.20; // 20% discount
    } else if (orderAmount >= 500) {
        discount = 0.10; // 10% discount
    }

    let discountedAmount = orderAmount * (1 - discount);
    let discountValue = orderAmount * discount;

    if (discountedAmount < 50 && discountedAmount > 0) { // Added discountedAmount > 0 to avoid shipping charge for 0 order amount
        shipping = 10; // Express shipping
    }

    return {
        finalAmount: (discountedAmount + shipping).toFixed(2),
        discountAmount: discountValue.toFixed(2),
        shippingAmount: shipping.toFixed(2)
    };
}

function solveShopping() {
    const orderAmount = parseFloat(document.getElementById('order-amount').value);
    if (isNaN(orderAmount)) {
        alert("Please enter a valid order amount.");
        return;
    }

    const results = calculateFinalAmount(orderAmount);

    document.getElementById('discount-amount').textContent = results.discountAmount;
    document.getElementById('shipping-amount').textContent = results.shippingAmount;
    document.getElementById('final-amount').textContent = results.finalAmount;
}

// 3. Student Grading System with Extra Credit
function calculateGrade(marks, attendance) {
    let grade;
    let finalMarks = marks;

    if (attendance > 90) {
        finalMarks += 5; // Extra credit
    }

    if (finalMarks >= 90) {
        grade = "A";
    } else if (finalMarks >= 80) {
        grade = "B";
    } else if (finalMarks >= 70) {
        grade = "C";
    } else if (finalMarks >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }
    return grade;
}

function solveGrading() {
    const marks = parseFloat(document.getElementById('marks').value);
    const attendance = parseFloat(document.getElementById('attendance').value);
    const grade = calculateGrade(marks, attendance);
    document.getElementById('grading-result').textContent = "Grade: " + grade;
}

// 4. Smart Traffic Light System
function trafficLightControl(density) {
    switch (density) {
        case "Heavy Traffic":
            return "Green for 60 seconds";
        case "Moderate Traffic":
            return "Green for 40 seconds";
        case "Light Traffic":
            return "Green for 20 seconds";
        default:
            return "Invalid traffic density";
    }
}

function solveTraffic() {
    const density = document.getElementById('traffic-density').value;
    const signalTime = trafficLightControl(density);
    document.getElementById('traffic-result').textContent = signalTime;
}

// 5. Movie Ticket Pricing with Time and Age Discount
function calculateTicketPrice(age, showTime) {
    let price = 12; // Standard price
    const time = parseInt(showTime.split(':')[0]); // Get hour from HH:mm

    if (time < 17) { // Matinee before 5 PM (17:00)
        price *= 0.80; // 20% discount
    }
    if (age > 60) {
        price *= 0.70; // 30% discount for seniors
    } else if (age < 12) {
        price *= 0.60; // 40% discount for children
    }

    return price.toFixed(2);
}

function solveMovie() {
    const age = parseInt(document.getElementById('age').value);
    const showTime = document.getElementById('show-time').value;
    const ticketPrice = calculateTicketPrice(age, showTime);
    document.getElementById('movie-result').textContent = "Ticket Price: $" + ticketPrice;
}

// 6. Job Application Filter
function isEligibleForJob(age, experience, qualification) {
    if (age >= 21 && age <= 55 && experience >= 2 && qualification.toLowerCase() === "bachelor's degree") {
        return "Eligible for job";
    } else {
        return "Not eligible for job";
    }
}

function solveJob() {
    const age = parseInt(document.getElementById('job-age').value);
    const experience = parseInt(document.getElementById('experience').value);
    const qualification = document.getElementById('qualification').value;
    const eligibility = isEligibleForJob(age, experience, qualification);
    document.getElementById('job-result').textContent = eligibility;
}

// 7. E-commerce Coupon Redemption
function applyCoupon(orderAmount, couponCode) {
    let finalPrice = orderAmount;

    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        finalPrice = orderAmount * 0.90; // 10% off
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        return "Free Shipping applied. Final price: $" + orderAmount.toFixed(2);
    } else if (couponCode) {
        return "Invalid or inapplicable coupon";
    }

    return finalPrice.toFixed(2);
}

function solveCoupon() {
    const orderAmount = parseFloat(document.getElementById('coupon-order-amount').value);
    const couponCode = document.getElementById('coupon-code').value;
    const couponResult = applyCoupon(orderAmount, couponCode);
    if (typeof couponResult === 'string') {
        document.getElementById('coupon-result').textContent = couponResult;
    } else {
        document.getElementById('coupon-result').textContent = "Final Price: $" + couponResult;
    }
}


// 8. Fitness Membership Plan
function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (planType === "VIP") {
        return "VIP plan is suggested: Gym + Trainer + Diet Plan ($80/month)";
    } else if (planType === "Premium" || wantsTrainer) {
        return "Premium plan is suggested: Gym + Personal Trainer ($50/month)";
    } else {
        return "Basic plan is suggested: Gym Access Only ($20/month)";
    }
}

function solveFitness() {
    const planType = document.getElementById('plan-type').value;
    const wantsTrainer = document.getElementById('wants-trainer').checked;
    const wantsDietPlan = document.getElementById('wants-diet-plan').checked;
    const suggestedPlan = choosePlan(planType, wantsTrainer, wantsDietPlan);
    document.getElementById('fitness-result').textContent = suggestedPlan;
}

// 9. Electricity Bill Calculation with Peak Hours
function calculateElectricityBill(units, timeOfDay) {
    let rate;
    if (units <= 100) {
        rate = 5;
    } else if (units <= 300) {
        rate = 4;
    } else {
        rate = 3;
    }

    let totalBill = units * rate;

    if (timeOfDay === "Peak hours") {
        totalBill *= 1.10; // Extra 10% charge
    }

    return totalBill.toFixed(2);
}

function solveElectricity() {
    const units = parseFloat(document.getElementById('units').value);
    const timeOfDay = document.getElementById('time-of-day').value;
    const bill = calculateElectricityBill(units, timeOfDay);
    document.getElementById('electricity-result').textContent = "Total Bill: $" + bill;
}

// 10. Flight Ticket Booking System
function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    let additionalCharge = 0;
    let discount = 0;

    if (classType === "Business") {
        additionalCharge += 200;
    } else if (classType === "First") {
        additionalCharge += 500;
    }

    if (luggageWeight > 20) {
        additionalCharge += Math.ceil((luggageWeight - 20) / 10) * 50; // $50 per 10kg extra
    }

    let totalFare = baseFare + additionalCharge;

    if (isStudent) {
        discount += 0.15; // 15% off for students
    } else if (isSenior) {
        discount += 0.10; // 10% off for seniors
    }

    totalFare *= (1 - discount);
    return totalFare.toFixed(2);
}

function solveFlight() {
    const classType = document.getElementById('class-type').value;
    const luggageWeight = parseFloat(document.getElementById('luggage-weight').value);
    const isStudent = document.getElementById('is-student').checked;
    const isSenior = document.getElementById('is-senior').checked;
    const finalFare = calculateFlightFare(classType, luggageWeight, isStudent, isSenior);
    document.getElementById('flight-result').textContent = "Final Fare: $" + finalFare;
}