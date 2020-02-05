// Максимальное нечетное число из массива
// Arrow-function
// Вариант №1
const array = ['4', '3', '7', '10', '1'];

const result = array
	.map((el) => parseInt(el))
	.filter((number) => number % 2)
	.reduce((max, value) => Math.max(max, value), 0)

console.log(result);

// Максимальное число из массива
// Вариант №2
const array2 = ['4', '3', '7', '10', '1'];
const sumNumbersArray2 = Math.max(...array2);
console.log(sumNumbersArray2);