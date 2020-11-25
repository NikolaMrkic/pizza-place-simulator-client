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



let SingIn = (props) => {
    let location = useLocation();
    let { login } = location.state || { login: { pathname: "/login" } };
    let history = useHistory();
    const dispatch = useDispatch();

    let onSubmitForm = (values) => {
        dispatch(USER.singIn(values));
        history.replace(login);
    };

    const { handleSubmit } = props;

    return (
        <div>
            <p>Login to {login.pathname} page</p>
            <form onSubmit={handleSubmit(onSubmitForm)}>
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
                        SingIn
                         </Button>
                </div>
            </form>
        </div>
    );
};
// Important: connect only after calling reduxForm!!!

SingIn = reduxForm({
    form: "SingIn",
})(SingIn);

export default SingIn;

