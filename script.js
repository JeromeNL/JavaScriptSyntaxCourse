// in-line comment

/*
Multi
Line
Comment
 */

/* JS data types
undefined: Not defined (example: 'var a;'
Null: nothing
Boolean: True || False
string: text
symbol: char in C#/Java
number: just a number
object: an object, same as C#
 */

// use other data type later on
// var: whole program
var myName = "Jerome";
myName = 8;

// let: in scope
let ourName = "NL";

// const: constant, cannot be changed
const pi = 3.14;

// And all lines in JS with ;, recommended

// print stuff
console.log(pi);

// Math - same as other languages
var sum = 10 + 10;
// increment
myVar3 = 5;
myVar3 = myVar3 + 1;
myVar3++; // also supported in JS :D

//Decimal numbers (floats)
var MyFloat = 2.5
var myFloat2 = 4.4 / 2.0;

// Find remainder
var remain = 11 % 3; //result 2
var value = 10
value += 5; // also supported


// Strings
var firstName = "Alan";
var lastname = "Turing";

// Escape quotes
var escaping = "I am \"a programmer\"";
console.log(escaping)

var escaping2 = 'I am "a programmer"';

var myMulti = "FirstLine\nSecondLine"

// Concat
var concatString = "I am first " + "I am second";
concatString += " I am Third";

// Length string
var length = concatString.length;
console.log(length);

// 0-based indexing
console.log(concatString[3]);

// strings cannot be changed
//concatString[0]= h // does not work

var lastLetter = "string";
var lastLetterOfString = lastLetter[lastLetter.length -1];

// array - can contain different data types
var ourArray = ["John", 23];

var TwoDArray = [[12, 15], ["Jerome", "NL"]]
var age = TwoDArray[0][1];
var name = TwoDArray[1][0];
console.log(age + " " + name);

TwoDArray[0][2] = 25;
TwoDArray.push(["dog", 2]);
console.log(TwoDArray[2][0]);

// remove last
TwoDArray.pop();

// remove first
TwoDArray.shift();

// adds element to beginning
TwoDArray.unshift()

var myList = [['cereal', 3, ['milk', 5], ['juice', 25]]];


































