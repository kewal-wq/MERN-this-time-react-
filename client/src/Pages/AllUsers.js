import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";

const AllUsers = () => {

    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/users")
        .then((res) => {
            setListOfUsers(res.data);
        })
    }, [])
  return <div>
      <h1>Here are my users:- </h1>
          {listOfUsers.map((users) => {
              return(
                  <>
                  <h5>Name: {users.name}</h5>
                  <h5>Age: {users.age}</h5>
                  <h5>Username: {users.username}</h5>
                  </>
              )
          })}
  </div>;
};

export default AllUsers;
