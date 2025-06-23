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

number = number % 3
document.writeln(`the reminder is: ${number}`);


////////////////// 4  //////////////////

let ticketPrice = 600;
document.writeln(`<h2> Total cost to buy 5 tickets to a movie is ${ticketPrice*5}PKR <br>`);

document.writeln("<h2>Table of 4 </h2>")
let num = 4;
for(let i = 1; i<=10; i++) {
    document.writeln(num, " x ", i , " = ", (num * i), "<br>" );
}







