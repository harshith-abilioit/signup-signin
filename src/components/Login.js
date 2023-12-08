import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const onChangeSubmit = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name,value)
    setData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    const res = await axios.post("http://localhost:1010/login", data);
    console.log(res);
    if (res.data === "login success") {
      setData({
        email: "",
        password: "",
      });
      navigate("/");
    } else{
        alert(res.data)
    }
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div>
          <input required
            type="email"
            placeholder="email"
            name="email"
            value={data.email}
            onChange={onChangeSubmit}
          />
        </div>
        <div>
          <input required
            type="password"
            placeholder="password"
            name="password"
            value={data.password}
            onChange={onChangeSubmit}
          />
        </div>
        <div>
          <input type="submit" value="signin" onClick={onSubmit} />
        </div>
      </form>
    </div>
  );
};

export default Login;
