function create () {
  const a = 100
  return function () {
    console.log(a)
  }
}
const fn = create()
fn()
