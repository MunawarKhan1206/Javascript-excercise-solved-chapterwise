// Chapter 21 to 25
// Question 1
// var FirstName = prompt("Enter Your First  Name");
// var LastName = prompt("Enter Your Last Name");
// var FullName = FirstName + " " + LastName;
// alert(`Hello, ${FullName}! Welcome.`);
// Question 2
// const FavoriteModel = prompt("Enter your Favorite mobile phone model:");
// var InputLength = FavoriteModel.length;
// alert(`My Favorite phone is: ${FavoriteModel} and length of string is: ${InputLength}`)
// Question 3
// var Word = "Pakistani";
// var Index = Word.indexOf("n");
// document.write(`<h1>The index of the letter "n" in the word "Pakistani" is: ${Index}</h1>`);
// Question 4
// var Word = "Hello World";
// var LastIndex = Word.lastIndexOf("l");
// document.write(`<h1>The last index of the letter "l" in the word "Hello World" is: ${LastIndex}</h1>`);
// Question 5
// var Word = "Pakistani";
// var Char = Word.charAt(3);
// document.write(`<h1>The character at index 3 in the word "Pakistani" is: ${Char}</h1>`);
// Question 6
// var FirstName = prompt("Enter Your First  Name");
// var LastName = prompt("Enter Your Last Name");
// var FullName = FirstName.concat(" ", LastName);
// alert(`Hello, ${FullName}! Welcome.`);
// Question 7
// var City = "Hyderabad";
// var NewCity = City.replace("Hyder", "Islam");
// document.write(`<h1>Original Word: ${City}</h1>`);
// document.write(`<h1>After Replacing Islam with Hyder: ${NewCity}</h1>`);
// Question 8
// var Message = "Ali and Sami are best friends. They play cricket and football together.";
// var NewMessage = Message.replace(/and/g, "&");
// document.write(`<h1>${NewMessage}</h1>`);
// Question 9
// var str = "472";
// var num = parseInt(str);
// document.write(`<h1>Original Value: ${str} <br> Type: ${typeof str}</h1>`);
// document.write(`<h1>Converted Value: ${num} <br> Type: ${typeof num}</h1>`);
// Question 10
// var userInput = prompt("Enter any word:");
// var UpperCase = userInput.toUpperCase();
// document.write(`<h1>${UpperCase}</h1>`);
// // Question 11
// var userInput = prompt("Enter a string:");
// function toTitleCase(str) {
//     return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
//         return match.toUpperCase();
//     });
// }
// var titleCaseInput = toTitleCase(userInput);
// document.write(`<h1>User Input (Original): ${userInput}</h1>`);
// document.write(`<h1>User Input (Title Case): ${titleCaseInput}</h1>`);
// Question 12
// var num = 35.36;
// var str = num.toString();
// var result = str.replace(".", "");
// document.write(`<h1>${result}</h1>`);
// question 13
// var username = prompt("Enter your username:");
// function isValidUsername(username) {
//     for (var i = 0; i < username.length; i++) {
//         var char = username.charAt(i);
//         if (char === "@" || char === "." || char === "," || char === "!" || char === " " || char === "0" || char === "1" || char === "2" || char === "3" || char === "4" || char === "5" || char === "6" || char === "7" || char === "8" || char === "9" || char === "/" || char === "(" || char === ")" || char === "\\" || char === "_" || char === "#" || char === "$" || char === "%" || char === "^" || char === "&" || char === "*") {
//         return false; 
//         }
//     }
//     return true;
// }
// if (!isValidUsername(username)) {
//     alert("Please enter a valid username without special symbols like '@', '.', #,!, or '!' ");
// } else {
//     alert("Username is valid. Welcome, " + username + "!");
// }
// Question 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var found = false;
// for (var i = 0; i < A.length; i++) {
    
//     if (userInput.toLowerCase() === A[i]) {
//         found = true;
//         break;
//     }
//     else {
//         found = false;
//     }
// }
// if (found) {
    
//     alert(userInput + " is available at index " + i + " in our bakery.");
// } else {
    
//     alert("We are sorry. " + userInput + " is not available in our bakery.");

