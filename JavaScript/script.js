// var a; //Declaration
// a = 10;//Initialization
// var a = 10; //Re-declaration and Re-Initializatio
// console.log(a);
// let b;//Declaration
// b = 20;//Initialization
// b = 30;//Re - Initialization
// console.log(b);
// const c = 30; // Declaration and Initialization
// console.log(c);

// var num = 10;
// var str = "Orange";
// var bool = true;
// var undef;
// var nll = null;
// var symbol = Symbol('li');
// var bigInt = 123456789n;
// var arr = [1,2,3,4,5];
// var obj = {
//     name:"vikraam"
// }
// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof undef);
// console.log(typeof nll);
// console.log(typeof symbol);
// console.log(typeof bigInt)
// console.log(typeof arr);
// console.log(typeof obj);

// //Arithmetic Operator

// var x = 10;
// var y = "20";
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// console.log(x**y);

// // Conditional Operator (>,>=,<,<=,==,!=)
// var x = 1;
// var y = "1";
// console.log(x > y);
// console.log(x >= y);
// console.log(x < y);
// console.log(x <= y);
// console.log(x == y);
// console.log(x != y);
// console.log(x === y);
// console.log(x !== y);

// // Logical Operator (&&, ||, !)
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log(!true);
// console.log(!false);

// // Assignment Operator (=,+=,-=,/=,%=,*=,**=)

// var x = 10;
// var y = 20;
// console.log(x);
// x -= y;
// console.log(x)

// //Conditional Statements

// // if(condition){
// //     //Statement
// // }

// var x = 10;
// if(x%2===0){
//     console.log("Even")
// }

// // if(condition){
// //     //Statement
// // }else{
// //     //Statement
// // }

// if(x%2===0){
//     console.log("Even");
// }
// else{
//     console.log("Odd")
// }

// var mark = 30;
// if(mark>=90){
//     console.log("O Grade");
// }
// else if(mark>=80){
//     console.log("A Grade");
// }
// else if(mark>=70){
//     console.log("A+ Grade")
// }
// else if(mark>=60){
//     console.log("B Grade")
// }
// else if(mark >=35){
//     console.log("Pass")
// }
// else{
//     console.log("Fail")
// }


// //Terinary Operator
// var x = 2;
// // condition ? true statement : false statement;
// var result = x%2===0 ? "Even" : "Odd";
// console.log(result);

// var mark = 50;
// var grade = mark>=90 ? "O Grade" : 
//             mark>=80 ? "A+ Grade" :
//             mark>=70 ? "A Grade" :
//             mark>=60 ? "B+ Grade" :
//             mark>=50 ? "B Grade" :
//             mark>=35 ? "Pass" : "Fail";

// console.log(grade);

// var day = 8;

// switch(day){
//     case 1:{
//         console.log("Sunday");
//         break;
//     }
//     case 2:{
//         console.log("Monday");
//         break;
//     }
//     case 3:{
//         console.log("Tuesday");
//         break;
//     }
//     case 4:{
//         console.log("Wednesday");
//         break;
//     }
//     case 5:{
//         console.log("Thursday");
//         break;
//     }
//     case 6:{
//         console.log("Friday");
//         break;
//     }
//     case 7:{
//         console.log("Saturday");
//         break;
//     }
//     default:{
//         console.log("Invalid Input");
//     }
// }

// // for(initialization; condition ; increment/Decrement){
//     //Statement
// // }

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// // while(condition){
// //     statement
// // }

// var num = 10246;
// var digit = 0;
// while(num>0){
//     digit++;
//     num= Math.floor(num/10);
// }
// console.log(digit)

// //Unary Operator (i++,++i,i--,--i)

// var x = 1;

// console.log(x++);
// console.log(++x);
// var x = 1;

// console.log(x--);
// console.log(--x);

// var a = 1; // 3
// var b = 1; // 2
// var c = 0; // 2
// //           1   +  0  + 1   -  3  +  1  + 1
// var result = a++ + --b + ++c - ++a + ++b + c++
// //          + 1   + 3
//             + b++ + a;
// console.log(result);

// // do{
// //     //Statement
// // }while(condition);

// do{
//     console.log("Do...While");
// }while(false);

// while(false){
//     console.log("While Example")
// }

// for(let i=1;i<=10;i++){
//     // if(i>5){
//     //     break;
//     // }
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }

// function add(){
//     console.log(10+20);
// }
// add();
// add();
// add();
// function add(a, b){
//     console.log(a+b);
// }
// add(10,20);
// add();
// add();

// function add(a=10, b=15){
//     console.log(a+b);
// }
// add(10,20);
// add(15,25);
// add(20);
// add();
 
// var add = ()=>{
//     console.log(10+20);
// }
// add();

// var sum = () => {
//     console.log("Arrow Function");
// }
// sum();

var arr = [1,2,3,4,5];
var square = arr.map((val)=>(val**2));
console.log(square);

var even = arr.filter((val)=>(val%2===0));
console.log(even);
// reduce((prev,curr)=>(calculation),initialValue)
var sum = arr.reduce((total,val)=>(total+val),0);
console.log(sum);