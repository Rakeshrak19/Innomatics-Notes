
function isEligibleForJob(age, experience, qualification) {
    const isAgeEligible = age >= 21 && age <= 55;
    const isExperienceEligible = experience >= 2;
    const isQualificationEligible = qualification === "Bachelor's Degree";
    return isAgeEligible && isExperienceEligible && isQualificationEligible;
}
console.log(isEligibleForJob(30, 3, "Bachelor's Degree"));
console.log(isEligibleForJob(20, 5, "Bachelor's Degree"));
console.log(isEligibleForJob(40, 1, "Bachelor's Degree"));
console.log(isEligibleForJob(35, 4, "High School"));
console.log(isEligibleForJob(55, 2, "Bachelor's Degree"));
