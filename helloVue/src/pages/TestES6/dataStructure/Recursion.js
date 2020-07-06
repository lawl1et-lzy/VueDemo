// 递归

/**
 * 阶乘
 * n * (n - 1) * (n - 2)
 */

// function factorialIterative (number) {
function factorialIterative (number, sum) {
  // if (typeof number !== 'number') return number
  // // 1 for
  // let sum = 1
  // for (let i = number; i > 0; i--) {
  //   sum = sum * i
  // }
  // return sum

  // 2 while
  // let i = number
  // let sum = 1
  // while (i > 0) {
  //   sum = sum * i - 1
  //   i--
  // }
  // return sum

  // 3 递归
  // if (number === 1 || number === 0) {
  //   return 1
  // }
  // return number * factorialIterative(number - 1)

  // 4. 递归 + 尾递归
  if (number === 1 || number === 0) {
    return sum
  }
  if (sum == null) sum = 1
  sum = sum * number
  return factorialIterative(number - 1, sum)
}

/**
 * 斐波那契数
 * 1 1 2 3 5 8...
 */
function fibonacci (index) {
// function fibonacci (index, sum = 0) {
  // 1. 存放在 arr 里面
  // if (index == null || index === 0) return index
  // let _idx = index - 1
  // if (_idx === 0 || _idx === 1) return 1
  // let arr = [1, 1]
  // for (let i = 2; i <= _idx; i++) {
  //   arr.push((arr[i - 1] + arr[i - 2]))
  // }
  // return arr[arr.length - 1]

  // 2. 递归
  // if (index == null || index === 0) return index
  // let _idx = index - 1
  // if (_idx === 0 || _idx === 1) return 1
  // return fibonacci(index - 1) + fibonacci(index - 2)

  // 3. ES6
  let a = 1
  let b = 1
  let i = 2
  while (i <= index) {
    [a, b] = [b, a + b]
    i++
  }
  return a
}

try {
  // console.time('fibonacci')
  const sum = fibonacci(3)
  // console.timeEnd('fibonacci')
  console.log('sum', sum)
} catch (error) {
  console.log('recursiveFn i', error)
}
