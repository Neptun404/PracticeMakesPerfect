import {
    sum,
    double,
    getStringLength,
    concatenate,
    square
} from "../src/part_1"

test('Adds 1 + 2 to be 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('Adds 1000 + 1999 to be 2999', () => {
    expect(sum(1000, 1999)).toBe(2999)
})


test('square(4) should be 16', () => {
    expect(square(4)).toBe(16)
})

test('double(5) should be 10', () => {
    expect(double(5)).toBe(10)
})

test('getStringLength("Hello World") should be 11', () => {
    expect(getStringLength("Hello World")).toBe(11)
})

test('concatenate("Hello", "World") should be "HelloWorld"', () => {
    expect(concatenate("Hello", "World")).toBe("HelloWorld")
})
