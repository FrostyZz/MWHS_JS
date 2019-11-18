// Dictionary Notes
var food={
  "Sushi": 0,
  "Pizza": 0,
  "Hotdog": 3,
  "Mickey": 1
};

for (key in food){
  console.log(key); // key is like the word
  console.log(food[key]); // prints quantity of each word

}

food["Mickey"]++; // Incriments our value for Mickey
food["Sushi"] = 12; // assigns the value at sushi to 12
console.log(food["Mickey"]);


var blankDictionary = {} // declares blank Dictionary

blankDictionary["New Item"] = "A Value"; // adding a new item to Dictionary

var icecream={
  "Chocolate": [0, 0.99, "$0.99"],
  "Vanilla": [2, 1.99, "$1.99"],
  "Sundae": [1, 1, "$1.00"]

}



// print everything
for(key in icecream){
  console.log(key);
  for (index in icecream[key]){
    console.log(" " + icecream[key][index]); // prints ice cream flavor, then every item inside the list
  }
}

// Print only things that have a quantity and the total Cost
for(key in icecream){
  if(icecream[key][0] > 0){
  console.log(key);
  console.log("Total Amount: " + (icecream[key][0]) )
  console.log("Total Cost: " + (icecream[key][0]) * (icecream[key][1])) // times quantity by price
}
}
