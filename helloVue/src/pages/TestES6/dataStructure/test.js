// 1 1 2 3 5 8 13
const fabonacci = (num, n1 = 1, n2 = 1) => {
  if (num === 1) return n2
  // return fabonacci(num - 1) + fabonacci(num - 2)

  return fabonacci(num - 1, n2, n1 + n2)
}
console.log('fabonacci', fabonacci(10))
