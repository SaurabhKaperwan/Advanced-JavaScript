// Scope Chain

/*
Scope: where can u access var & func in a program.

scope is directly dependent on lexical enviroment

eg1:
function a(){
    console.log(b);//10
}

var b = 10;
a();

eg2:
function a(){
    var b = 10;
}

a();
console.log(b);//not defined

Lexical Enviroment:
-------------------
whenever a EC is created a lexical enviroment is also created.

lexical means sequence or hierarchy
=>where function is phyiscal present in the code.
lexical parent => intermediate parent

LE = local memory + LE of its parent

eg:
function a(){
    var b = 10;
    c();
    function c(){

    }
}
We can say that function c is lexical inside the func a
=> function c is physically inside func a.

a is inside the global scope.

function c EC:

MEM                       Code
----------------------------------------------
reference to        |
lexical enviroment  |
to the parent (a)   |

func a EC:
points to global.

global EC:
Also have reference which points to the NULL;

Scope Chain : chain of lexical enviroment and parent reference.
way of finding whether a function or var is present inside a function or not.


*/
