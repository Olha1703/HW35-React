import { Component } from "react";

class LearnReact extends Component {
  constructor(props) {
    super(props);
    this.state = { subject: "I learn React" };
  }

  render() {
    return (
      <div>
        <p>{this.state.subject}</p>
      </div>
    );
  }
}

export default LearnReact;
