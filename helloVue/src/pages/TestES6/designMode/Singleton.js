// 单例模式

// ES6
class Singleton {
  constructor (name) {
    this.name = name
    if (!Singleton.instance) {
      Singleton.instance = this
    }
    return Singleton.instance
  }
}

console.log('SingletonA', new Singleton('lawliet'))
console.log('SingletonB', new Singleton('niya'))

// ES5
function ES5Singleton (name) {
  this.name = name
}
ES5Singleton.prototype.sayHello = function () {
  return `hi, ${this.name}`
}
const CreateSingleton = (function () {
  let instance
  return (name) => {
    if (!instance) {
      instance = new ES5Singleton(name)
    }
    return instance
  }
})()

console.log('SingletonA', new CreateSingleton('lawliet').sayHello())
console.log('SingletonB', new CreateSingleton('niya').sayHello())
