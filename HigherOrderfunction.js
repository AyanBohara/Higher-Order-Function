//------Higher-Order Function------
// In JavaScript, a higher-order function is a function that can accept other functions as arguments, return functions, or both. They enable abstraction, composition, and the creation of more flexible and reusable code.

//---Syntax---
function higherOrderFunction(callback) {
    // Perform some operations
    // Call the callback function
    callback();
}
function callbackFunction() {
    console.log("Callback function is executed.");
}
// Passing the callback function to the higher-order function
higherOrderFunction(callbackFunction);

//              <---Parameters--->:
// higherOrderFunction: Takes a callback function, executes it, and performs operations.

// callback: A function passed as an argument, executed inside higherOrderFunction.

// callbackFunction(): Logs “Callback function is executed.”

// Invocation: Calls higherOrderFunction(callbackFunction), executing callbackFunction within higherOrderFunction.

//---Example---
//  1.Function as Arguments
//--> A function can accept other functions as arguments. This allows for the creation of more abstract and reusable code.
//--Eg 
//|-->The formatter function changes how the name looks. The greet function uses this changed name to create a greeting message.


// Higher-order function
function greet(name, formatter) {
    console.log(`Hello, ${formatter(name)}!`);
}

// Functions to be passed as arguments
function toUpperCase(name) {
    return name.toUpperCase();
}

function toLowerCase(name) {
    return name.toLowerCase();
}

function addExclamation(name) {
    return `${name}!`;
}

// Using the higher-order function
greet('Alice', toUpperCase);     // Output: Hello, ALICE!
greet('Bob', toLowerCase);       // Output: Hello, bob!
greet('Charlie', addExclamation); // Output: Hello, Charlie!!


// 2. Functions that Return Functions:
// A function can return another function. This is useful for creating function factories or partial application.

//--Example: Function returning another function--

function createMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;
              //5  *  2
              //5  *  3
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

//Example: In this example, `creatMultiplier` is a higher-order function that takes a `multipier` as an argument and returns a new function that multiplies any number by that multiplier . We then use `double` and `triple` to create specialized functions.

//--------Exercise---------

//1. write a higher order function that takes a function and a numbers, and calls the function that many times


//The statement func(); executes the function that is passed to callFunctionNTimes as an argument.In summary, func(); allows the callFunctionNTimes higher-order function to execute any function passed to it multiple times, providing flexibility and allowing different functionalities to be executed in a repeated manner.

function callFunctionNTimes(func, n) {
    for (let i = 0; i < n; i++) {
        func();  //// Calls the passed function 'func'
    }
    console.log(`Function was called ${n} times`);
}

// Function to be passed as an argument
function sayHello() {
    console.log('Hello!');
}

// Using the higher-order function
callFunctionNTimes(sayHello, 3);
// Output:
// Hello!
// Hello!
// Hello!
// Function was called 3 times


//2. higher order function that takes a function and a value,apples the first function to the value and then applies the second function to the result

function applyFunctions(func1, func2, value) {
     // Apply func1 to the value
    const result = func1(value);
    // Apply func2 to the result of func1
    return func2(result);
}
// Functions to be passed as arguments

function increment(num) {
    return num + 1; // Adds 1 to the number
}
function double(num) {
    return num * 2; // Doubles the number
}

// Using the higher-order function
const finalResult = applyFunctions(increment, double, 3);
console.log(finalResult); // Output: 8


// Step-by-Step Execution
// Start with Number: 3
// Apply increment(3):
// increment adds 1 to 3, resulting in 4.
// Apply double(4):
// double multiplies 4 by 2, resulting in 8.
// Final Result:
// The final result is 8, which is logged to the console.
// Summary
// Input: 3
// First Function (increment): Adds 1 → 4
// Second Function (double): Doubles 4 → 8
// Output: 8
// This way, you use applyFunctions to process the number with two functions in sequence.


// Explanation
// Higher-Order Function applyFunctions:

// Parameters:

// func1: The first function to apply.
// func2: The second function to apply.
// value: The initial value to process.
// Process:

// First, apply func1 to value and store the result in result.
// Then, apply func2 to result and return the final result.
// Functions Used:

// increment: Adds 1 to its input.
// double: Multiplies its input by 2.
// Execution:

// Call applyFunctions(increment, double, 3):
// Step 1: increment(3) computes 3 + 1, resulting in 4.
// Step 2: double(4) computes 4 * 2, resulting in 8.
// The final result is 8, which is logged to the console.
// Breakdown of the Execution:

// Initial Value: 3
// First Function (increment): Adds 1 to 3, resulting in 4.
// Second Function (double): Multiplies 4 by 2, resulting in 8.
// Final Output: 8






