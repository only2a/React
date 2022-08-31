import React from "react";

export class SignUpEmailInput extends React.Component {
  state = {
    email: ""
  };
  inputHandler = (e) => {
    this.setState({ email: e.target.value });
    let check = /\S+@\S+\.\S+/,
    checked = check.test(e.target.value)
    this.props.disableBtn(!checked)
    this.props.logAndPass(e, "login")
  };
  render() {
    return (
      <input
        id="inp"
        type="email"
        name="email"
        placeholder="Email"
        value={this.state.email}
        onChange={this.inputHandler}
      />
    );
  }
}
