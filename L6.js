//Block Scope & Shadowing
/*
Block:
>used to combine multiple statements into the group.
>block can use in place where js expect the single statement.
>also known as Compound Statement.

defined as two curly brackets
{
    var a = 10;
    console.log(a);
}

eg:
if(true) true; //expect single statent
if(true) console.log("Hello")


//We want use multiple statements
if(true) {
    var a = 10
    console.log(a);
}


Block Scope:

what var and func can be accesed inside the block.

{
    var a = 10;
    let b = 20;
    const c = 30;

    //let & const hoisted inside a block scope(separate memory space)
    //var inside a global scope

    console.log(a);//10
    console.log(b);//20
    console.log(c);//30
}

console.log(a);//10
console.log(b);//error
console.log(c);//error

let & const => block scoped
var => functional scoped


Shadowing:
eg:
var a = 100; // this var 'a' shadowed the var 'a' inside the block
{
    var a = 10; // this var 'a' shadowed the var 'a' outside the block
    console.log(a);//10
}
console.log(a);//10;
//global var is shadowed and also its value is modified.
//why?? because they pointing to the same memory location.

eg:
let a = 100;
{
    let a = 10;//shadowing //block scope
    console.log(a);//10
}
console.log(a);//100 //script scope

//both are in different scope


**Note => shadowing behave similiar way in both
block and function.

Illegal Shadowing:
eg:
let a = 10;
{
    var a = 20;// it cross the boundary
}
//u can't shadow let to var.
//vice versa is not illegal

let a = 10;
function x(){
    var a = 20;//it is legal(functional scope)
}
*/
