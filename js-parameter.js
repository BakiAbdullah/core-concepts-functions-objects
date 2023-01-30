// function name(params) {
//? Function Statement-------------
// }

// function bringSingara(money) { //? Function with parameter
//   console.log("mama singara den");
//   console.log(money); //? Read the value of params
// }

// bringSingara(200); //? Paramter value assigning 

function bringSingara(money) {
  // console.log('ai nen singara');
  // console.log(money,'taka disen.'); //? Parameter এর Console.log শুধুমাত্র এই ফাংশন Body এর মদ্ধেই কাজ করবে।
}
 var taka = 120; //? আমরা function Call করার সময় যেকোনো মান দিতে পারি আবার, সরাসরি Variable এর মান টাকেও দিয়ে দিতে পারি।
bringSingara(taka); //? funciton Call করার সময় Parameter এর ভ্যালুটা দিতে হবে। 
//~ =======================================================================


// * Parameter একের অধিক ও দেয়া যায়। যেমনঃ
function add(num1, num2) {
  console.log('going to add:', num1, num2);
}
//  add(20, 10);

function sum(a, b, c, d, e){
  console.log(a, b, c, d, e);
  var sum = a + b + c + d + e; //? Parameter শুধুমাত্র এই ফাংশন Body এর মদ্ধেই  Access হবে / কাজ করবে। বাইরে থেকে Access করতে চাইলেই Error দেখাবে।
  console.log(sum);
}
sum(12, 13, 14, 11, 20); //? Passing the values into the parameter above.
 
//~ =======================================================================