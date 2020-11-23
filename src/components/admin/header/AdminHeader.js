import {
  React,
  Button,
  Divider,
  Avatar,
  PageHeader,
  useState,
  useHistory,
} from "../../../global";

const AdminHeader = () => {
  const UserList = ["NM", "Lucy"];
  const ColorList = ["#f56a00"];

  const [user] = useState(UserList[0]);
  const [color] = useState(ColorList[0]);
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
  let history = useHistory();
  return (
    <div>
      <PageHeader
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        }}
        className="admin-header"
        onBack={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
        extra={[
          <Divider type="vertical" size="big" />,

          <Button
            type="primary"
            onClick={() => {
              fakeAuth.signout(() => history.push("/"));
            }}
          >
            Sign out
          </Button>,
          <Divider type="vertical" />,
          <Avatar style={{ backgroundColor: color }} size="large">
            {user}
          </Avatar>,
        ]}
        title="Admin header"
        subTitle="This is a subtitle"
      />
    </div>
  );
};

export default AdminHeader;
