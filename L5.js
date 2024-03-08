//let & const

/*
let & const => ES6 version

**Note => let & const declarations are hoisted.

eg1:
console.log(b); //undefined
console.log(a); //error(reference error) => can't access 'a' before initialization.
console.log(x); not defined (no memory is allocated)
let a = 10;
var b = 100;

why??
before execution both var & let initialized with
undefined.

But=>

var b is atteched to the global object or window object.

let a store in the separate memory space
& u can't use this before u put some value in it.

Temporal Dead Zone:
time since the let var is hoisted and till it is
initialized with a value.


eg:
let a = 10;
var b = 20;
window.b or this.b

window.a or this.a // not attached to window object

let is more strict then var.


const:

const a; //wrong (error)
const a = 100;
a = 10; //type error

*/

/*
Types of error:
Type Error:
eg1:
const a = 100;
a = 10; //type error

syntax error:
eg:
const b; //syntax error

eg:
let a = 10;
let a = 100;//syntax error

reference error:
console.log(a);// ref error
let a = 10;
console.log(x)// ref error
*/
