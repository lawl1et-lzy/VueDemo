// 适配器
class Target {
  small () {
    throw new Error('This method must be overwritten!')
  }
}

class Adaptee {
  bigger () {
    console.log('港式的电器插头可用咯~~')
  }
}

class Adaptor extends Target {
  constructor (adaptee) {
    super()
    this.adaptee = adaptee
  }
  small () {
    this.adaptee.bigger()
  }
}

const adaptor = new Adaptor(new Adaptee())
adaptor.small()
