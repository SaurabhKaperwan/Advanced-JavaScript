//Closures

/*
Closure:
a function bind together with its lexical outer enviroment or lexical scope forms
a closure.

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();


eg:
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y; //not only function return => closure is returned(function + lexical scope)
    //func y form the closure with var a
}

var z = x();// x is destroyed after this statement
console.log(x);//print whole code y()
z();//7

we are using y() outside of its scope
when func is returned they still retain their lexical scope
they remember where they actually present.

use of closures:
-maintaining state in async world
-setTimeouts
-Iterators
-currying
-function like once
*/


/*
Practice:

function x(){
    var i = 1;
    setTimeout(function(){
        console.log(i);
    }, 1000);
    console.log("Hello");
}

x();

O/P => Hello
       1

JS not wait for none

setTimeout take the callback func and store it
in some place and attach the timer to it and JS proceed.

Once the timer expire it puts it inside a call stack.

eg:
print 1 to i with a fix interval

function x(){
    for(var i = 1; i <= 5; i++){
        setTimeout(function(){
            console.log(i);
        }, i*1000);
    }
    console.log("Hello");
}

x();

O/P =>
Hello
6
6
6
6
6

why?
all of the copy of setTimeout call back function
refer to the same memory space of i.

eg:
function x(){
    for(let i = 1; i <= 5; i++){//separate copy of i of every time
        setTimeout(function(){
            console.log(i);
        }, i*1000);
    }
    console.log("Hello");
}

x();
let is block scoped
O/P=>
Hello
1
2
3
4
5

Fix it using var:
eg:
function x(){
    for(var i = 1; i <= 5; i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            }, x*1000);
        }
        close(i);//Every time make a new copy
    }
    console.log("Hello");
}

x();

//O/P:
Hello
1
2
3
4
5

eg:
function counter(){
    var count = 0;
    return function incrementCounter(){
        count++;
        console.log(count);
    }
}

var counter1 = counter();
counter1();//1
counter1();//2

var counter2 = counter();//fresh counter again form a closure
counter2();//1
counter2();//2

Disadvantages of closure:
=>memory consumption high

Garage Collector:
program in browser or JS engine to free up the space.

eg:
function a(){
    var x = 0, z = 10;
    return function b(){
        console.log(x);
    }
}

var y = a(); // memory is not freed
y();

Smart Garbage collector:
It don't make closure with z because it is not used
in function.

console.log(x);//undefined
console.log(z);//error
*/

