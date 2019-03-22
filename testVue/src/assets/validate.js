import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN.js'
// 中文字典
Validator.localize('zh', zh)
// 配置项
const config = {
  errorBagName: 'errors',
  delay: 0, // 错误提示延迟的时间
  local: 'zh_CN', // 中文提示
  messages: null,
  strict: true
}

// 注入到 Vue
Vue.use(VeeValidate, config)

// 自定义验证

// 姓名
Validator.extend('fullname', {
  // 错误提示信息
  getMessage: {
    cn: field => field + '请输入烟草专卖许可证上经营者姓名'
  },
  // 验证规则
  validate: value => {
    return /^[\u4e00-\u9fa5]{2,}$/.test(value)
  }
})

// 不能为空
Validator.extend('mRequired', {
  getMessage: field => {
    return field + '为必填项'
  },
  validate: value => {
    if (value === '') {
      return false
    } else {
      return true
    }
  }
})

// 身份证号
Validator.extend('idNumber', {
  getMessage: field => {
    return field + '请输入正确的身份证号'
  },
  validate: value => {
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)
  }
})

// 手机号
Validator.extend('phone', {
  messages: field => {
    return field + '请输入正确的手机号'
  },
  validate: value => {
    return /^1[0123456789]\d{9}$/.test(value)
  }
})
