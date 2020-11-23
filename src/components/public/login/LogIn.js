import {
  React,
  Checkbox,
  Form,
  Input,
  Button,
  Link,
  useHistory,
  useLocation,
  UserOutlined,
  LockOutlined,
} from "../../../global";

const LogIn = () => {
  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    },
  };
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/admin" } };

  let history = useHistory();
  let login = () => {
    fakeAuth.authenticate(() => {
      console.log(fakeAuth.isAuthenticated);

      history.replace(from);
    });
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <p>Login to {from.pathname} page</p>

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link className="login-form-forgot"> Forgot password</Link>
        </Form.Item>

        <Form.Item>
          {/* <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button> */}
          <Button onClick={login} type="primary">
            Log in
          </Button>
          Or <Link>register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LogIn;
