import { React, Component, Layout, connect, Card, Row, Col, Modal } from "../../global";
import PublicHeader from "../../components/public/header/PublicHeader";
import INGREDIENT from "../../redux/actions/public/ingredientAction";

const { Footer, Content } = Layout;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisibleModal: false
    };

  }


  openIngredientCard = (data) => {
    console.log('dataaaaaaaaaa', data);
    this.setState({
      isVisibleModal: true
    })
  };


  render() {
    if (this.props.ingredient) {
      const { current, setCurrent, isVisibleModal } = this.state;
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
              <Card title="Place the ingredients on the pizza."  >
                <Row>
                  {this.props.ingredient.map((data, index) => {
                    return (
                      <Col span={6} key={index} type="primary" >
                        <Card title={data.name} hoverable={true} onClick={() => this.openIngredientCard(data)} >
                          <p>Price : {data.price}</p>
                          <p>Time to make pizza : {data.time}</p>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Card>

            </Content>

            <Modal
              title="modall"
              visible={isVisibleModal}
              // onCancel={resetForm}
              width={600}
              footer={false}
            >
              {/* <UserForm initialValues={useUser} editableForm={isDataForEdit} /> */}
            </Modal>

            <Footer style={{ textAlign: "center" }}>
              Design ©2020 Created by Nikola Mrkic
            </Footer>
          </Layout>
        </div>
      );
    } else {
      return (<div>
      </div>)
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
    getIngredient: dispatch(INGREDIENT.request())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);