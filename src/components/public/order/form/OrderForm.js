import {
    React,
    Field,
    reduxForm,
    useDispatch,
    Button,
    useHistory,
} from "../../../../global";
import { renderInput } from "../form-component/index";
import USER_ADMIN from "../../../../redux/actions/admin/userAction/index";

let OrderForm = (props) => {
    const dispatch = useDispatch();
    let history = useHistory();
    console.log("props sa ordera", props);

    const onSubmitForm = (values) => {
        const order = { ...props.initalValues, ...values }
        console.log("order sa forme", order);
        // props.clearFields()
    };


    const { handleSubmit, reset } = props;

    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <div>
                <div>
                    <Field
                        label="First Name"
                        name="firstName"
                        component={renderInput}
                        type="text"
                        placeholder="Enter first name"
                    />
                    <Field
                        label="Last Name"
                        name="lastName"
                        component={renderInput}
                        type="text"
                        placeholder="Enter last name"
                    />
                    <Field
                        label="Address"
                        name="address"
                        component={renderInput}
                        type="text"
                        placeholder="Enter address"
                    />
                    <Field
                        label="Phone"
                        name="phone"
                        component={renderInput}
                        type="text"
                        placeholder="Enter phone"
                    />
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <Button type="primary" htmlType="submit">
                    Order
             </Button>
                <Button type="button" onClick={() => {
                    props.closeIngredientCard()
                    props.reset()
                }
                }>

                    Close Order
                 </Button>
            </div>
        </form>
    );
};

// redux-form
OrderForm = reduxForm({
    form: "OrderForm",
})(OrderForm);

// Important: connect only after calling reduxForm!!!
export default OrderForm;