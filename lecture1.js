/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the best practise
 */

//var 1stCar = 'Doge'; // This variable name is not accepted because it starts with a number/digit

var firstCar = 'Doge';

//var var = 'variable'; // var cannot be accepted as a variable name because it is a keyword

var variableString = 'variable';

//var first name = 'Jerry'; // A variable name cannot have a space

var firstName = 'Jerry';

//var Sch00lName = 'MEST';// Using the best practice, it is not acceptable to have a variable name with number
                                          // without using the camelCase and the variable starts with Capital
var schoolName = 'Mest';

//var totalnumber = 100;// The variable consist of two words and the second word is not capitalized using camelCase
var totalNumber = 100;

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  'It\'s nice to me you today!';  //Yes this is valid
var response = "Ashwin said, \"Yes Sir!"";


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */
 0.3 + 0.1 === 0.4;
// This expression evaluate to true because javascript adds the floating number to produce a float number

/*
 * 4. Build a pizza object by using all three object creation method, it must have at least 4 properties
 */

 // Object contruct

function Pizza (shape, color, price, currency) {
    this.feet = shape;
    this.color = color;

    this.price = function (price, currency) {
        this.priceCurrency = price + currency ;
    };
}



 //Dot Notation

//Object literal notation
var pizza = {
    shape:"circle",
    color:"orange",
    price:100,
    currency: "GHC"

};

pizza.price = 200;



// Bracket notation


var pizza = Object.create();
/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */

function Animal (shape, color, price, currency) {
    this.feet = shape;
    this.color = color;

    this.price = function (price, currency) {
        this.priceCurrency = price + currency ;
    };
}


/*
 * 6. Write a small menu selection function by using if-else and switch,
 input number, output name of your order
 */
function menuSelection (input){
    if (input == 1) {
        console.log("Banku");
    }
    else if (input == 2){
        console.log("Kenkey");
    }
    else if (input == 3){
        console.log("Rice")
    }


    }

function menuSelectionSwitch(input){
    case input
         when 1
        console.log("Banku");

        when 2
        console.log("Kenkey");

        when 3
        console.log("Rice")
    }



menuSelection(1);

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,
  loop and conditions.
 */

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,
 array.forEach and conditions.
 */