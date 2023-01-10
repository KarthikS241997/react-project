import React, { useState } from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {

  const [usersList, setusersList] = useState([]);

  const addUserHandler = (uname,uage) =>{
    setusersList( (prevUsersList) => {
      return [...prevUsersList, {name: uname , age:uage, id:Math.random().toString()}];
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
