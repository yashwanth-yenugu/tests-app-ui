import React, { Component } from "react";
import "./QuestionsForm.css";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";

export class QuestionsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      toList: false
    };

    this.handleQueChange = this.handleQueChange.bind(this);
    this.handleOpt1Change = this.handleOpt1Change.bind(this);
    this.handleOpt2Change = this.handleOpt2Change.bind(this);
    this.handleOpt3Change = this.handleOpt3Change.bind(this);
    this.handleOpt4Change = this.handleOpt4Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleQueChange(event) {
    this.setState({ question: event.target.value });
  }
  handleOpt1Change(event) {
    this.setState({ option1: event.target.value });
  }
  handleOpt2Change(event) {
    this.setState({ option2: event.target.value });
  }
  handleOpt3Change(event) {
    this.setState({ option3: event.target.value });
  }
  handleOpt4Change(event) {
    this.setState({ option4: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { question, option1, option2, option3, option4 } = this.state;
    if (question && option1 && option2 && option3 && option4) {
      const input = {
        question,
        options: [option1, option2, option3, option4]
      };
      const axiosRes = await axios.post("http://localhost:3030/tests", input);
      console.log(axiosRes);
      this.setState({ toList: true });
    } else {
      alert("Fill all fields to proceed");
    }
  }
  render() {
    if (this.state.toList) {
      return <Redirect to="/list" />;
    }
    return (
      <div className="container">
        <form className="flexForm">
          <TextField
            id="question"
            value={this.state.question}
            onChange={this.handleQueChange}
            label="Question"
            variant="outlined"
            className="textField"
          />
          <TextField
            id="option1"
            value={this.state.option1}
            onChange={this.handleOpt1Change}
            label="Option 1"
            className="textField"
          />
          <TextField
            id="option2"
            value={this.state.option2}
            onChange={this.handleOpt2Change}
            label="Option 2"
            className="textField"
          />
          <TextField
            id="option3"
            value={this.state.option3}
            onChange={this.handleOpt3Change}
            label="Option 3"
            className="textField"
          />
          <TextField
            id="option4"
            value={this.state.option4}
            onChange={this.handleOpt4Change}
            label="Option 4"
            className="textField"
          />
          <div className="submitButton">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default QuestionsForm;
