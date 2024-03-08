//   Hoisting

/*
//In case of var:

eg1:
var x = 7;
console.log(x); // O/P =>7

eg2:used var before declaration.
//Hoisting
console.log(x);//undefined not error
var x = 7;

eg3:
console.log(x);//not defined(Not present in memory)
*/

/*
//In case of func:
getName(); // Print whole function code of getName().

function getName() {
    console.log("Saurabh");
}
*/

/*
//In case of arrow function:
getName();//Error: getName is not function

var getName = () => {
    console.log("Hello");
}

or

var getName = function() {

}

getName behaves like variable.
getName initialized to undefined.

*/
