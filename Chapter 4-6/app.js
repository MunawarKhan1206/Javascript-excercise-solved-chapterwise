// CHAPTER 4 
// Question 1 
// var a = 10;b = 5;c = 15;
// Question 2 
// 5 Legal variables
// var a =userResponse;
// var b =userResponseTime;
// var c =userResponseDate;
// var d =userResponseDay;
// var e =userResponseMonth;
// // 5 Illegal variables
// var z = 1stName;
// var y = my-variable;
// var x =  @userResponse;
// var w =  #userResponse;
// var v =  %userResponse;
// Question 3
//  document.write("<h1>" + "Rules for naming JS variables" + "</h1>");
// document.write("<p>" + "Variable names can only contain, numbers, S and For example: Smy 1stVariable" + "</p>");
// document.write("<p>" + "Variable must begin with a letter, $ or. For example: $name, name or name" + "</p>");
// document.write("<p>" + "Variable names are case sensitive" + "</p>");
// document.write("<p>" + "Variable names should not be JS keywords" + "</p>");
// END OF CHAPTER 4 
// CHAPTER 5
// Question 1
// var a = 3;
// var b = 5;
// var result = a + b;
// document.write("<h3>"+"The sum of " + a + " and " + b + " is " + result + "</h3>");
// Question 2
// var a = 3;
// var b = 5;
// var result = a - b;
// document.write("<h3>"+"The difference of " + a + " and " + b + " is " + result + "</h3>");
// var a = 3;
// var b = 5;
// var result = a * b;
// document.write("<h3>"+"The product of " + a + " and " + b + " is " + result + "</h3>");
// var a = 3;
// var b = 5;
// var result = a / b;
// document.write("<h3>"+"The quotient of " + a + " and " + b + " is " + result + "</h3>");
// var a = 3;
// var b = 5;
// var result = a % b;
// document.write("<h3>"+"The modulus of " + a + " and " + b + " is " + result + "</h3>");
// Question 3
// part a
// var myVariable;
// part b
// document.write("Value after variable declaration is: " + myVariable + "`<br>`");
// part c
// myVariable = 5;
// part d
// document.write("Initial value: " + myVariable + "<br>");
// part e
// myVariable++;
// part f
// document.write("Value after increment is: " + myVariable + "<br>");
// part g
// myVariable += 7;
// part h
// document.write("Value after addition is: " + myVariable + "<br>");
// part i
// myVariable--;
// part j
// document.write("Value after decrement is: " + myVariable + "<br>");
// part k
// var remainder = myVariable % 3;
// part l
// document.write("The remainder is: " + remainder);
// Question 4
// var ticketprice = 600;
// var nooftickets = 5;
// var totalcost = ticketprice * nooftickets;
// document.write("<h3>" + "The cost of buying " + nooftickets + " movie tickets is "   + totalcost + "PKR" + "</h3>"); 
// Question 5
// var table = 4;
// document.write("<h3>" + "Table of " + table + "</h3>");
// for (var i = 1; i <= 10; i++)
// document.write("<p>" + table + " x " + i + " = " + table * i +"</p>");
// Question 6
// var C = 25;
// var F = 70;
// var CtoF = (C * 9 / 5) + 32;
// var FtoC = (F - 32) * 5 / 9;
// document.write("<h4>" + C + " is " + CtoF + " F" + "</h4>");
// document.write("<h4>" + F + " is " + FtoC + " C" + "</h4>");
// Question 7
// var item1 = 650;
// var item2 = 100;
// var quantity1 = 3;
// var quantity2 = 7;
// var shipping = 100;
// var totalcost = (item1 * quantity1) + (item2 * quantity2) + shipping;
// document.write("<h3>" + "Price of item 1 is " + item1 + "</h3>");
// document.write("<h3>" + "Quantity of item 1 is " + quantity1 + "</h3>");
// document.write("<h3>" + "Price of item 2 is " + item2 + "</h3>");
// document.write("<h3>" + "Quantity of item 2 is " + quantity2 + "</h3>");
// document.write("<h3>" + "Shipping charges " + shipping + "</h3>");
// document.write("<h3>" + "Total cost of your order is " + totalcost + "</h3>");
// Question 8
// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = (obtainedMarks / totalMarks) * 100;
// document.write("<h3>" + "Total marks: " + totalMarks + "</h3>");
// document.write("<h3>" + "Marks obtained: " + obtainedMarks + "</h3>");
// document.write("<h3>" + "Percentage: " + percentage + "%" + "</h3>");
// // Question 9
// var dollars = 10;
// var riyal = 25;
// var exchangeRateusd = 104.80;
// var exchangeRatesar = 28; 
// var totalRupees = (dollars * exchangeRateusd) + (riyal * exchangeRatesar);
// document.write("<h3>" + "Total Currency in PKR: " + totalRupees + "</h3>");
// Question 10
// var initialNumber = 10;
// var result = ((initialNumber + 5) * 10) / 2;
// document.write("<h3>" + "Result: " + result + "</h3>");
// Question 11
// var currentYear = 2024;
// var birthYear = 2000;
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;
// document.write("<h3>" + "They are either " + age1 + " or " + age2 + " years old" +"</h3>");
// Question 12
// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius;
// document.write("<h3>" + "The radius is " + radius + "</h3>");
// document.write("<h3>" + "The circumference is " + circumference + "</h3>");
// document.write("<h3>" + "The area is " + area + "</h3>");
// Question 13
// var favouriteSnack = "chocolate chip";
// var currentAge = 15;
// var maximumAge = 65;
// var amountPerDay = 3;
// var total = (maximumAge - currentAge);
// var result = total * amountPerDay;
// document.write("<h3>" + "Favourite snack: " + favouriteSnack + "</h3>");
// document.write("<h3>" + "Current age: " + currentAge + "</h3>");
// document.write("<h3>" + "Estimated maximum age: " + maximumAge + "</h3>");
// document.write("<h3>" + "Amount of snacks per day: " + amountPerDay + "</h3>");
// document.write("<h3>" + "You will need " + result + " " + favouriteSnack + " to last you until the ripe old age of " + maximumAge + "</h3>");
// END OF CHAPTER 5
// CHAPTER 6
// Question 1
// Take a number in a variable
// var a = 10;
// document.write("<h2>"+"results" + "</h2>" )
// document.write("<h3>" + " The value of a is: " + a + "<br>" + "</h3>"); 
// document.write("The value of ++a is: " + (++a) +"<br>");  
// document.write(" Now the value of a is: " + a + "<br>");
// document.write("The value of a++ is: " + (a++) +"<br>");
// document.write(" Now the value of a is: " + a + "<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("The value of --a is: " + (--a) + "<br>");
// document.write(" Now the value of a is: " + a + "<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write(" Now the value of a is: " + a + "<br>");
// Question 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("<h3>" + "a is " + a + "<br>" + "b is " + b + "<br>" + "result is " + result + "</h3>");
// var a = 2, b = 1;
// // Stage 1: --a;
// var stage1 = --a;
// document.write("After --a, a = " + a);
// // Stage 2: --a - --b;
// var stage2 = --a - --b;
// document.write("<br>After --a - --b, a = " + a + ", b = " + b);
// // Stage 3: --a - --b + ++b;
// var stage3 = --a - --b + ++b;
// document.write("<br>After --a - --b + ++b,  a = " + a + ", b = " + b);
// // Stage 4: --a - --b + ++b + b--;
// var stage4 = --a - --b + ++b + b--;
// document.write("<br>After --a - --b + ++b + b--, a = " + a + ", b = " + b);




