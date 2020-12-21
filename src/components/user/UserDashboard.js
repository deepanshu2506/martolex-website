import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/authActions";
import { connect } from "react-redux";
import DashboardHome from "./DashBoardHome";
import UserOrders from "./Orders/UserOrders";
import PrivateRoute from "../utils/PrivateRoute";
import UserBooks from "./UserBooks/UserBooks";
import BookOrders from "./UserBooks/BookOrders";
import { useGoogleLogout } from "react-google-login";
import { GOOGLE_CLIENT_ID } from "../../config";
const UserDashboard = (props) => {
  const { url: currUrl } = props.match;
  const googleLogout = useGoogleLogout({
    clientId: GOOGLE_CLIENT_ID,
    onLogoutSuccess: () => {
      props.userLogout();
    },
    onFailure: () => console.log("could not logout"),
  });
  const logoutUser = () => {
    if (props.type === "GOOGLE") {
      googleLogout.signOut();
    } else {
      props.userLogout();
    }
  };
  return (
    <Container fluid>
      <Row className="px-2">
        <Col md={2} className="py-2">
          <ListGroup>
            <Link to={`${currUrl}`}>
              <ListGroup.Item
                active={props.location.pathname === "/profile"}
                action
              >
                DASHBOARD
              </ListGroup.Item>
            </Link>
            <Link to={`${currUrl}/orders`}>
              <ListGroup.Item
                active={props.location.pathname.includes("/orders")}
                action
              >
                ORDERS
              </ListGroup.Item>
            </Link>
            {props.isSeller && (
              <Link to={`${currUrl}/books`}>
                <ListGroup.Item
                  active={props.location.pathname.includes("/books")}
                  action
                >
                  UPLOADED BOOKS
                </ListGroup.Item>
              </Link>
            )}
            <Link to={`${currUrl}/edit`}>
              <ListGroup.Item
                active={props.location.pathname.includes("/edit")}
                action
              >
                PROFILE
              </ListGroup.Item>
            </Link>

            <Link to={`/`}>
              <ListGroup.Item action onClick={logoutUser}>
                LOGOUT
              </ListGroup.Item>
            </Link>
          </ListGroup>
        </Col>
        <Col className="mx-2 my-2 p-0" style={{ border: "1px solid #eee" }}>
          <Switch>
            <PrivateRoute exact path="/profile/">
              <DashboardHome />
            </PrivateRoute>
            <PrivateRoute exact path="/profile/orders">
              <UserOrders />
            </PrivateRoute>
            {props.isSeller && (
              <PrivateRoute exact path="/profile/books">
                <UserBooks />
              </PrivateRoute>
            )}
            {props.isSeller && (
              <PrivateRoute path="/profile/book/:BookId/orders">
                <BookOrders />
              </PrivateRoute>
            )}
            <Route
              exact
              path="/profile/edit"
              component={(props) => <h1>Edit profile</h1>}
            />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};
const mapDispatchToProps = (dispatch) => ({
  userLogout: () => dispatch(logout()),
});

const mapStateToProps = (state) => ({
  isSeller: state.user.profile.isSeller,
  type: state.user.type,
});
export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
