import {
  React,
  Field,
  Button,
  useHistory,
  reduxForm,
  useLocation,
  useDispatch
} from "../../../global";
import { renderInput } from "../order/form-component/index";
import USER from "../../../redux/actions/public/userAction/index"


let LogIn = (props) => {

  let location = useLocation();

  let { admin } = location.state || { admin: { pathname: "/admin" } };
  let { singin } = location.state || { singin: { pathname: "/singin" } };


  let history = useHistory();

  let singIn = () => {
    history.replace(singin);
  };


  const dispatch = useDispatch();

  let login = (values) => {
    console.log(" singIn Received values of form: ", values);
    dispatch(USER.logIn(values));
    // history.replace(admin);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const { handleSubmit } = props;

  return (
    <div>
      <p>Login to {admin.pathname} page</p>
      <form onSubmit={handleSubmit(login)}>
        <div>

          <div>
            <div>
              <Field
                label="Email"
                name="email"
                component={renderInput}
                type="text"
                placeholder="Enter email"
              />
              <Field
                label="Password"
                name="password"
                component={renderInput}
                type="text"
                placeholder="Enter password"
              />

            </div>
          </div>
          <Button type="primary" htmlType="submit">
            login
                         </Button>
          <Button type="button" onClick={singIn}>
            singIn
          </Button>
        </div>
      </form>
    </div>
  );
};
// Important: connect only after calling reduxForm!!!

LogIn = reduxForm({
  form: "LogIn",
})(LogIn);

export default LogIn;

