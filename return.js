// function add(number1, number2) {
   // Function BODY
// }

function add(number1, number2) {
  console.log(number1, number2);
  var sum = number1 + number2;
  console.log(sum);
  return sum; 
  console.log('Hello'); // Return দিয়ে দেয়া মানেই Function এর কাজ শেষ, function আর চলবে না। Return এর নিচে যত যাই লিখি না ক্যানো সেটা আর কাজ করবে না। অনেকটা break; এর মতো।
  //? Return ar নিচে কোনো code লিখলে আর কাজ করবে না, Function এর মদ্ধে কাজ করে ,কাজের ভ্যালুটা কে আমরা Return নিয়ে নিসি, যেইটা পরে আমরা ইউজ করতে পারবো, Return যদি না নিতাম তাহলে আর ওই Value কোনো কাজেই আসতো না।
}
// add(45, 15);

var total = add(30, 20);
// console.log('Total', total);

// var savings = 12 * total;
// console.log(savings);

function bringSingara(money) { //? এখানে money হচ্ছে parameter.
  var singaraPrice = 10;
  var quantity = money / singaraPrice;
  return quantity;
}

var myTaka = 150;
// var singaras = bringSingara(200);
var singaras = bringSingara(myTaka); //? আর myTaka টাকে আমরা argument হিসেবে পাস করছি bringSingara function এর মধ্যে।

console.log('Eating', singaras, 'singaras');

office