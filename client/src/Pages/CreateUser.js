import React from "react";
import { useState} from "react";
import axios from "axios";

const CreateUser = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  const createUser = async() => {
   await axios
      .post("http://localhost:5000/users/new", {
        name,
        age,
        username,
      })
      .then((res) => {
        setListOfUsers([
            ...listOfUsers,
            {
                name,
                age,
                username
            }
        ]);
      });
    }

  return (
    <div>
      <h1 className="addUser">Add a User</h1>
      <div>
        <label htmlFor="name" id="App-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="age" id="App-label">
          Age
        </label>
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Age"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label htmlFor="username" id="App-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          id="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button className="App-button" onClick={createUser}>
          Create User
        </button>
      </div>
    </div>
  );
};

export default CreateUser;
