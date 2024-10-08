// Exercise 1:
// Write a function that takes a number and returns its square
// Example:
// square(4) // Output: 16
export function square(number: number): number {
    return number * number;
}

// Exercise 2:
// Write a function that takes 2 numbers and returns their sum
// Example:
// sum(2, 3) // Output: 5
export function sum(number1: number, number2: number): number {
    return number1 + number2;
}

// Exercise 3:
// Write a function that takes a number and returns its double
// Example:
// double(5); // Output: 10
export function double(number: number): number {
    return number * 2;
}

// Exercise 4:
// Write a function that takes a string and returns its length
// Example:
// getStringLength("Hello World") // Output: 11
export function getStringLength(string: string): number {
    return string.length;
}

// Exercise 5:
// Write a function that takes 2 strings and concatenates them
// Example:
// concatenate("Hello", "World") // returns "HelloWorld"
export function concatenate(string1: string, string2: string): string {
    return string1 + string2;
}

export default {
    concatenate,
    double,
    getStringLength,
    square,
    sum
}