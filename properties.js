var shoppingCart = {
  books : 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25
}

console.log(shoppingCart.books);

//? When you know the property name, use dot (.) notation
var penCount = shoppingCart.pen

//? Alternative system, When you know the specific property name
var penCount2 = shoppingCart["pen"] ;
// console.log(penCount2)



//* Another system 
//?Object এর Property or Key গুলোকে Array হিসেবে দিবে।
var properties = Object.keys(shoppingCart); 

//?Object এর Value গুলোকে Array হিসেবে দিবে।
var propertyValues = Object.values(shoppingCart);
// console.log(propertyValues);

//? Dynamic ভাবে property & value পাইতে হলে এভাবে name ,value input nite hbe.
var propertyName = 'books';
var propertyValue = shoppingCart[propertyName]
// console.log(propertyName, propertyValue);


//! Set Property Value or name
shoppingCart.mouse = 15; //1.
// console.log(shoppingCart);
//? Another way
shoppingCart['mouse'] = 29; //2.
// console.log(shoppingCart);
shoppingCart[propertyName] = 89; //3.
// console.log(shoppingCart);
