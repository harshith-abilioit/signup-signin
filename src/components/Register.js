import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const onChangeData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    const res = await axios.post("http://localhost:1010/signup", data);
    console.log(res)
    if (res.data.msg === `${data.email} already exists`) {
      alert(`${data.email} already exists`)
    } else{
        setData({
            name: "",
            email: "",
            password: "",
          });
        navigate("/login");
    }
    
  };
  return (
    <>
      <div>
        <form onSubmit={onFormSubmit}>
          <div>
            <input required
              type="text"
              name="name"
              value={data.name}
              placeholder="enter the name"
              onChange={onChangeData}
            />
          </div>
          <div>
            <input required
              type="email"
              name="email"
              placeholder="enter the email"
              value={data.email}
              onChange={onChangeData}
            />
          </div>
          <div>
            <input required
              type="text"
              name="password"
              placeholder="enter the password"
              value={data.password}
              onChange={onChangeData}
            />
          </div>
          <div>
            <input  type="button" value="signup" onClick={onSubmit} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
