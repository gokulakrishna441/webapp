import React, { useState } from "react";
import { Form, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  localStorage.setItem("gokula", user);
  localStorage.setItem("krishna", pass);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "gokula" && pass === "krishna") {
      localStorage.setItem("isapproved", true);
      navigate ('/Dashboard');
    }
  };
  return (
    <div>
      <h1>Hello Guys!Welcome </h1>

      <Form onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <Label for="username">Username</Label>
          <Input type="username" onChange={(e) => setUser(e.target.value)} />
        </div>
        <div>
          <Label for="password">Password</Label>
          <Input type="password" onChange={(e) => setPass(e.target.value)} />
        </div>
        <Input type="Submit" value={'Login'}/>
      </Form>
    </div>
  );
}
