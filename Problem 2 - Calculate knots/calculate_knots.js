var speed1 = 20,
    speed2 = 112,
    speed3 = 400,
    one_km_per_hour_in_knots = 0.539956803455724,
    knots1 = speed1 * one_km_per_hour_in_knots,
    knots2 = speed2 * one_km_per_hour_in_knots,
    knots3 = speed3 * one_km_per_hour_in_knots,
    result1 = Math.round(knots1 * 100) / 100,
    result2 = Math.round(knots2 * 100) / 100,
    result3 = Math.round(knots3 * 100) / 100;

console.log(result1);
console.log(result2);
console.log(result3);