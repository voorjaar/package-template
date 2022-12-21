export function fibonacci(num: number) {
  let a = 0, b = 1, sum;
  for (let i = 0; i < num; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  return b;
}
