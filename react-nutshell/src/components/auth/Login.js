import React, { Component } from "react";
import RegisterManager from "../../modules/RegisterManager";

class Login extends Component {
  // Set initial state
  state = {
    email: "",
    password: "",
    users: "",
  };

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleLogin = (e) => {
    e.preventDefault();
    let login = false;
    let loginUserId = 0;
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */ this.state.users.forEach(
      (user) => {
        if (
          this.state.email == user.email &&
          this.state.password == user.password
        ) {
          login = true;
          loginUserId = user.id;
        }
      }
    );
    if ((login == true)) {
      localStorage.setItem(
        "userId",
        loginUserId
      );
      this.props.history.push("/");
    } else{
      window.alert("Your email and password combination was not recognized!")
    }
  };

  componentDidMount() {
    //getAll from TaskManager and hang on to that data; put it in state
    RegisterManager.getAll().then((users) => {
      this.setState({
        users: users,
      });
      console.log(this.state.users);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
          <h3>Please sign in</h3>
          <div className="formgrid">
            <input
              onChange={this.handleFieldChange}
              type="email"
              id="email"
              placeholder="Email address"
              required=""
              autoFocus=""
            />
            <label htmlFor="inputEmail">Email address</label>

            <input
              onChange={this.handleFieldChange}
              type="password"
              id="password"
              placeholder="Password"
              required=""
            />
            <label htmlFor="inputPassword">Password</label>
          </div>
          <button type="submit">Sign in</button>
          <button
                    type="button"
                    onClick={() => {this.props.history.push("/register")}}
                  >
                    Register instead
                  </button>
        </fieldset>
      </form>
    );
  }
}

export default Login;
