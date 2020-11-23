import {
  React,
  connect,
  Layout,
  Component,
} from "../../../src/global";
import AdminHeader from "../../components/admin/header/AdminHeader";
import USER_ADMIN from "../../redux/actions/admin/userAction";

class AdminPage extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  render() {
    return (
      <div>
        <AdminHeader />
        <Layout style={{ minHeight: "56.4rem" }}>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("GLOBALNI STATEEEEE", state);

  const fetchingSuccess = state.adminUsers.success;
  console.log("fetchingSuccess", fetchingSuccess);
  // Redux Store --> Component
  if (fetchingSuccess) {
    const userAdminState = state;
    console.log("userAdminState state", state);
    return {
      adminUsers: userAdminState.adminUsers,
    };
  }
  return {
    adminUsers: "",
  };
};

// anything returned from this function will end up as props
function mapDispatchToProps(dispatch) {
  return {
    getAdminUsersAction: dispatch(USER_ADMIN.request()),
  };
}

export default connect(null, null)(AdminPage);
