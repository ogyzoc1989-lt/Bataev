 function power(a, n) {
  if (n === 0) {
    return 1;
  }
  return a * power(a, n - 1);
}
console.log(power(27, 8)); 
console.log(power(34, 3)); 
console.log(power(57, 2)); 