import React from "react";
import "./UsersList.css";
const UsersList = props => {
  const users = props.users.map(user => (
    <div key={user.id.value}>
      <img src={user.picture.large} alt="" srcset="" />
      <h4>{`${user.name.title} ${user.name.last}`}</h4>
      <p>{user.email}</p>
    </div>
  ));
  console.log(props.users);
  return <ul className="users">{users}</ul>;
};

export default UsersList;
