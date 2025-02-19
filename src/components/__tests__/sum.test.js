import { sum } from "../sum"

test('sum function should calculate sum of 2 numbers', () => {
    const result = sum(1, 2)
    // Assertion
    expect(result).toBe(3)
})