import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Create from './API/Create';
import Show from './API/Show';
import Update from './API/Update';

function App() {
  const adminUser = {
    name: "Kareem",
    password: "0000",
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [error, setError] = useState("");

  const login = (details) => {
    console.log(details);

    if (
      details.name === adminUser.name &&
      details.password === adminUser.password
    ) {
      setUser({
        name: details.name,
        password: details.password,
      });
    } else {
      console.log("Error");
      <div className="error"> {setError("Incorrect Name or Password!")}; </div>;
    }
    if (details.name === "" || details.password === "") {
      setError("All fields are required!!");
    }
  };

  const Logout = () => {
    setUser({ name: "", paassword: "" });
  };

  return (
    <div className="App">
      {user.name !== "" ? (
        <div className="login-form">
          <h2>
            Welcome
            <p>
              {user.name} {""}
              <p className="success"> Logged in </p>
            </p>
          </h2>
          <button onClick={Logout}> Logout </button>
        </div>
      ) : (
        <LoginForm login={login} error={error} />
      )}
    </div>
  );
  return (
    <>
      <>
        <Routes>
          <Route path='' element={<Create />}></Route>
          <Route path="Show" element={<Show />}></Route>
          <Route path="Update" element={<Update />}></Route>
        </Routes>

      </>
    </>

  );
}

export default App;