// }
// Question 15
// var password = prompt("Enter your password:");
// if (password === "") {
//     alert("Please enter a password.");
// }
// else if (password.length < 6) {
//     alert("Password must be at least 6 characters long.");
// }
// else if (password[0].charCodeAt() >= 48 && password[0].charCodeAt() <= 57) {
//     alert("Password can't begin with a number.");
// }
// else if (password.indexOf(" ") !== -1) {   
//     alert("Password cannot contain spaces.");
// }
// else {    
//     alert("Password is valid.Thank you!");
// }
// Question 16
// var university = "University of Karachi";
// var universityArray = university.split("");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write(`<p>${universityArray[i]}</p>`);
// }
// Question 17
// var userInput = prompt("Enter any word:");
// var lastChar = userInput.charAt(userInput.length - 1);
// document.write(`<h1>User Input: ${userInput}</h1>`);
// document.write(`<h1>Last Character Of User Input: ${lastChar}</h1>`);
// Question 18
// var str = "The quick brown fox jumps over the lazy dog";
// var str = str.toLowerCase()
// var word = "the";
// var count = 0;
// var words = str.split(" ");
// for (var i = 0; i < words.length; i++) {
//     if (words[i] === word) {
//         count++;
//     }
// }
// document.write(`<h1>Text: ${str}</h1>`);
// document.write(`<h1>There are ${count} occurrences of the word "${word}"</h1>`);
// Chapter 26 to 30
// Question 1
// var num = +prompt("Enter a positive integer:");
// (A) Checking Whether A Number Is Positive Or Not
// if (num > 0) {
//     document.write(`<h1>Number: ${num}</h1>`);
// (B) round off value of the number
//     document.write(`<h1>Rounded Off Value: ${Math.round(num)}</h1>`);
// (C) floor value of the number
// document.write(`<h1>Floor Value: ${Math.floor(num)}</h1>`);
// (D) ceiling value of the number
// document.write(`<h1>Ceiling Value: ${Math.ceil(num)}</h1>`);
// }
// else {
//     document.write("<h1>Invalid input. Please enter a positive integer.</h1>");
// }
// Question 2
// var num = +prompt("Enter a Negative integer:");
// (A) checking Whether A Number Is Negative Or Not
// if (num < 0) {
//  document.write(`<h1>Number: ${num}</h1>`);
// (B) round off value of the number
//    document.write(`<h1>Rounded Off Value: ${Math.round(num)}</h1>`);
// (C) floor value of the number
// document.write(`<h1>Floor Value: ${Math.floor(num)}</h1>`);
// (D) ceiling value of the number
// document.write(`<h1>Ceiling Value: ${Math.ceil(num)}</h1>`);
// }
// else {
    // document.write("<h1>Invalid input. Please enter a negative integer.</h1>");
