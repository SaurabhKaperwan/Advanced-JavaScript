/*

var x = 1;
a();
b();
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}

O/P => 10 100 1
*/



/*
Shortest JS program: Empty file
Global EC is created.
JS engine create window object with lot func & var created by JS engine into the global space.

this keyword is created which points to window object.

Window object(for browser) is a global object created with Global Execution Context.

this === window

var a = 10;
console.log(a) //10
console.log(this.a) //10
console.lgo(window.a) //10
All are pointing to same memory space.
*/


/*
undefined(when memory is allocated):
used as a placeholder.

console.log(a);//undefined
var a = 7;
console.log(x);//not defined

undefined != empty

JS is loosely typed language.
var a;
a = 10;
a = true;
a = "name";

a = undefined; //wrong
*/
