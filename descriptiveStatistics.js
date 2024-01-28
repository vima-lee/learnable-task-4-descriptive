class descripition {
    static mean(numbers) {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      return sum / numbers.length;
    }
  
    static median(numbers) {
      const sortedNumbers = numbers.sort((a, b) => a - b);
      const middle = Math.floor(sortedNumbers.length / 2);
      return sortedNumbers.length % 2 === 0
        ? (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2
        : sortedNumbers[middle];
    }
  
    static mode() {
    }
  
    static range(numbers) {
      const sortedNumbers = numbers.sort((a, b) => a - b);
      return sortedNumbers[sortedNumbers.length - 1] - sortedNumbers[0];
    }
  
    static variance(numbers) {
      const meanValue = descripition.mean(numbers);
      const squaredDifferences = numbers.map((num) => (num - meanValue) ** 2);
      return descripition.mean(squaredDifferences);
    }
  
    static standardDeviation(numbers) {
      return Math.sqrt(descripition.variance(numbers));
    }
  }
  

  const dataset = [11, 14, 17, 10, 7, 13, 9, 21];
  console.log(descripition.mean(dataset));
  console.log(descripition.median(dataset));
  console.log(descripition.range(dataset));
  console.log(descripition.standardDeviation(dataset));