<template>
  <div class="wrap-login">
    <div class="form-group">
      <input class="form-control account" name="account" placeholder="please input account" v-model="account" />
    </div>
    <div class="form-group">
      <input type="password" class="form-control password" name="password" placeholder="please input password" v-model="password" />
    </div>
    <div class="login" @click="login">Sign In</div>
  </div>
</template>

<script lang="ts">
import Api from '@/api/index'
import { Vue, Watch, Component } from 'vue-property-decorator'
import { LoginParams } from '@/interface/index'
import Cookies from 'js-cookie'
@Component
export default class Login extends Vue {
  private account: string = ''; // 账号
  private password: string = ''; // 密码
  private disable: boolean = true; // 是否禁用

  @Watch('account')
  onChildChanged(val: string, old: string) {
    if(val && val.length === 11) {
      this.disable = false
    }
  }
  private login(): void {
    const params: LoginParams = {
      phone: this.account,
      password: this.password
    }
    this.fetchLogin(params)
  }
  private async fetchLogin(param: LoginParams): Promise<void> {
    const res: any = await Api.getLogin(param)
    const { code, account } = res
    if(code && code === 200 && account) {
      const user = account && JSON.stringify(account)
      Cookies.set('ts_user', user)
      this.handleAfterLogin()
    } else {
      alert('登录失败 code：' + code)
    }
  }
  // 登录后的处理
  private handleAfterLogin(): void {
    this.$router.push({
      name: 'SongSheet'
    })
  }
}
</script>

<style lang="scss" scoped>
.wrap-login{
  padding: 20px;
  .form-group{
    width: 100%;
    border: 1px solid #ccc;/*no*/
    margin-top: 10px;
    input {
      width: 100%;
    }
    .form-control{
      padding: 10px;
    }
  }
  .login{
    margin-top: 20px;
    border-radius: 20px;
    padding: 10px 20px;
    border: 1px solid #ccc;/*no*/
  }
}
</style>