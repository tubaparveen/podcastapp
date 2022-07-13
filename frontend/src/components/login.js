import "./login.css";
import React, { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email:email,password:password };

    setAllEntry([...allEntry,newEntry]);
    console.log(allEntry);
  }


 
  return (
    <div>
      <div className="my-card cl-4">
        <h1 >Login Here</h1>

        <form action="" onSubmit={submitForm}>
          <label style={{ color: "black" }}>Email</label>
          <input
            className="my-input"
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label style={{ color: "black" }}>Password</label>
          <input
            className="my-input"
            type="password"
            name="password"
            
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-dark">Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
