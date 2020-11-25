import { React, Component, Layout, connect, Card, Row, Col, Modal } from "../../global";
import { List, Typography, Divider } from 'antd';
import PublicHeader from "../../components/public/header/PublicHeader";
import INGREDIENT from "../../redux/actions/public/ingredientAction";
import ORDER from "../../redux/actions/public/ordersAction"
import OrderForm from "../../components/public/order/form/OrderForm";

const { Footer, Content } = Layout;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisibleModal: false,
      ingredientPizza: "",
      pizzaName: "",
      pizzaTime: "",
      pizzaPrice: ""
    };
  }

  createTimeToMakePizza = (time) => {
    let seconds = time / 1000.0;
    let decPart = (seconds + "").split(".")[1];
    return decPart
  };


  openPurchaseOrderCard = (data) => {
    let millisec = data.time;
    let seconds = millisec / 1000.0;
    let decPart = (seconds + "").split(".")[1];

    this.setState({
      isVisibleModal: true,
      ingredientPizza: data,
      pizzaName: data.name,
      pizzaTime: decPart,
      pizzaPrice: data.price

    })
  };

  closeIngredientCard = () => {
    this.setState({
      isVisibleModal: false
    })

  };

  render() {
    if (this.props.ingredient) {
      const { isVisibleModal, ingredientPizza, pizzaName, pizzaTime, pizzaPrice } = this.state;
      return (
        <div >
          <Layout>
            <PublicHeader />
            <Content
              width={100}
              style={{
                height: "auto",
                textAlign: "center",
                backgroundColor: "#eeeff1",
              }}
            >
              <Card title="Place the ingredients on the pizza." size="small" >
                <Row style={{
                  padding: "0.5rem",

                }}>
                  {this.props.ingredient.map((data, index) => {
                    return (
                      <Col span={6} key={index} type="primary" >
                        <Card title={data.name.toUpperCase()} hoverable={true} onClick={() => this.openPurchaseOrderCard(data)} >
                          <p>Price : {data.price + " $"}</p>
                          <p>Time to make pizza : {this.createTimeToMakePizza(data.time) + " min"} </p>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Card>

              <div>
                <Divider orientation="center">Orders</Divider>
                <List
                  bordered
                  dataSource={data}
                  split>
                  {this.props.ordersArray.map((data, index) => {
                    return (
                      <List.Item onClick={() => this.openPurchaseOrderCard(data)} key={index} >
                        <Card small title={data.name} hoverable={true} bordered style={{ width: "20rem", margin: "0 auto" }}>
                          <Typography.Text mark >
                            [Click to order]
                            <p>Price : {data.price + " $"}</p>
                            <p>Time to make pizza : {data.time + " min"} </p>
                            <p>Ordered from : {data.firstName + " " + data.lastName} </p>
                          </Typography.Text>
                        </Card>
                      </List.Item>
                    );
                  })}

                </List>
              </div>
            </Content>

            <Modal
              style={{
                textAlign: "center",
              }}
              title={"Pizza to order " + pizzaName + " | Time to make: " + pizzaTime + "min" + " | Price : " + pizzaPrice + "$"}
              visible={isVisibleModal}
              width={550}
              footer={false}
              centered={true}
              closable={false}
            >
              <OrderForm initalValues={ingredientPizza} closeIngredientCard={this.closeIngredientCard} convertTime={this.createTimeToMakePizza} />
            </Modal>

            <Footer style={{ textAlign: "center" }}>
              Design ©2020 Created by Nikola Mrkic
            </Footer>
          </Layout>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }

  }
}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  const fethcSuccessIngredient = state.ingredient.success;
  const fethcSuccessOrders = state.ordersState.success;
  // Redux Store --> Component
  if (fethcSuccessIngredient && fethcSuccessOrders) {
    return {
      ingredient: state.ingredient.data,
      ordersArray: state.ordersState.data
    };
  }
};

// anything returned from this function will end up as props
function mapDispatchToProps(dispatch) {
  return {
    getIngredient: dispatch(INGREDIENT.request()),
    getOrders: dispatch(ORDER.request()),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);