//async JS & Event Loop

/*
whatever comes in call stack is going to quickly automatically
executed.

Browser contains JS Engine and JS engine contains call stack.


Web API's:
to access utilities like
-setTimeout
-DOM APIs
-fetch()
-localStorage
-console
-location

Browser wrap up all these api into global or window object

**Note:
callback function don't go directly to call stack.

It go to Callback Queue and
Event Loop will check Callback Queue and
push it in inside call stack.

Event Loop continuosly check call stack and callback queue.

Need of Event Loop?
Fair chance

fetch("url").then(function cbF(){
    console.log("CB");
});

register cbF() inside web API's enviroment.

MicroTask Queue:

Fetch callback function don't go to callback queue.
It goes to microtask queue.

It have higher priroty then callback queue.

All Promise go inside microstack queue.
*/
