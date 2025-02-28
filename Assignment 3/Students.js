function calculateGrade(marks, attendance) {
    if (attendance > 90) {
        marks += 5;
    }
    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log(calculateGrade(85, 95));
console.log(calculateGrade(75, 85));
console.log(calculateGrade(58, 92));
console.log(calculateGrade(90, 91));