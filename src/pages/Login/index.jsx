import { Card, Form, Input, Button, Checkbox, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import useStore from '../../store'

function Login() {
  const navigate = useNavigate()
  const { loginStore } = useStore()
  const onFinish = async (values) => {
    await loginStore.getToken({ mobild: values.mobile, code: values.code })
    navigate('/', { replace: true })
    message.success('登录成功')
  }

  return (
    <div className="login">
      <Card className="login-container">
        <img
          className="login-logo"
          src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
          alt=""
        />
        {/* 登录表单 */}
        <Form onFinish={onFinish}>
          <Form.Item
            name="mobile"
            rules={[
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号码格式不对',
              },
              { required: true, message: '请输入手机号' },
            ]}>
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              { len: 6, message: '验证码6个字符' },
              { required: true, message: '请输入验证码' },
            ]}>
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item name="confirm" valuePropName="checked">
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>

          <Form.Item>
            {/*  渲染 Button 组件为 submit 按钮 */}
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
