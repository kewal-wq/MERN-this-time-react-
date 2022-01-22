import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:5000/users").then((res) => {
      setListOfUsers(res.data);
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
      <div className="App-data">
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
      <h1 className="addUser">Add a User</h1>
      <div>
        <label htmlFor="name" id="App-label">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="age" id="App-label">Age</label>
        <input

          type="number"
          name="age"
          id="age"
          placeholder="Age"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label htmlFor="username" id="App-label">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          id="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button className="App-button" onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;
