import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";

import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Authentification from "./pages/Authentification";
import Checkout from "./pages/Checkout";

import Header from "./components/Header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

// STYLES
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  unsubscribeFromAuth = null;

  renderAuth = () => {
    return this.props.currentUser ? <Redirect to="/" /> : <Authentification />;
  };

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Container>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/auth" render={this.renderAuth} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({ currentUser: selectCurrentUser });

const mapDispatchToProps = dispatch => ({ setCurrentUser: user => dispatch(setCurrentUser(user)) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
