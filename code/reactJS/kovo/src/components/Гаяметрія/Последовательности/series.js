// Utility functions to calculate various series

export const calculateHarmonicSeries = (n) => {
	let result = [];
	for (let i = 1; i <= n; i++) {
	  result.push(1 / i);
	}
	return result;
  };

  export const calculateYaviSeries = (n) => {
	let result = [0, 1];
	for (let i = 2; i < n; i++) {
	  result.push(result[i - 1] + result[i - 2]);
	}
	return result.slice(0, n);
  };

  export const calculateGeometricSequence = (a, r, n) => {
	let result = [];
	for (let i = 0; i < n; i++) {
	  result.push(a * Math.pow(r, i));
	}
	return result;
  };

  export const calculateNaviSeries = (a, d, n) => {
	let result = [];
	for (let i = 0; i < n; i++) {
	  result.push(a + i * d);
	}
	return result;
  };

  export const calculatePrimeNumbers = (n) => {
	let result = [];
	for (let i = 2; result.length < n; i++) {
	  if (isPrime(i)) result.push(i);
	}
	return result;
  };

  const isPrime = (num) => {
	if (num <= 1) return false;
	if (num <= 3) return true;
	if (num % 2 === 0 || num % 3 === 0) return false;
	for (let i = 5; i * i <= num; i += 6) {
	  if (num % i === 0 || num % (i + 2) === 0) return false;
	}
	return true;
  };

  export const calculateTaylorSeries = (n) => {
	const x = 1;
	let result = [];
	let factorial = 1;
	for (let i = 0; i < n; i++) {
	  if (i > 0) factorial *= i;
	  result.push(Math.pow(x, i) / factorial);
	}
	return result;
  };

  export const calculatePraviSeries = (num, times) => {
	return Array(times).fill(num);
  };

  export const calculateSlaviSeries = (sequence, times) => {
	return Array(times).fill(sequence).flat();
  };
