'use strict';

    var a = prompt("Enter the value of A","0"),
        b = prompt("Enter the value of B","0"),
        c = prompt("Enter the value of C","0"),
        discriminant = (b * b) - (4 * a * c),
        x1 = 0,
        x2 = 0,
        denom = 2 * a;

    if(discriminant < 0) {
        document.writeln("The equation has no real roots");
    } else if(discriminant === 0) {
        x1 = -b / denom;
        document.writeln("The equation has only one real root x = " + x1);
    } else {
        x1 = (-b - Math.sqrt(discriminant)) / denom;
        x2 = (-b + Math.sqrt(discriminant)) / denom;
        document.writeln("The equation has two real roots: x1 = " + x1 + " and x2 = " + x2);
    }