// }
// Question 3
// var num = +prompt("Enter a number:");
// document.write(`<h1>Absolute Value: ${Math.abs(num)}</h1>`);
// Question 4
// var dice = Math.floor(Math.random() * 6) + 1;
// document.write(`<h1>The random dice value is: ${dice}</h1>`);
// Question 5
// var coin = Math.floor(Math.random() * 2) + 1;
// if (coin === 1) {
//     document.write(`<h1>Player 1(H) coin value: Heads</h1>`);
// }
// else {
//     document.write(`<h1>Player 2(T) coin value: Tails</h1>`);
// }
// Question 6
// var num = Math.floor(Math.random() * 100) + 1;
// document.write(`<h1>The random number between 1 and 100 is: ${num}</h1>`);
// Question 7
// var weight = +prompt("Enter your weight in kilograms:");
// weight = Math.round(weight);
// document.write(`<h1>The weight of user is: ${weight} kilograms</h1>`);
//  Question 8
// var num = +prompt("Enter a number between 1 and 10:");
// var guess = Math.floor(Math.random() * 10) + 1;
// if (num >= 1 && num <= 10) {
//     if (num === guess) {
//         alert("Excellent guess! You got it right.");
//     } else {
//         alert(`Sorry, that's not the number. The number was ${guess}.`);
//     }
// }
// else {
//     alert("Invalid input. Please enter a number between 1 and 10.");
// }
// Chapter 31 to 34
// Question 1
// var date = new Date();
// document.write(`<h1>${date}</h1>`);
// Question 2
// var CurrentMonth = date.getMonth();
// var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.write(`<h1>The current month is: ${Months[CurrentMonth]}</h1>`);
// Question 3
// var CurrentDay = date.getDay();
// var Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// document.write(`<h1>The current day is: ${Days[CurrentDay].split(0, 3)}</h1>`);
// Question 4
// var date = new Date();
// var CurrentDay = date.getDay();
// if (CurrentDay === 0 || CurrentDay === 6) {
//     document.write(`<h1>It's Fun day</h1>`);
// }
// else {
//     document.write(`<h1>It's not Fun day</h1>`);
// }
// Question 5
// var date = new Date();
// var CurrentDate = date.getDate();
// if (CurrentDate < 16) {
//     document.write(`<h1>First fifteen days of the month</h1>`);
// }
// else {
//     document.write(`<h1>Last days of the month</h1>`);
// }
// Question 6
// var date = new Date();
// var milliseconds = date.getTime();
// var minutesSinceMidnight1970 = milliseconds / (1000 * 60);
// document.write(`<h1>Current Date: ${date}<br>Elapsed milliseconds since January 1, 1970: ${milliseconds}<br>Elapsed minutes since January 1, 1970: ${minutesSinceMidnight1970}</h1>`);
// // Question 7
// var currentDate = new Date();
// var hours = currentDate.getHours();
// if (hours < 12) {
//     document.write(`<h1>It's AM</h1>`);
// }
// else {
//     document.write(`<h1>It's PM</h1>`);
// }
// Question 8
// var laterDate = new Date(2020, 12, 0);
// document.write(`<h1>${laterDate}</h1>`);
// Question 9
// var ramadanStartDate = new Date(2015, 5, 18);
// var currentDate = new Date();
// var daysPastSinceRamadan = Math.floor((currentDate - ramadanStartDate) / (1000 * 60 * 60 * 24));
// document.write(`<h1>${daysPastSinceRamadan} days passed since 1st Ramadan</h1>`);
// Question 10
// var referenceDate = new Date(2015, 0, 1);
// var currentDate = new Date();
// var secondsPastSince2015 = Math.floor((currentDate - referenceDate) / 1000);
// document.write(`<h1>${secondsPastSince2015} seconds passed since beginning of 2015</h1>`);
// Question 11
// var currentDateTime = new Date();
// var aheadDateTime = new Date(currentDateTime.getTime() + 60 * 60 * 1000); 
// document.write(`<h1>Current Date and Time: ${currentDateTime.toLocaleString()}</h1>`);
// document.write(`<h1>One Hour Later: ${aheadDateTime.toLocaleString()}</h1>`);
// Question 12
// var pastDate = new Date();
// var past = new Date(pastDate.setFullYear(pastDate.getFullYear() - 100));
// document.write(`<h1>Current Date: ${pastDate}</h1>`);
// document.write(`<h1>100 years back, it was ${past}</h1>`);
// Question 13
// var userAge = +prompt("What is your current age?");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - userAge;
// document.write(`<h1>If you are ${userAge} years old, your birth year is ${birthYear}</h1>`);
// Question 14
// var UserName = prompt("Enter your name:");
// var month = new Date().getMonth();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var NumberofUnits = Math.round(+prompt("Enter number of units:"));
// var ChargesPerUnit = Math.round(+prompt("Enter charges per unit:"));
// var NetAmountPayable = NumberofUnits * ChargesPerUnit;
// var LatePaymentCharges = Math.round(NetAmountPayable * 0.05 );
// var GrossAmountPayable = NetAmountPayable + LatePaymentCharges;
// document.write(`<h1>K-Electric Bill</h1>`);
// document.write(`<p>Customer Name: <b>${UserName}</b></p>`);
// document.write(`<p>Month: <b>${months[month]}</b></p>`);
// document.write(`<p>Number of units: <b>${NumberofUnits}</b></p>`);
// document.write(`<p>Charges per unit: <b>${ChargesPerUnit}</b></p>`);
// document.write(`<p>Net Amount Payable (within Due Date): <b>${NetAmountPayable}</b></p>`);
// document.write(`<p>Late Payment Charges: <b>${LatePaymentCharges}</b></p>`);
// document.write(`<p>Gross Amount Payable (after Due Date): <b>${GrossAmountPayable}</b></p>`);

