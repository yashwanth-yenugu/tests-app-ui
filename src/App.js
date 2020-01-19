import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import QuestionsForm from "./components/QuestionsFormComponent/QuestionsForm";
import QuestionsList from "./components/QuestionsListComponent/QuestionsList";
import { AppBar, Typography, makeStyles, Toolbar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Erudex
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/form">
          <QuestionsForm />
        </Route>
        <Route path="/list">
          <QuestionsList />
        </Route>
        <Route path="/">
          <Redirect to="/form" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
