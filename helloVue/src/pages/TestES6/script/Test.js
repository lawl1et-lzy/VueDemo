class Fn {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  toString () {
    return this.x * this.y
  }
}

class Fn1 extends Fn {
  constructor (x, y, z) {
    super(x, y)
    this.z = z
    this.x = x
  }

  toString () {
    return this.z + ',' + this.x + ',' + super.toString()
  }
}
let fn1 = new Fn1(10, 3, 4)
console.log(fn1.toString())
