import {
    getToken,
  } from "@/utils"
import { Navigate } from 'react-router-dom'


// 高阶组件：接收其他组件作为参数
function AuthCom({children}) {
    const token = getToken()
    if (token) {
        return <>{children}</>
    } else {
        return <Navigate to='/login' replace/>
    }
}

export default AuthCom