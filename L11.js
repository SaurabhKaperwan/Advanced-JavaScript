//map, filter and reduce

/*
All are higher order functions.

Map:
----
used to transform an array

const arr = [5, 1, 3, 2, 6];

//Double - [10, 2, 6, 4, 12]

function double(x){
    return x*2;
}
const output = arr.map(double);
console.log(output);

//Binary -["101", "1", "11", "10", "110"]

function binary(x){
    returnn x.toString(2);
}

another syntax:
const output = arr.map((x) => x.toString(2));



Filter:
-------
used to filter the values inside an array.

//filter odd values

function isOdd(x){
    return x % 2;
}

const output = arr.filter(isOdd);

Reduce:
-------
//sum of an array
//reduce takes 2 arguments: function and initial value of acc
//inside function takes 2 parametes => accumulator(accmulate
the values to get the result) and current

const output = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0);

//this 0 is initial value that u want to use as
initial value of acc;

//Find max in an array
const output = arr.reduce(function(max, curr){
    if(curr > max){
        max = curr;
    }
    return max;
}, 0);

*/

/*
//Practice

//find list of full name in array of objects

const users = [
    {firstName: "xyz", lastName: "abc", age: 26},
    {firstName: "xyz", lastName: "abc", age: 26},
];

const output = users.map(x => x.firstName + " " + x.lastName);

//find out different age and how many people with same age
const output = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});
//initial value is empty object

//Chaining
//filter users with age < 30 and print only their first name

const output = users.filter((x) => x.age < 30)
.map((x) => x.firstName);

//same problem using reduce

const output = users.reduce(function(acc, curr){
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
},[]);

*/
