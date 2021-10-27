function findOdd(numbers) {
  for (const number of numbers) {
    const found = numbers.filter((v) => number === v).length;
    if (found % 2 === 1) return number;
  }
}
