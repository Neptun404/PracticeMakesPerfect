// Exercise 1:
// Create a function that takes 2 numbers and returns their difference
export function difference(num1: number, num2: number) {
    return Math.abs(num1 - num2);
}

// Exercise 2:
// Create a function that takes an array of numbers and returns the sum of all the numbers in the array
export function sumArray(numbers: number[]) {
    return numbers.reduce((acc, current) => acc + current, 0);
}

// Exercise 3:
// Create a function that takes a string and returns the first letter of the string in uppercase and the rest of the string in lowercase
export function capitalizeFirstLetter(string: string) {
    return string[0].toUpperCase() + string.slice(1);
}

// Exercise 4:
// Create a function that takes a number and returns true if the number is even and false if it is odd
export function isEven(number: number) {
    return number % 2 === 0;
}