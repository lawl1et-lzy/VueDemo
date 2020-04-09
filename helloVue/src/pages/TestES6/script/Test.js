function RMB (str) {
  let arr = str.split('').reverse()
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i])
    if ((i + 1) % 3 === 0 && arr.length !== (i + 1)) {
      result.push(',')
    }
  }
  return result.reverse().join('')
}

console.log(RMB('123456789'))
