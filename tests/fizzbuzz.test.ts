import { isMultiple, generateFizzBuzz } from "../src/constants";

let fizzbuzzGenerated: string[];

beforeAll(() => {
	fizzbuzzGenerated = generateFizzBuzz();
});

test("isMultiple is correct", () => {
	// Multiples of 5
	expect(isMultiple(3, 3)).toBe(true);
	expect(isMultiple(2, 3)).toBe(false);
	// Multiples of 5
	expect(isMultiple(5, 5)).toBe(true);
	expect(isMultiple(2, 5)).toBe(false);
	// Both
	expect(isMultiple(90, 3)).toBe(true);
	expect(isMultiple(90, 5)).toBe(true);
});

test("Fizzbuzz correct", () => {
	// Multiples of 3
	expect(fizzbuzzGenerated[2]).toBe("Fizz");
	expect(fizzbuzzGenerated[1]).toBe("2");
	// Multiples of 5
	expect(fizzbuzzGenerated[4]).toBe("Buzz");
	expect(fizzbuzzGenerated[1]).toBe("2");
	// Both
	expect(fizzbuzzGenerated[89]).toBe("FizzBuzz");
});
