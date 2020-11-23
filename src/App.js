import {
  React,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "../src/global";
import "../src/styles/styles.scss";
import HomePage from "../src/pages/public/HomePage";
import AdminPage from "../src/pages/admin/AdminPage";
import LogIn from "./components/public/login/LogIn";
import NoFoundPage from "../src/pages/public/NoFoundPage";

export default function AuthExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact={true} path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>

          <PrivateRoute path="/admin">
            <AdminPage />
          </PrivateRoute>

          <Route path="*">
            <NoFoundPage />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}




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

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
      }
    >
      <AdminPage />
    </Route>
  );
}
