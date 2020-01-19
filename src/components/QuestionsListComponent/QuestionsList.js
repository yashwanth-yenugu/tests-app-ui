import React, { Component } from "react";
import axios from "axios";
import "./QuestionsList.css";
import { Card } from "@material-ui/core";
import { Button } from "@material-ui/core";

export class QuestionsList extends Component {
  constructor() {
    super();
    this.state = {
      questions: []
    };
  }
  async componentDidMount() {
    const axiosRes = await axios.get("http://localhost:3030/tests");
    console.log(axiosRes.data);
    this.setState({
      questions: axiosRes.data.reverse()
    });
  }
  render() {
    const { questions } = this.state;
    return (
      <div>
        <h1 className="title">List of all Questions</h1>
        <Button
          className="addBtn"
          variant="contained"
          color="primary"
          href="/form"
        >
          Add Question
        </Button>
        {questions.map((que, i) => (
          <Card key={i} className="queCard">
            <div className="questionWrapper">
              <h3 className="question">{que.question}</h3>
              <ol>
                {que.options.map((opt, j) => (
                  <li key={j} className="options">
                    {opt}
                  </li>
                ))}
              </ol>
            </div>
          </Card>
        ))}
      </div>
    );
  }
}

export default QuestionsList;
