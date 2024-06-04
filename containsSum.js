/**
 * 
 	Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
	For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17
 */

const containsSum = (numbers, k) => {
	for (let i = 0; i < numbers.length; i++) {
		for (let j = 0; j < numbers.length; j++) {
			if (i !== j) {
				let sum = numbers[i] + numbers[j]

				if (sum === k) {
					console.log(`${numbers[i]} + ${numbers[j]} is ${k}`)
					return true
				}
			}
		}
	}
	return false
}

const numbers = [8, 15, 19, 6]
const k = 25

console.log(containsSum(numbers, k))
