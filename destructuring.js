/******************TYLER GETTEL ******************

**************Destructuring Exercise*************/

/*   Dest. 1
What does the following code return/print? **/

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

/*   Dest. 2 
What does the following code return/print? */

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;
console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

/* Dest. 3
What does the following code return/print? */

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // 
// "Your name is Alejandro and you like purple"

getUserData({firstName: "Melissa"})
// "Your name is Melissa and you like green"

getUserData({})
// "Your name is undefined and you like green"

/* Array Dest. 1
What does the following code return/print? */

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // "Maya"
console.log(second); // "Marisa"
console.log(third); // "Chi"

/* Array Dest. 2
What does the following code return/print? */

let [raindrops, whiskers, ...aFewOfMyFavoritethings] = [
    "Raindrops on roses",
    "Whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]

console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "Whiskers on kittens"
console.log(aFewOfMyFavoritethings); // ["Bright copper kettles", "Warm woolen mittens", "Brown paper packages tied up with strings"]

/* Array Dest. 3 
What does the following code return/print? */

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // [10, 30, 20]

/* es2015 refactoring

refactor this 

var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;    */

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };

let {numbers: {a, b} } = obj;


/* refactor this swap

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
*/

var arr = [1,2];
arr = [2,1];


/* race results */

let raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});
