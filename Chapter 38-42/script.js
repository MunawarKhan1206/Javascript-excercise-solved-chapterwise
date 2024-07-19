// Chapter 38-42
// 1.  Write a custom function power ( a, b ), to calculate the value of a raised to b.
// function power(a, b) {
//     var  result = 1;
//     for (var  i = 0; i < b; i++) {
//         result = result * a;
//     }
//     return result;
// }
// var  a = 2;
// var  b = 3;
// var  result = power(a, b);
// document.write(result);
// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …
// function leapYear(year) {
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// var  year = parseFloat(prompt("Enter a year: "));
// var  result = leapYear(year);
// document.write(result);
// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
// function areaOfTriangle(a, b, c) {
//     var  s = (a + b + c) / 2;
//     var  area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }
// var  a = parseFloat(prompt("Enter the length of side a: "));
// var  b = parseFloat(prompt("Enter the length of side b: "));
// var  c = parseFloat(prompt("Enter the length of side c: "));
// var  result = areaOfTriangle(a, b, c);
// document.write(result);
// 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.
// 5. You have learned the function indexOf. Code your own custom function that will perform the same functionality You can code for single character as of now.
// function myIndexOf(str, char) {
//     var  index = -1;
//     for (var  i = 0; i < str.length; i++) {
//         if (str[i] == char) {
//             index = i;
//             break;
//         }
//     }
//     return index;
// }
// var  str = "Hello World";
// var  char = "o";
// var  result = myIndexOf(str, char);
// document.write(result);
// 6. Write a function to devar e all vowels from a sentence. Assume that the sentence is not more than 25  characters long.
// function devar eVowels(sentence) {
//     var  newSentence = "";
//     for (var  i = 0; i < sentence.length; i++) {
//         if (
//             sentence[i] != "a" &&
//             sentence[i] != "e" &&
//             sentence[i] != "i" &&
//             sentence[i] != "o" &&
//             sentence[i] != "u"
//         ) {
//             newSentence += sentence[i];
//         }
//     }
//     return newSentence;
// }
// var  sentence = prompt("Enter a sentence: ");
// var  result = devar eVowels(sentence);
// document.write(result);
// 7. Write a function with switch statement to count the number of // occurrences of any two vowels in succession in a line of text.For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.
// function countVowels(sentence) {
//     var  count = 0;
//     for (var  i = 0; i < sentence.length; i++) {
//         if (
//             sentence[i] == "a" ||
//             sentence[i] == "e" ||
//             sentence[i] == "i" ||
//             sentence[i] == "o" ||
//             sentence[i] == "u"
//         ) {
//             if (
//                 sentence[i + 1] == "a" ||
//                 sentence[i + 1] == "e" ||
//                 sentence[i + 1] == "i" ||
//                 sentence[i + 1] == "o" ||
//                 sentence[i + 1] == "u"
//             ) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// var  sentence = prompt("Enter a sentence: ");
// var  result = countVowels(sentence);
// document.write(result);
// 8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.
// function distanceInMeters(km) {
//     var  meter = km * 1000;
//     return meter;
// }
// function distanceInFeet(km) {
//     var  feet = km * 3280.84;
//     return feet;
// }

// function distanceInInches(km) {
//     var  inches = km * 39370.1;
//     return inches;
// }

// function distanceInCentimeters(km) {
//     var  centimeters = km * 100000;
//     return centimeters;
// }

// var  km = parseFloat(prompt("Enter the distance in kilometers: "));
// var  result = distanceInFeet(km);
// document.write("The distance in feet is: " + result);
// var  inch  = parseFloat(prompt("Enter the distance in inches: "));
// var  result = distanceInInches(km);
// document.write("The distance in inches is: " + result);
// var cm = parseFloat(prompt("Enter the distance in centimeters: "));
// var  result = distanceInCentimeters(km);
// document.write("The distance in centimeters is: " + result);
// 9. Write a program to calculate overtime pay of employees.Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.
// function overtimePay(hours) {
//     var  overtimePay = 0;
//     if (hours > 40) {
//         overtimePay = (hours - 40) * 12;
//     }
//     return overtimePay;
// }
// var  hours = parseFloat(prompt("Enter the number of hours worked: "));
// var  result = overtimePay(hours);
// document.write("The overtime pay is: " + result);
// 10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.
// function currencyNotes(amount) {
//     if (isNaN(amount) || amount < 0) {
//         return "Please enter a valid positive amount.";
//     }
//     let hundredNotes = 0;
//     let fiftyNotes = 0;
//     let tenNotes = 0;
//     hundredNotes = Math.floor(amount / 100);
//     amount %= 100; 
//     fiftyNotes = Math.floor(amount / 50);
//     amount %= 50;
//     tenNotes = Math.floor(amount / 10);
//     return {
//         hundredNotes: hundredNotes,
//         fiftyNotes: fiftyNotes,
//         tenNotes: tenNotes
//     };
// }
// var amount = parseFloat(prompt("Enter the amount to be withdrawn: "));
// var result = currencyNotes(amount);
// if (typeof result === "string") {
//     document.write(result);
// } else {
//     document.write("The amount to be withdrawn: " + amount + "<br>");
//     document.write("you will have " + result.hundredNotes + " hundred notes <br>" + result.fiftyNotes + " fifty notes <br>" + result.tenNotes + " ten notes <br>");
// }

//  ------------------------------------------- The End of Chapter 38-42 -------------------------------------------