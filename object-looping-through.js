//* Array vs Object
// var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
// var friendsAge = [12, 45, 78, 12, 32, 14];
//? var friends = {
//   rahim: 12,
//   karim: 45,
//   samad: 78,
//   jamal: 12,
//   robi: 32,
//   kazi: 14
// }

var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
  shoes: 2
}

const keys = Object.keys(shoppingCart); //~ এভাবে object.key এর মাধ্যমে shoppingCart er key গুলোকে Array হিসেবে পাওয়া যাবে।
// var keys = ["books", "sunglass", "keyboard", "mouse", "pen", "shoes"];
// console.log(keys);

const values = Object.values(shoppingCart);
// console.log(values);

for (var i = 0; i < keys.length; i++) {
  var propertyName = keys[i];
  var propertyValue = shoppingCart[propertyName];
  // console.log(propertyName, propertyValue);
}

//? for in loop (Advanced)
for(var propertyName in shoppingCart){
  const value = shoppingCart[propertyName];
  console.log(propertyName, value);
}