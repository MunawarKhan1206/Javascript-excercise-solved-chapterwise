// Question 1
// var StudentName = [];
// Question 2
//  var StudentName = new Array();
// Question 3
// var Fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
// Question 4
// var OddNumbers = [1, 3, 5, 7, 9];
// Question 5
// var Boolean = [true, false, true, true];
// Question 6
// var mix = ["Apple", "Banana", "Mango", "Orange", "Strawberry", 1, 2, 3, 4, 5, true, false];
// Question 7
// var Education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h2>Educational Qualifications in Pakistan:</h2>");
// document.write("<ul>");
// for (var i = 0; i < Education.length; i++) {
//     document.write("<li>" + Education[i] + "</li>");
// }
// document.write("</ul>");
// Question 8
// var studentNames = ["John", "Emily", "Michael"];
// var scores = [380, 420, 450]; 
// var  totalMarks = 500;
// for (var i = 0; i < studentNames.length; i++) {
//     var percentage = (scores[i] / totalMarks) * 100;
//     document.write(
//       `<h3> ${studentNames[i]}  scored ${scores[i]} out of ${totalMarks}, ${percentage}% <br></h3> `);
// }
// Question 9
// A
// var colors = ["Red", "Green", "Blue"];
// document.write("<h2>Initial Array:</h2>");
// document.write(colors.join(", ") + "<br>");
// B
// var  colorToAddBeginning = prompt("Enter a color to add to the beginning:");
// document.write("<h2>Array after adding color to beginning:</h2>");
// colors.unshift(colorToAddBeginning);
// document.write(colors.join(", ") + "<br>");
// var  colorToAddEnd = prompt("Enter a color to add to the end:");
// document.write("<h2>Array after adding color to end:</h2>");
// colors.push(colorToAddEnd);
// document.write(colors.join(", ") + "<br>");
// C
// var  colorToAddMiddle = prompt("Enter a first  color to add in the middle:");
// var  colorToAddMiddle2 = prompt("Enter a second color to add in the middle:");
// document.write("<h2>Array after adding two more colors:</h2>");
// colors.splice(2, 0, colorToAddMiddle, colorToAddMiddle2);
// document.write(colors.join(", ") + "<br>");
// D
// colors.shift();
// document.write("<h2>Array after deleting the first color:</h2>");
// document.write(colors.join(", ") + "<br>");
//  E
// colors.pop();
// document.write("<h2>Array after deleting the last color:</h2>");
// document.write(colors.join(", ") + "<br>");
// F
// var indexToAdd = +prompt("Enter the index(In Numbers) where you want to add the color:");
// let colorToAdd = prompt("Enter the color to add:");
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write("<h2>Array after adding color at specific index:</h2>");
// document.write(colors.join(", ") + "<br>");
// G
// var indexToDelete = +prompt("Enter the index(In Numbers) where you want to delete the color:");
// var numberToDelete = +prompt("Enter the number of colors you want to delete:");
// colors.splice(indexToDelete, numberToDelete);
// document.write("<h2>Array after deleting color at specific index:</h2>");
// document.write(colors.join(", ") + "<br>");
// Question 10
// var scores = [320, 230, 480, 120];
// document.write("<h2>Score of Students:</h2>");
// document.write(scores.join(", ") + "<br>");
// document.write("<h2>Ordered Scores of Students:</h2>");
// scores.sort();
// document.write(scores.join(", ") + "<br>");
// Question 11
// var  cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("<h2>Cities List:</h2>");
// document.write(cities.join(", ") + "<br>");
// var selectedCities = cities.slice(2, 4);
// document.write("<h2>Selected Cities List:</h2>");
// document.write(selectedCities.join(", ") + "<br>");
// Question 12
// var array = ["This", "is", "my", "cat"];
// document.write("<h2>Array:</h2>");
// document.write(array.join(" ") + "<br>");
// var string = array.join(" ");
// document.write("<h2>String:</h2>");
// document.write(string);
// Question 13
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("<h2>Devices:</h2>");
// document.write(devices.join(", ") + "<br>");
// document.write("<h2>Out:</h2>");
// var out = devices.shift();
// document.write(out);
// document.write("<h2>Out:</h2>");
// var out = devices.shift();
// document.write(out);
// document.write("<h2>Out:</h2>");
// var out = devices.shift();
// document.write(out);
// document.write("<h2>Out:</h2>");
// var out = devices.shift();
// document.write(out);
// Question 14
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("<h2>Devices:</h2>");
// document.write(devices.join(", ") + "<br>");
// document.write("<h2>Out:</h2>");
// var out = devices.pop();
// document.write(out);
// document.write("<h2>Out:</h2>");
// var out = devices.pop();
// document.write(out);
// document.write("<h2>Out:</h2>");
// var out = devices.pop();
// document.write(out);
// document.write("<h2>Out:</h2>");
// var out = devices.pop();
// document.write(out);
// Question 15
// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write(phoneManufacturers)


