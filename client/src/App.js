import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:5000/users").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:5000/users/new", {
      name, //As its same in the req.body and here
      age,
      username,
    }).then((response) => {
      //Now this is for creating a user on screen
      setListOfUsers([
        ...listOfUsers,
        {name, //As its same in the req.body and here
        age,
        username
        },
      ]);
    });
  };
  return (
    <div className="App">
      <div className="userDisplay">
        {listOfUsers.map((users) => {
          return (
            <>
              <h1>Name: {users.name}</h1>
              <h1>Age: {users.age}</h1>
              <h1>Username: {users.username}</h1>
            </>
          );
        })}
      </div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;
