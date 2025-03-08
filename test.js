var text = "Hello";
var num = 100;
var isTrue = true;
var anything = "can be anything";
var notSure = 10;
function sayHello() {
    console.log("Hello!");
}
var number = [1, 2, 3, 4];
//  let x=10;
//  if(x>5){
//     console.log(x);
//  }else{
//     console.log("not exist")
//  };
//  for(let i=10;i<=20;i++){
//     console.log(i);
//  }
// function sum(a : number, b:number) :number {
//   return a + b;
// } console.log(sum(5, 5));
// ******1
var n = 10;
if (n % 2 == 0) {
    console.log(n + "even");
}
else {
    console.log(n + "odd");
}
//*******2 
var a1 = [200, 800, 410, 950, 1362];
var threshold = 500;
// console.log(a1.sort());
for (var i = 0; i < a1.length; i++) {
    if (a1[i] > threshold)
        console.log(a1[i]);
}
//*****3 
var a2 = [50, 60, 20, 22, 11, 47, 950];
var sum = 0;
for (var i = 0; i < a2.length; i++) {
    sum = sum + a2[i];
    //  console.log(sum);
}
console.log(sum);
