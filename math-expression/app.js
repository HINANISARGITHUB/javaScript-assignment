///////////// 1  ////////////

let a = 3;
let b = 5;
let c = a + b;
document.writeln(`<h2> Sum of ${a} and ${b} is ${c} </h2>`);

///////////////// 2 ///////////////////

let a1 = 3;
let b1 = 5;
let c1 = a1 - b1;
document.writeln(`<h2> Subtraction of ${a1} and ${b1} is ${c1} </h2>`);

let a2 = 3;
let b2 = 5;
let c2 = a2 * b2;
document.writeln(`<h2> Multiplication of ${a2} and ${b2} is ${c2} </h2>`);

let a3 = 3;
let b3 = 5;
let c3 = a3 * b3;
document.writeln(`<h2> Division of ${a3} and ${b3} is ${c3} </h2>`);

let a4 = 3;
let b4 = 5;
let c4 = a4 % b4;
document.writeln(`<h2> Division of ${a4} and ${b4} is ${c4} </h2>`);

//////////////////// 3 //////////////////

let number;
document.writeln(`Value after variable decleration is ${number} <br>`);

number = 5;
document.writeln(`Initial value: ${number} <br>`);

++number;
console.log(number);

document.writeln(`Value after increment is: ${number} <br>`);

number = number + 7;

document.writeln(`Value after addition is: ${number} <br>`);

--number;
document.writeln(`Value after decrement is: ${number} <br>`);

number = number % 3;
document.writeln(`the reminder is: ${number}`);

////////////////// 4  //////////////////

let ticketPrice = 600;
document.writeln(
  `<h2> Total cost to buy 5 tickets to a movie is ${ticketPrice * 5}PKR <br>`
);

document.writeln("<h2>Table of 4 </h2>");
let num = 4;
for (let i = 1; i <= 10; i++) {
  document.writeln(num, " x ", i, " = ", num * i, "<br>");
}

/////////////// 5 ///////////////////
let celciusTempreture = 25;
let convertFahrenheit = (celciusTempreture * 9) / 5 + 32;
document.writeln(`<h1>${celciusTempreture}°C  is ${convertFahrenheit}°F</h1>`);

let fahrenheit = 70;
let convertCelcius = ((fahrenheit - 32) * 5) / 9;
let fixed = convertCelcius.toFixed(2);
document.writeln(`<h1>${fahrenheit}°F is ${fixed}°C </h1>`);

//////////////// 6 //////////////////

document.writeln("<h1> Shopping Cart </h1>");
let priceOfItem1 = 650;
let priceOfItem2 = 100;
let orderQuantityOfItem1 = 3;
let orderQuantityOfItem2 =  7;
let shippingCharges = 100;

document.writeln(`Price of item 1 is ${priceOfItem1} <br>`);
document.writeln(`Price of item 2 is ${priceOfItem2} <br>`);
document.writeln(`Quantity of item 1 is ${orderQuantityOfItem1} <br>`);
document.writeln(`Quantity of item 2 is ${orderQuantityOfItem2} <br>`);
document.writeln(`Shipping Charges ${shippingCharges} <br><br>`);

let Quantity1 = 650 * 3;
let Quantity2 = 100 * 7;
let add = Quantity1 + Quantity2+ shippingCharges;

document.writeln(`Total cost of your order is ${add} <br><br>`);

///////////////// 7 ///////////////////////

let totalMark = 980;
let markObtained = 804;
let percentage = markObtained / totalMark * 100;
let fixedPercentage = percentage.toFixed(1);


document.writeln("Total marks: ", totalMark, "<br>");
document.writeln("Marks obtained: ", markObtained, "<br>");
document.writeln("Percentage: ", fixedPercentage);

////////////////// 8 /////////////////////////

let convertUsDollar = 10 * 104.80;
let convertSaudiRiyal = 25 * 28;
let addCurrency = convertUsDollar + convertSaudiRiyal;
document.writeln(`<h1> Currency in PKR </h1>`);
document.writeln(`Total currency in PKR: ${addCurrency}`);

////////////////// 9 ////////////////////////

let airthmeticSequence = 5 * 10 / 2;
console.log(airthmeticSequence);

//////////////// 10 /////////////////////

let currentYear = 2016;
let birthYear = 1992;
let ages = currentYear - birthYear;
console.log(ages);

document.writeln(`<h2> Age Calculator </h2>`);
document.writeln(`Current Year: ${currentYear} <br>`);
document.writeln(`Birth Year: ${birthYear} <br>`);
document.writeln(`Your age is: ${ages}`);

// let currentYear1 = Number(prompt("Enter your current year"));
// let birthYear1 = Number(prompt("Enter your birth year"))
// let ages1 = currentYear1 - birthYear1;
// console.log(ages1);


///////////////////// 11 //////////////////

let radius = 20;
let pi = 3.142;
let circumference = 2 * 3.142 * 20;

let areaOfCircle = 3.142 * 20 * 20;

document.writeln(`<h1> The Geometrizer </h1>`);
document.writeln(`Radius of a circle is: ${radius} <br>`);
document.writeln(`The circumference is: ${circumference} <br>`);
document.writeln(`The area is: ${areaOfCircle}`);

/////////////////// 12 ////////////////////////

let favoriteSnacks = "chocalatechip";
let currentAge = 15;
let maximumAge = 65;
let estimatedAmount = 3;
let calculateAmount = 5;

let remainingYear = maximumAge - currentAge;
let totalEatNeed = remainingYear * 365 * 3
console.log(totalEatNeed);


document.writeln(`<h1> The Lifetime Supply Caculator</h1>`);
document.writeln(`Favorite Snacks: ${favoriteSnacks} <br>`);
document.writeln(`Current age: ${currentAge} <br>`);
document.writeln(`Estimated Maximum Age: ${maximumAge} <br>`);
document.writeln(`Amount of snacks per day: ${estimatedAmount} <br>`);
document.writeln(`you will need ${totalEatNeed} ${favoriteSnacks} to last you until the ripe old age ${maximumAge}`);






 







