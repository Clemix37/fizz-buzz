export const MIN: number = 1;
export const MAX: number = 100;

/**
 * Check if the given number is multiple of the second number as argument
 * @param nb
 * @param multiple
 * @returns {boolean}
 */
export const isMultiple = (nb: number, multiple: number): boolean => nb % multiple === 0;

/**
 * Returns an array of fizzbuzz values based on minimum and maximum values
 * @param min
 * @param max
 * @returns {string[]}
 */
export function generateFizzBuzz(min: number = MIN, max: number = MAX): string[] {
	const arr: string[] = [];
	for (let i = min; i <= max; i++) {
		let display: string = "";
		// Mutiple of 3
		if (isMultiple(i, 3)) display += "Fizz";
		// Multiple of 5
		if (isMultiple(i, 5)) display += "Buzz";
		arr.push(display ? display : `${i}`);
	}
	return arr;
}
