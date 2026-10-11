const numbers = [3, 7, 12];
numbers[1] = 10;
console.log("1. Масив чисел після зміни другого елемента:", numbers);

const words = ["яблуко", "груша", "слива"];
words.push("персик");
console.log("2. Масив рядків після додавання:", words);

const valuesToSum = [4, 8, 15, 16, 23, 42];
const sum = valuesToSum.reduce((total, value) => total + value, 0);
console.log("3. Сума чисел у масиві:", sum);

const fiveNumbers = [2, 4, 6, 8, 10];
console.log("4. Елементи масиву:");
for (let index = 0; index < fiveNumbers.length; index += 1) {
	console.log(fiveNumbers[index]);
}

const fiveWords = ["кіт", "сонце", "програмування", "книга", "навчання"];
console.log("5. Рядки довші за 5 символів:");
for (const word of fiveWords) {
	if (word.length > 5) {
		console.log(word);
	}
}

const tenNumbersForMax = [14, 3, 27, 8, 41, 19, 6, 32, 11, 25];
const maximum = Math.max(...tenNumbersForMax);
console.log("6. Максимальне значення:", maximum);

const tenNumbersForEven = [1, 2, 13, 24, 35, 46, 57, 68, 79, 80];
const evenNumbers = tenNumbersForEven.filter((number) => number % 2 === 0);
console.log("7. Парні числа:", evenNumbers);
