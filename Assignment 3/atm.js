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
    return balance - amount;
}
const currentBalance = 1500;
const withdrawalAmount = 300;
const correctPin = "1234";
const enteredPin = "1234";
const result = atmWithdrawal(currentBalance, withdrawalAmount, correctPin, enteredPin);
console.log(result);