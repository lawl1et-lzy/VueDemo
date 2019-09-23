class BaseDao {
  constructor (model) {
    this.model = model
  }
  create (x, y) {
    console.log('BaseDao create', x, y)
    console.log('BaseDao this.model', this.model)
  }
}
class User {
  // create (x, y) {
  //   console.log('User create', x + y)
  // }
}
const user = new User()

class UserDao extends BaseDao {
  constructor () {
    super(user)
  }
  // create (x, y) {
  //   console.log('UserDao create', x, y)
  // }
}
let userdao = new UserDao()
userdao.create(1, 2)
