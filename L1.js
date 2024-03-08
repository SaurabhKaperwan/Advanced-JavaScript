//Introduction(Execution Context)

/*

Everything in JS happens inside a Execution Context

Execution conetext is created whenever we run the program.

Global EC is created and Function EC whenever function called.

Once the JS is done its work in EC it will destroy it.
Note** => JS means JS engine
Execution Context:

Memory Component        |    Code Component
(Variable enviroment)   |    (Thread of execution)
----------------------------------------------------
key: value              |
a: 10                   |
fn: {}                  |

In Memory Component variable and function stored as key value pair.

In Code Component code where is executed one line at a time.


It have 2 phases(js runs through whole code in 2 phases line by line):
1.Memory creation:
js allocate memory to all var & func
Note**=> a.for func it store whole code.
         b.var initialized to undefined.
2.Code Execution:
execute the code.
initialized the value of var(n = 10).


Note** =>a.JS engine maintain all this using call stack.
b.call stack maintains order of execution of EC's.
c.Call stack => Program stack, control, runtime, machine.
*/

/*

JS is a synchronous single threaded language.
means js can execute one command at a time in a specific order.

*/
