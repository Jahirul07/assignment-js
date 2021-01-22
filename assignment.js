// ----kilometerToMeter----

function kilometerToMeter(km) {
    var meter = Math.floor(km * 1000);
   
    return meter + " ";
}
var result = kilometerToMeter(7.4);
console.log(result);

// ----budgetCalculator-----

 function budgetCalculator(num1, num2, num3) {
    var watch = num1 * 50;
    var phone = num2 * 100;
    var laptop = num3 * 500;
    var totalPrice = (watch + phone + laptop);
    return totalPrice;  
}
console.log(budgetCalculator(3, 4, 7));

// ----hotelCost----

function hotelCost(daySpend) {

    var Days = 0;
    if (daySpend >= 10) {
        Days = daySpend * 100;
    }
    else if (daySpend >= 20) {
        var firstPart = 10 * 100;
        var remaining = daySpend - 10;
        var secondPart = remaining * 80;
        Days = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = daySpend - 20;
        var thirtPart = remaining * 50;
        Days = firstPart + secondPart + thirtPart;

    }
    return Days;
}
var count = hotelCost(25);
console.log(count);




 

