import React, { Component } from "react";
import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";
import "./App.css";

const API = "https://randomuser.me/api/?results=5";

class App extends Component {
  state = {
    users: null
  };

  handleDataFetch = () => {
    console.log("click");
  };
  render() {
    const users = this.state.users;
    return (
      <>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users ? <UsersList users={users} /> : users}
      </>
    );
  }
}

export default App;
