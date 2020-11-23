import { React, Component, Layout, connect, Card, Row, Col, Modal } from "../../global";
import PublicHeader from "../../components/public/header/PublicHeader";
import INGREDIENT from "../../redux/actions/public/ingredientAction";
import OrderForm from "../../components/public/order/form/OrderForm";
import { ConsoleSqlOutlined } from "@ant-design/icons";

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

  clear = () => {

  };


  createTimeToMakePizza = (time) => {
    let seconds = time / 1000.0;
    let decPart = (seconds + "").split(".")[1];
    return decPart
  };


  openIngredientCard = (data) => {
    console.log('dataaaaaaaaaa', data);
    let millisec = data.time;
    let seconds = millisec / 1000.0;
    console.log('seconds', seconds);
    //proslediti sekunde za izradu pice
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
              width={1300}
              style={{
                height: "830px",
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
                        <Card title={data.name.toUpperCase()} hoverable={true} onClick={() => this.openIngredientCard(data)} >
                          <p>Price : {data.price + " $"}</p>
                          <p>Time to make pizza : {this.createTimeToMakePizza(data.time) + " min"} </p>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Card>
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
              <OrderForm initalValues={ingredientPizza} closeIngredientCard={this.closeIngredientCard} />
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
  console.log('state 1', state);
  const fethcSuccess = state.ingredient.success;
  // Redux Store --> Component
  if (fethcSuccess) {
    const ingredient = state;
    return {
      ingredient: ingredient.ingredient.data,
    };
  }
};

// anything returned from this function will end up as props
function mapDispatchToProps(dispatch) {
  return {
    getIngredient: dispatch(INGREDIENT.request()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);