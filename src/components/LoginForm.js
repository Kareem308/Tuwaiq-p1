import React, { useState } from "react";

export default function LoginForm({ login, error }) {
  const [details, setDetails] = useState({ name: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="login-form">
        <h2> Login </h2>
        {error !== "" ? <div className="error"> {error} </div> : ""}
        <div style={{ padding: "1rem" }}>
          <label htmlFor="name"> Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>

        <div style={{ padding: "1rem" }}>
          <label htmlFor="password"> Password: </label>
          <input
            type="text"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>

        <input className="style" type="submit" value="Login" />
      </div>
    </form>
    
  );
}
