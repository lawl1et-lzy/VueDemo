/**
 * ES6
 * 1. class
 * 2. 继承
 */
class People {
  constructor (name) {
    this.name = name
  }
  eat () {
    console.log(`${this.name} eat something`)
  }
}

class Student extends People {
  constructor (name, age) {
    super(name)
    this.age = age
  }
  sayAge () {
    console.log(`${this.name} say i am ${this.age} years old`)
  }
}

class Teacher extends People {
  constructor (name, course) {
    super(name)
    this.course = course
  }
  teach () {
    console.log(`${this.name} teach ${this.course}`)
  }
}

const xialuo = new Student('夏洛', 25)
xialuo.eat()
xialuo.sayAge()

const wang = new Teacher('王老师', '语文')
wang.eat()
wang.teach()
