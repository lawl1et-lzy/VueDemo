// 子订单状态
let orderStatusEnum = {
  unknown_wvp_order_status: 0,
  wait_to_pay_wvp_order_status: 1,
  paid_wvp_order_status: 2,
  paid_with_refund_wvp_order_status: 3,
  properties: {
    0: {
      name: 'unknown_wvp_order_status',
      value: ''
    },
    1: {
      name: 'wait_to_pay_wvp_order_status',
      value: '待支付'
    },
    2: {
      name: 'paid_wvp_order_status',
      value: '已支付'
    },
    3: {
      name: 'paid_with_refund_wvp_order_status',
      value: '已支付，有退费'
    }
  }
}

class EnumMap {
  constructor (enumObj) {
    this.enumObj = enumObj // 枚举类型

    this.validateArgs()
  }

  // 初始化
  validateArgs () {
    if (Array.isArray(this.enumObj) || !(this.enumObj instanceof Object)) {
      console.error('EnumMap 实例化需要传入对象')
    }
  }

  // 返回英文名
  getName (key) {
    return this.enumObj.properties[this.enumObj[key]].name
  }

  // 返回英文名
  getValue (key) {
    return this.enumObj.properties[this.enumObj[key]].value
  }
}
let enumObj = new EnumMap(orderStatusEnum)
console.log(enumObj.getName('wait_to_pay_wvp_order_status'))
console.log(enumObj.getValue('wait_to_pay_wvp_order_status'))
