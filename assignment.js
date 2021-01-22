// ----------------------kilometerToMeter-----------------------------!

function kilometerToMeter(km) {
    var meter = Math.floor(km * 1000);

    return meter + " ";
}
var result = kilometerToMeter(7.4);
console.log(result);

// -----------------------budgetCalculator-----------------------------!

function budgetCalculator(num1, num2, num3) {
    var watch = num1 * 50;
    var phone = num2 * 100;
    var laptop = num3 * 500;
    var totalPrice = (watch + phone + laptop);
    return totalPrice;
}
console.log(budgetCalculator(3, 4, 7));

// ---------------------------hotelCost-----------------------------!

function hotelCost(daySpend) {

    var Days = 0;
    if (daySpend <= 10) {
        var firstPartCost = daySpend * 100;

    }
    else if (daySpend <= 20) {
        var firstPartCost = 10 * 100;
        var discount = daySpend - 10;
        var secondPartCost = discount * 80;
        Days = firstPartCost + secondPartCost;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var discount = daySpend - 20;
        var thirtPartCost = discount * 50;
        Days = firstPartCost + secondPartCost + thirtPartCost;

    }
    return Days;
}
var count = hotelCost(15);
console.log(count);

// -------------------------megaFriend--------------------------!

var friends = ["Emon", "Sifat", "Sujon", "Rimel"];

function megaFriend(friends) {
    var maxword = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var element = friends[i];
        if (element.length > maxword.length) {
            maxword = element;
        }

    }
    return maxword;
}



