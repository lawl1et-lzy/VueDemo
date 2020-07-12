// 工厂模式
class User {
  constructor (opt) {
    this.name = opt.name
    this.viewPage = opt.viewPage
  }

  static getInstance (role) {
    switch (role) {
      case 'admin':
        return new User({name: '超级管理员', viewPage: ['a', 'b']})
      case 'customer':
        return new User({name: '客户', viewPage: ['a', 'b']})
    }
  }
}
const user = User.getInstance('admin')
console.log('user', user)
