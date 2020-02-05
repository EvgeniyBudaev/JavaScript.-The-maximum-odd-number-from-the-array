
		
	// Максимальное нечетное число из массива
	// Arrow-function

	const array = ['4', '3', '7', '10', '1'];

	const result = array
		.map((el) => parseInt(el))
		.filter((number) => number%2)
		.reduce((max, value) => Math.max(max, value), 0)
	
		console.log(result);



	
	