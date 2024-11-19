import { generateFizzBuzz } from "./constants";

const fizzbuzzGenerated: string[] = generateFizzBuzz();

for (let i = 0; i < fizzbuzzGenerated.length; i++) {
	console.log(fizzbuzzGenerated[i]);
}
