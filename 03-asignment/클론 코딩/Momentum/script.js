alert("hi");

const a = 5;
const b = 2;
const myName = "heeseo";

var c = 5;
var d = 2;
var myName2 = "his0si";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello"+myName);

console.log("your new name is"+myName2);

const amIfat = null;
let something;
console.log(something,amIfat);

const toBuy = ["potato","tomato","pizza"];
toBuy.push("kimbab");
toBuy[2] = "water";
console.log(toBuy);

const playerName = "heeseo";
const playerPoint = "121212";
const playerHandsome = "false";
const playerFat = "little bit";

//const player = ["heeseo",121212,false,"little bit"]

const player = {
    name:"heeseo",
    points:121212,
    fat:true

};

console.log(player);
player = false;
player.lastnmae = "potato";
player.points = player.points + 15;
console.log(player.name);

function sayHello(){
    console.log("Hello my name is B");
}

sayHello();
sayHello();
sayHello("heeseo");

function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}

plus(8,60);

function divide(a, b){
    console.log(a/b);
}

divide(98,20);

function minusFive(potato){
    console.log(potato-5);
}

minusFive(5,10,12,34,4,5,6,7);

/*function divide(a, b){
    return a/b
}*/

const age = parseInt(prompt("How old are you?"));
console.log(age,parseInt(age));