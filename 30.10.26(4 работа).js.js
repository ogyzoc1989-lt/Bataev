function sumTo(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumTo(n - 1);
}
console.log(sumTo(3)); 
console.log(sumTo(7)); 
console.log(sumTo(9)); 