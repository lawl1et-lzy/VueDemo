function shuffle1 (arr) {
  if (!Array.isArray(arr) || arr.length === 0) return arr
  return arr.sort((a, b) => {
    return (Math.random() - 0.5)
  })
}

function shuffle2 (arr) {
  if (!Array.isArray(arr) || arr.length === 0) return arr
  for (let i = 0; i < arr.length; i++) {
    let j = Math.floor(Math.random() * i);
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export {
  shuffle1,
  shuffle2
}
