import React, { Component } from 'react'

class Home extends Component {
  
  logoutUser = () => {
    localStorage.clear(
      "userId"
    );
    this.props.history.push("/")
  }

  isAuthenticated = () => localStorage.getItem("userId") !== null;

  checkLogoutButton = () => {
    if(this.isAuthenticated()){
      return (<button
          type="button"
          onClick={() => {this.logoutUser()}}
          >
          Leave Hell
          </button>)
        }
        else{
          return (
          <button
          type="button"
          onClick={() => {this.props.history.push("/login")}}
        >
          You're stuck here. Login.
        </button>)
        }
  }
  

  render() {
    return (
      <section>
        Welcome to Hell
        <br />
      {this.checkLogoutButton()}
      </section>
    )
  }
}

export default Home