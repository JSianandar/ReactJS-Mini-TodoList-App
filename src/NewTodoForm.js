import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo({ ...this.state, id: uuidv4() });
    this.setState({
      task: "",
    });
  }
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          placeholder="What would you like to do?"
          name="task"
          id="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default NewTodoForm;
