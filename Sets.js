function uniqueElements(array) {
	let unique = new Set(array);
	return [...unique];
}

const arr = [30, 30, 40, 5, 223, 2049,67, 90, 10, 20, 3034, 5];

console.log(uniqueElements(arr));