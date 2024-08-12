

import {
    capitalizeFirstLetter,
    difference,
    isEven,
    sumArray
} from "../src/part_2"

test('CapitalizeFirstLetter("hello") should be "Hello"', () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello")
})

test('CapitalizeFirstLetter("@abc") should be "@abc"', () => {
    expect(capitalizeFirstLetter("@abc")).toBe("@abc")
})

test('capitalizeFirstLetter("ApPle") should be "ApPle"', () => {
    expect(capitalizeFirstLetter("ApPle")).toBe("ApPle")
})

test('isEven(2) should be true', () => {
    expect(isEven(2)).toBe(true)
})

test('isEven(3) should be false', () => {
    expect(isEven(3)).toBe(false)
})

test('isEven(-1) should be false', () => {
    expect(isEven(-1)).toBe(false)
})


test('difference(5, 3) should be 2', () => {
    expect(difference(5, 3)).toBe(2)
})

test('difference(10, 5) should be 5', () => {
    expect(difference(10, 5)).toBe(5)
})

test('sumArray([]) should be 0', () => {
    expect(sumArray([])).toBe(0)
})

test('sumArray([1, 2, 3]) should be 6', () => {
    expect(sumArray([1, 2, 3])).toBe(6)
})

test('sumArray([-1, 0, 1]) should be 0', () => {
    expect(sumArray([-1, 0, 1])).toBe(0)
})
