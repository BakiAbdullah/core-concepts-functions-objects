//? Objects in JavaScript

var student = {  //~ এখানে Student হলো একটি Object
  id: 115,
  name: 'Solaiman Khan',
  class: 9,
  marks: 98
}

var mobile = {  //* এখানে mobile হলো একটি Object
  brand: 'Samsung', //~ (brand: 'Samsung' হচ্ছে Key-Value জোড়া) আর দুইটা মিলে আমরা বলব Property. 
  price: 19000,
  storage: '64gb',
  camera : '7mp'
}

var myComputer = {
  brand: 'hp',
  price: 27500,
  color: 'silver',
  processor: 'i5',
  ram: '8gb'
}

myComputer.processor = 'i9' //~ এভাবে Property ভ্যালু সেট করা যায়। অথবা --->

// var propertyName = 'size';
// var propertyValue = myComputer[propertyName];
// console.log(propertyValue);

console.log(myComputer); 