// destructuring notes

//****************object destructuring *****************/
//declare object
const teaOrder = {
    variety : 'oolong',
    teaName : 'winter sprout',
    origin : 'taiwan',
    price : 12.99,
    hasCaffeine: true,
    quantity : 3
};

//old way to access and declare new variables

// const price = teaOrder.price;
// const quantity = teaOrder.quantity;
// const teaName = teaOrder.teaName;

//new way to create variables 

// const { price, quantity, teaName } = teaOrder;
// const {origin} = teaOrder;

// this assigns new variables to the first 3, then the rest to others
let {price, quantity, teaName, ...others} = teaOrder;



//sets default and assigns it.  
let {brewTemp=175} = teaOrder;

//this renames brewTemp to temp and reassigns it. 
let {brewTemp: temp = 180} = teaOrder;

//this doesn't work 
let {teaName: tea} = teaOrder;

function checkout(tea){
    const{quantity, price} = tea;
    return quantity * price;
}


//*********** destructuring arrays ********************/

const students = [
    {name: 'drake', gpa: 4.6},
    {name: 'hendrieta', gpa: 4.4},
    {name: 'harry', gpa: 4.0},
    {name: 'harry', gpa: 3.8},
    {name: 'ant', gpa: 3.2}
];

//making new object variables via position in array ,, double commas skips
let [topStudent, secondBest, ] = students;

//can use rest to group the rest 
let [topStudent, ...losers] = students;




//************** function destructuring ***************/

const teaOrder2 = {
    variety: 'green',
    teaName: 'silver needle',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true
};

//long way
function getTotal(tea){
    const {quantity, price} = tea;
    return quantity * price;
}

// new destructured way

function getTotal({quantity: qty = 1, price}) {
    return quantity * price;
}

    console.log(getTotal(teaOrder2));


// ********** nested destructuring **************
