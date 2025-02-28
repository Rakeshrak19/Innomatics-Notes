
function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    let suggestedPlan = "";
    if (planType === "Basic") {
        suggestedPlan = "Basic Plan: $20/month (Only gym access)";
    } else if (planType === "Premium") {
        if (wantsTrainer) {
            suggestedPlan = "Premium Plan: $50/month (Gym + Personal Trainer)";
        } else {
            suggestedPlan = "Premium Plan: $50/month (Gym access only, no trainer)";
        }
    } else if (planType === "VIP") {
        if (wantsDietPlan) {
            suggestedPlan = "VIP Plan: $80/month (Gym + Trainer + Diet Plan)";
        } else {
            suggestedPlan = "VIP Plan: $80/month (Gym + Trainer, no diet plan)";
        }
    } else {
        suggestedPlan = "Invalid plan type. Please choose Basic, Premium, or VIP.";
    }

    return suggestedPlan;
}
console.log(choosePlan("Basic", false, false));
console.log(choosePlan("Premium", true, false));
console.log(choosePlan("Premium", false, false));
console.log(choosePlan("VIP", true, true));
console.log(choosePlan("VIP", true, false));
console.log(choosePlan("Gold", false, false));
