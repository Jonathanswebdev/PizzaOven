// Pizza Oven Assignment


// The Pizza Oven
// Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza, but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.

// Create a function called pizzaOven that returns a JavaScript (Pizza) Object

// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]

// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]

// Create 2 more pizzas with any toppings we like!

function pizzaOven(crustType, sauceType, cheeses, toppings) {
  return {
    crustType: crustType,
    sauceType: sauceType,
    cheeses: cheeses,
    toppings: toppings,
  };
}
var pizza1 = pizzaOven(
  "New York Style",
  "traditional",
  ["mozzarella"],
  ["prosciutto", "italian sausage"]
);
console.log(pizza1);

var pizza2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["pecorino", "feta"],
  ["mushrooms", "olives", "onions"]
);
console.log(pizza2);

var pizza3 = pizzaOven(
  "thin crust",
  "arrabiata",
  ["cheddar", "parmesan"],
  ["chicken", "bacon"]
);
console.log(pizza3);

var pizza4 = pizzaOven(
  "stuffed",
  "alfredo",
  ["ricotta", "provolone"],
  ["spinach", "garlic"]
);
console.log(pizza4);

// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!

function randomPizza() {
  var myToppings = [
    "pepperoni",
    "mushrooms",
    "olives",
    "onions",
    "sausage",
    "bacon",
    "pineapple",
    "ham",
    "green peppers",
  ];
  var myCrustTypes = [
    "thin crust",
    "thick crust",
    "deep dish",
    "stuffed crust",
  ];
  var myBeverages = [
    "bottle water",
    "sparkling water",
    "ginger ale",
    "grape soda",
    "root beer",
    "stella artois",
    "extra napkins for the mess Ive made",
  ];

  const randomTopping =
    myToppings[Math.floor(Math.random() * myToppings.length)];
  const randomCrust =
    myCrustTypes[Math.floor(Math.random() * myCrustTypes.length)];
  const randomBeverage =
    myBeverages[Math.floor(Math.random() * myBeverages.length)];

  return `A ${randomCrust} pizza with ${randomTopping} on top with a ${randomBeverage}, please!`;
}

console.log(randomPizza());
