//Functions

/*
Function Statement aka  Function Declarations:
a();//

function a(){
    console.log("a called");
}

Function Expression:
b();//undefined
var b = function (){
    console.log("b called");
}


Anonymous function:
function without name

function(){

} //error in function statement

They don't have their identity.

Used when function is used as values.

var a = function(){

}

Named Function expression:

when we give a name to a function in function expression.

var b = function xyz() {
    console.log("b called");
}

b();
xyz();//reference error(xyz is created as a local variable)

Difference b/w parameters & arguments:

function x(param1, param2){
    console.log("hello");
}

x(1, 2);//arguments

the value passed inside a function is known as argument.

the identifiers which get those values are known as parameters.

First Class Function:

ability to passed function inside a function as a arguments.
and return a function from a function.




*/
