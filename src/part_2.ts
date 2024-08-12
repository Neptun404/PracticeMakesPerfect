// Exercise 1:
// Create a function that takes 2 numbers and returns their difference
export function difference(num1: number, num2: number) {

    return Math.abs(num1 - num2)
}

// Exercise 2:
// Create a function that takes an array of numbers and returns the sum of all the numbers in the array
export function sumArray(numbers: number[]) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

// Exercise 3:
// Create a function that takes a string and returns the first letter of the string in uppercase and the rest of the string the same
export function capitalizeFirstLetter(input: string): string {
    if (input.length === 0) {
        return input; // Return the empty string if no characters are present
    }

    // Capitalize the first letter and concatenate it with the rest of the string
    return input.charAt(0).toUpperCase() + input.slice(1);
}

// Exercise 4:
// Create a function that takes a number and returns true if the number is even and false if it is odd
export function isEven(number: number) {

    const message: string = "cock and balls";
    const message2: string = "vagina";

    
    if(number % 2 === 0){
        console.log(message);
        return true
    }else{
        console.log(message2);
        return false
    }




}
