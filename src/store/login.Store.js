import { makeAutoObservable } from "mobx"
import {
  http,
  getToken,
  setToken,
} from "@/utils"

class LoginStore {
  token = getToken() || ''
  constructor() {
    makeAutoObservable(this)
  }

  getToken = async ({ mobile, code }) => {
    // const res = await http.post('http://geek.itheima.net/v1_0/authorizations', { mobile, code })
    // this.token = res.data.token
    this.token = 'abcd'
    setToken(this.token)
  }
}

export default LoginStore