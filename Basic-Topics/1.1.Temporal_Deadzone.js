/** @format */

age = 26;

console.log("age is -->", age);

let age = 30;
// const age = 30;

console.log("age is -->", age);

/**
 * Geeting Error because The execution of code where variables declared with *let and const* exist but cannot be accessed or assigned a value until they are declared and initialized
 * Output: node 1.1.Temporal_Deadzone.js 
    /Javascript-Topics/1.1.Temporal_Deadzone.js:3
    age = 26;
        ^
        
    ReferenceError: Cannot access 'age' before initialization
 */
