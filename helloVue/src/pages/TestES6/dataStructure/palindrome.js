/**
 * 回文字符串
 * 如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)
 */
export default function palindrome (str) {
  if (typeof str !== 'string') return false

  str = str.replace(/[\W\s_]/gi, '').toLocaleLowerCase()

  // 1. 通过 reverse 来判断
  // const reverseStr = str.split('').reverse().join('')
  // return reverseStr === str

  // 2. for 循环来判断
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false
    }
  }

  return true
}
