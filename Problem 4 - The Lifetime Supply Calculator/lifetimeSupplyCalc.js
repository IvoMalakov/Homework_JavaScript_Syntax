function calcSupply(age, maxAge, food, foodPerDay) {
    var yearsLeft = maxAge - age,
        daysInOneYear = 365,
        daysLeft = yearsLeft * daysInOneYear,
        kgsNeeded = foodPerDay * daysLeft;

    console.log(kgsNeeded + "kg of " + food + " would be enought until I am " + maxAge + " years old.");
}

calcSupply(38, 18, "chocolate", 0.5);
calcSupply(20, 87, "fruits", 2);
calcSupply(16, 102, "nuts", 1.1);