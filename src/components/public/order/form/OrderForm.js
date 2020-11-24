import {
    React,
    Field,
    reduxForm,
    useDispatch,
    Button,
    useState,
    // useHistory,
} from "../../../../global";
import { Alert } from 'antd';
import { Divider } from 'antd';
import { renderInput } from "../form-component/index";
import ORDER from "../../../../redux/actions/public/ordersAction/index"
let OrderForm = (props) => {
    console.log('props sa forme', props);
    const [visible, setVisible] = useState(false);
    const [initalValues, setinitalValues] = useState({});

    const dispatch = useDispatch();
    // let history = useHistory();
    // console.log("props sa ordera", props);
    const onSubmitForm = (values) => {
        const order = { ...props.initalValues, ...values }
        setinitalValues(order);
        setVisible(true)
        setTimeout(() => {
            dispatch(ORDER.save(order));
            props.closeIngredientCard()
            props.reset()
            setVisible(false);
        }, order.time)

    };

    const handleClose = () => {
        setVisible(false);
    };


    const { handleSubmit } = props;

    return (
        <div>
            <div>
                {visible ? (
                    <Alert style={{ marginBottom: "1rem" }} message={initalValues.firstName + " " + initalValues.lastName + " Thanks for the order. Your pizza is ready for " + props.convertTime(initalValues.time) + " min."} type="success" closable afterClose={handleClose} />
                ) : null}
            </div>

            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>

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
                </div>
            </form>
        </div >
    );
};

// redux-form
OrderForm = reduxForm({
    form: "OrderForm",
})(OrderForm);

// Important: connect only after calling reduxForm!!!
export default OrderForm;