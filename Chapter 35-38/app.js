//chapter 35-38
// 1. Write a function that displays current date & time in your browser
// function displayDate() {
//     let date = new Date();
//     document.write(date);
// // }
// displayDate();
// 2. Write a function that takes first & last name and then it greets the user using his full name
// function greet() {
//     let firstName = prompt("Enter your first name");
//     let lastName = prompt("Enter your last name");
// document.write("the first name is " + firstName + " and last name is " + lastName);   
//    document.write("Hello " + " Mr." + firstName + " " + lastName);
//  var empty = "";
//     if (firstName == empty) {
//         alert
//         ("Please enter your first  name");
//     }
//     if (lastName == empty) {
//         alert    
//     ("Please enter your last name");
//   }
   
// if (firstName == empty && lastName == empty) {
//     alert
//     ("Please enter your first and last name");
// }
// }
// greet();
// 3 .Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// function add() {
//     let firstNumber = +prompt("Enter first number");
//     let secondNumber = +prompt("Enter second number");
//     let sum = firstNumber + secondNumber;
//     document.write("The first number is " + firstNumber + " and the second number is " + secondNumber);
//     document.write("<br>The sum of two numbers is " + sum);
// }
// add();
// 4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser
// function calculate() {
//     // Get the values from the user
//     var num1 = parseFloat(prompt("Enter the first number:"));
//     var num2 = parseFloat(prompt("Enter the second number:"));
//     var operator = prompt("Enter the operator (+, -, *, /):");
//     var result;
//     if (operator === '+') {
//         result = num1 + num2;
//     } else if (operator === '-') {
//         result = num1 - num2;
//     } else if (operator === '*') {
//         result = num1 * num2;
//     } else if (operator === '/') {
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             result = 'Error: Division by zero';
//         }
//     } else {
//         result = 'Invalid operator';
//     }
//     document.write("The first number is " + num1 + "<br>The second number is " + num2 + "<br>The operator is " + operator + "<br>");
//     document.write(' The result is ' + result);
// }
// calculate();
// 5. . Write a function that squares its argument.
// function square() {
//     let number = +prompt("Enter a number");
//     let square = number * number;
//     document.write("The number is " + number + "<br>The square of the number is " + square);
// }
// square();
// 6. Write a function that computes factorial of a number.
// function factorial() {
//     let number = parseInt(prompt("Enter a number"));
//     if (isNaN(number) || number < 0) {
//         document.write("Please enter a valid non-negative number.");
//         return;
//     }
//     let factorial = 1;
//     for (let i = 1; i <= number; i++) {
//         factorial *= i;
//     }
//     document.write("The number is " + number + "<br>");
//     document.write("The factorial of the number is " + factorial);
// }
// factorial();
// // 7. Write a function that take start and end number as inputs & display counting in your browser
// function count() {
//     let start = parseInt(prompt("Enter the start number"));
//     let end = parseInt(prompt("Enter the end number"));
//     if (isNaN(start) || isNaN(end)) {
//         document.write("Please enter valid numbers.");
//         return;
//     }
//     if (start > end) {
//         document.write("Start number should be less than or equal to the end number.");
//         return;
//     }
//     document.write("The start number is " + start + "<br>");
//     document.write("The end number is " + end + "<br>");
//     document.write("Counting from " + start + " to " + end + " :<br>");
//     for (let i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }
// count();
// 8. Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2 Take base and perpendicular as inputs.Outer function : calculateHypotenuse() Inner function: calculateSquare()
// function calculateHypotenuse() {
//     let base = parseInt(prompt("Enter the base"));
//     let perpendicular = parseInt(prompt("Enter the perpendicular"));
//     if (isNaN(base) || isNaN(perpendicular)) {
//         document.write("Please enter valid numbers.");
//         return;
//     }
//     function calculateSquare() {
//         let hypotenuse = Math.sqrt(base * base + perpendicular * perpendicular);
//         document.write("The hypotenuse is " + hypotenuse);
//     }
//     calculateSquare();
// }
// calculateHypotenuse();
// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// // ii. Arguments as variables
// function calculateArea(width, height) {
//     let area = width * height;
//     document.write("The width is " + width + " and height is " + height + "<br>");
//     document.write("The area is " + area + "<br>");
//     document.write("the arguments are value given as " + width + " and " + height + " in the code " + "<br>");
//     return area
// }
// calculateArea(5, 10);
// let width = parseFloat(prompt("Enter the width"));
// let height = parseFloat(prompt("Enter the height"));
// function area(width, height) {
//     let area = width * height;
//     document.write("The width is " + width + " and height is " + height + "<br>");
//     document.write("The area is " + area + "<br>");
// }
// area(width, height)
// 10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
// function checkPalindrome() {
//     let string = prompt("Enter a string");
//     let reversedString = string.split('').reverse().join('');
//     if (string == reversedString) {
//         document.write("The string " + string + " is a palindrome");
//     } else {
//         document.write("The string " + string + " is not a palindrome");
//     }
// }
// checkPalindrome();
// 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox
// function convertlowercasetouppercase() {
//     let string = prompt("Enter a string");
//     let words = string.split(" ");
//     let result = "";
//     for (let i = 0; i < words.length; i++) {
//         result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
//     }
//     document.write("The string " +  string + " is converted to " + result);
// }
// convertlowercasetouppercase();
//  12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// // EXPECTED OUTPUT : 'Development
// function findLongestWord() {
//     let string = prompt("Enter a string");
//     let words = string.split(" ");
//     let longestWord = "";
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     document.write("The longest word in the string " + string + " is " + longestWord);
// }
// findLongestWord();
// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
// function countOccurrences() {
//     let string = prompt("Enter a string");
//     let letter = prompt("Enter a letter");
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == letter) {
//             count++;
//         }
//     }
//     document.write("The number of occurrences of the letter " + letter + " in the string " + string + " is " + count);
// }   
// countOccurrences();
// 14. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
// function calcCircumference() {
//     let radius = parseFloat(prompt("Enter the radius"));
//     let circumference = 2 * Math.PI * radius;
//     document.write("The circumference is " + circumference + "<br>");
// }
// function calcArea() {
//     let radius = parseFloat(prompt("Enter the radius"));
//     let area = Math.PI * radius * radius;
//     document.write("The area is " + area + "<br>");
// }
// calcArea();
// calcCircumference();
