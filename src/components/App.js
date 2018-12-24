import React from "react";
import PropTypes from "prop-types";
import {Provider} from "react-redux";
import {withStyles} from "@material-ui/core/styles";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import configureStore from "../store";
import PrivateRoute from "../containers/PrivateRoute";
import ChatPage from "../containers/ChatPage";
import WelcomePage from "../containers/WelcomePage";
import history from "../utils/history";

const styles = (theme) => ({
  root: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.default,
  },
  test: {
    display: "block",
  },
});

const store = configureStore();

const App = ({classes}) => (
  <Provider store={store}>
    <Router history={history}>
      <div className={classes.root}>
        <Switch>
          <Route exact path="/(welcome)?" component={WelcomePage} />
          <PrivateRoute path="/chat/:chatId?" component={ChatPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles)(App);
