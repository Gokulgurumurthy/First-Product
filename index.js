// // console.log("hello world");
// // console.log(`Hello world`);
// // console.log('Hello world');
// // console.log(100);
// // console.log(25+100);

// var store  = 100+100;
// var a = 1550+50;

// console.log(a+a+store);
// // console.log(100 + 100 - 50 + 8 / 4 + 20 * 50);

// var store = 100 + 100; // 200
// var a = 100 + 300; // 400

// var b = store; // 200

// store = b + a; // 200 + 400
// store = store; // 600

// store = a - 400;
// a = store;
// b =  store + a;
// console.log(store, a, b);

// // variable declaration and initialization

// var a ; // variable declaration

// a = 190 // variable initialization

// var b = 100 // variable initialization

// var a = true; // boolean

// a = 1000;

// c =false;
//  console.log(a,b,c);

// types of storages or variables

// var a = 10; // can be reintialize,redeclared,reassigned hoisting=undefined (consider hoisting)

// let b = 10; // cannot  be reintialize,cannot be redeclared,can be reassigned ,hoisting=initialize error (doesnt entertain hoisting)

// const c = 10; // cannot be reintialize,cannot be redeclared,cannot be reassigned, most used, hoisting=initialize error(doesnt entertain hoisting)

// console.log(a,b,c);// hoisting

// var a = 10;

// let b = 10;

// datatypes

// data types

//  number, boolean, string, undefined, null

// primitive datatypes

// const a = undefined;
// const b = false;
// const c = 'string';
// const d = 100;
// const e = null

// // non - primitive -> functions, object, arrays

// function(){

// }

// const d = [];

// const r = {};

//Comparators,Logical operators and Strict Operators

// const a = 11;

// const b = 10

// console.log(a > b)

//Type coercion

// const a = 'hello';

// console.log(a+'world');

// console.log(typeof 'true'); // type of dstatype

// const example = "thunder";

// console.log(example + 100000);
// console.log(100000 + example);
// console.log(typeof (example + 100000));

// If else condition

// if(100 !== "string") {
// console.log("Payment received");
// }else {
// console.log("payment declined");
// }

// If else

// var a = 25
// var b = 25
// var c = 25

// if(25+25 === a+b+c) {
// console.log(1);
// }else if(25+25+25 === a+b) {
// console.log(2);
// } else if (25+25+25 === a+b+c) {
// console.log(3);
// }else if (25 === a) {
// console.log(4);
// } else {
//     console.log(5);
// }

// let val1;
// let val2 = "Good";
// val1 = val2
// if (val1 + "day" == typeof "string") { // "Goodday" == "string"
    
//   console.log("Good Morning");
//   if(true){
//     console.log("did u have cfe")
//   }
// } else if (val1 + "day" == typeof "string") { //"goodday" =="string"
//   console.log("Good afternoon");
// } else if (val1 + "day" === typeof "string") { // "goodday" ==="string"
//   console.log("Good evening");
// } else if (typeof (val1 + "day") === typeof "string") { // "good day" === "string"
//   console.log("Good Night");
// } else {
//     val2 = "bad"
//     console.log("have a " + val2 + "day")
// }
var a = 100;
var b = 0;

if (50 + 80 === a + 20) {
  console.log("it's true @1"); 

  if (typeof a !== "number") {
    console.log("yes it is a number");
  } else {
    console.log("no it is not a number");
  }
} else if (30 + 90 === a) {
  console.log("it's true @2");
} else if (30 + 70 === a + b) {
  console.log("it's true @3");

  if (typeof a !== "number") {
    console.log("yes it is a number");
  } else {
    console.log("no it is not a number 2");
  }
} else {
  console.log("it's false");
}