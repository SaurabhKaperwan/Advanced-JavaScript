//Callback function & Async

/*
JS is a synchronous and single threaded language.

with the help of callback we can async things in JS.

Callback Func:
eg:
function x(y){

}

x(function y(){

});

func y is callback function
gives responsibility of calling the func y to func x whenever its want.
eg:
setTimeout(function(){
    console.log("timer");
}, 5000);
function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y");
});

O/P =>x y timer

Blocking of Main Thread:

Main Thread known as call stack.

some function taking long time to complete the work.
then anyother function can't perform its work.

Event Listeners with callback:

closure can be used for data hiding.

function attachEventListeners(){
    let count = 0;//data hiding
    document.getElementById("clickMe").addEventListeners("click", function xyz(){
        console.log("Button Clicked", ++count);
    });
}

attachEventListeners();

Garbage Collection & removeEventListeners:

Why we remove event listeners:
because they are heavy or takes large memory because it forms a closure with outer scope.

*/

