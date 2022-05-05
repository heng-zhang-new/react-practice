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
    const res = await http.post('get-token', { mobile, code })
    this.token = res.data.token
    setToken(this.token)
  }
}

export default LoginStore