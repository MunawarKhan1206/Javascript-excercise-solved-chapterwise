//  Chapter 9-11
// Question 1
// var city = prompt("Enter the name of your city:");

// if (city == "karachi") {
//     alert("Welcome to the city of lights!");
// } 

// else {
//     alert("Welcome!");
// }
// Question 2
// var gender = prompt("Enter your gender:");
// if (gender == "male") {
//     alert("Good Morning Sir!");
// }
// if (gender == "female") {
//     alert("Good Morning Ma'am!");
// }
// Question 3
// var signal = prompt("Enter the color of signal: (red/yellow/green)");
// if (signal == "red") {
//     alert("Must Stop!");
// }
// if (signal == "yellow") {
//     alert("Ready to move!");
// }
// if (signal == "green") {
//     alert("Move now!");
// }
// Question 4
// var fuel = +prompt("Enter remaining fuel in car(in litres):");
// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }
// else (fuel >= 0.25) 
// {
//         alert("No need to refill the fuel in your car");
// }
// Question 5
// var a = 4;
//  if (++a === 5){
// alert("given condition for variable a is true");
//  }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if ("car" < "cat"){
// alert("car is smaller than cat");
// }
// Question 6
// var sub1 = +prompt("Enter marks of the first subject:");
// var sub2 = +prompt("Enter marks of the second subject:");
// var sub3 = +prompt("Enter marks of the third subject:");
// var totalMarks = 300;
// var obtainedMarks = sub1 + sub2 + sub3;
// var percentage = obtainedMarks / totalMarks * 100;
// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.write("<h1>Marks Sheet</h1>");
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage + "%");
// document.write("<br>Grade: " + grade);
// document.write("<br>Remarks: " + remarks);
// Question 7
// var secretNumber = 7 ;
// var guess = +prompt("Guess the secret number: Till 10");
// if (guess == secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (guess == ++secretNumber) {
//     alert("Close enough to the correct answer");
// }
//  else if (guess == 6  ) {
//     alert("Close enough to the correct answer");
// }
// else {
//     alert("Wrong answer");
// }
//  Question 8
// var number = +prompt("Enter a number:");
// if (number % 3 == 0) {
//     alert("The number is divisible by 3");
// }
// else {
//     alert("The number is not divisible by 3");    
// }
// Question 9
// var number = +prompt("Enter a number:");
// if (number % 2 == 0) {
//     alert("The number is even");
// }
// else {
//     alert("The number is odd");
// }
// Question 10 
// var temperature = +prompt("Enter the temperature:");
// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// }
// Question 11
// var firstNumber = +prompt("Enter first number:");
// var secondNumber = +prompt("Enter second number:");
// var operator = prompt("Enter operator:");
// var result;
// if (operator == "+") {
//     result = firstNumber + secondNumber;
// } else if (operator == "-") {
//     result = firstNumber - secondNumber;
// } else if (operator == "*") {
//     result = firstNumber * secondNumber;
// } else if (operator == "/") {
//     result = firstNumber / secondNumber;
// } else if (operator == "%") {
//     result = firstNumber % secondNumber;
// } else {
//     alert("Invalid operator");
// }
// alert(result);
// Chapter 12-13
// Question 1
// var character = prompt("Enter a character:");
// if (character >= "a" && character <= "z") {
//    alert("It is an Lowercase");
// }
// else if (character >= "A" && character <= "Z") {
//    alert("It is an Uppercase");
// }
// else if (character >= "0" && character <= "9") {
//    alert("It is a number");
// }
// else if (character >= "!" && character <= "/") {
//    alert("It is a special character");
// }
// else if (character >= ":" && character <= "@") {
//    alert("It is a special character");
// }
// else if (character >= "[" && character <= "`") {
//    alert("It is a special character");
// }
// else if (character >= "{" && character <= "~") {
//    alert("It is a special character");
// }
// Question 2
// var a = +prompt("Enter first number:");
// var b = +prompt("Enter second number:");
// if (a > b) {
//     alert(a + " is greater than " + b);
// }
// else if (a < b) {
//     alert(b + " is greater than " + a);
// }
// else if (a == b) {
//     alert(a + " is equal to " + b);
// }
// Question 3
// var number = +prompt("Enter a number:");
// if (number > 0) {
//      alert("The number is positive");
//  }
// else if (number < 0) {
//      alert("The number is negative");
// }
// else if (number == 0) {
//     alert("The number is zero");
//  }
// Question 4 
// var vowel = prompt("Enter a character:");
// if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u") {
//      alert("True");
//  }
//  else {
//      alert("False");
//  }
//  Question 5
// var correctPassword = "12345";
// var password = prompt("Enter your password:");
//  if (password == "") {
//           alert("Please enter your password");
// }
//  else if (password == correctPassword) {
//      alert("Correct! The password you entered matches the original password");
//  }
//  else {
//      alert("Incorrect password");
// }
