export const findSum = (value: number, sum: number): number => {
  value = Math.abs(value);
  while (value > 0) {
    const mod = Math.floor(value % 10);
    sum += mod;
    value = Math.abs(value / 10);
  }
  return sum;
};
