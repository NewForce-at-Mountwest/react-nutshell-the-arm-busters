import React, { Component } from 'react';
import RegisterManager from "../../modules/RegisterManager.js"

class RegisterForm extends Component {
    state = {
        name: "",
        username: "",
        email: "",
        password: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};

        stateToChange[evt.target.id] = evt.target.value;
        console.log("evt.target.id", evt.target.id)
        console.log("stateToChange", stateToChange)
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewUser = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.username === "" || this.state.email === "" || this.state.password === "") {
            window.alert("Please input all fields");
        } else {
            this.setState({ loadingStatus: true });
            const newUser = {
                name: this.state.name,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            };

            // Create the animal and redirect user to animal list
            RegisterManager.post(newUser)
                .then(() => this.props.history.push("/"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div>

                            <label htmlFor="name">Name</label>

                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="name"
                                placeholder="name"
                            />
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="username"
                                placeholder="Username"
                            />
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                required
                                onChange={this.handleFieldChange}
                                id="email"
                                placeholder="email"
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                required
                                onChange={this.handleFieldChange}
                                id="password"
                                placeholder="password"
                            />
                        </div>

                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewUser}
                            >Register</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default RegisterForm
