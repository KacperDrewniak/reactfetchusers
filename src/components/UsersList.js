import React from "react";

const UsersList = props => {
  console.log(props.users);
  return (
    <ul>
      <li>Użytkownik1</li>
      <li>Użytkownik2</li>
    </ul>
  );
};

export default UsersList;
