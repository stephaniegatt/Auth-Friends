import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";


function Login() {
    const { handleSubmit, register } = useForm();
    const onSubmit = values => login(values);
    const history = useHistory();

    const login = values => {
    axios
        .post("http://localhost:5000/api/login", {
            username: values.username,
            password: values.password,
        })
        .then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data.payload);
            history.push("/protected");
        })
        .catch(err => console.log(err));
    };

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="username"
          ref={register({
            required: "Required",
            message: "invalid email address"
          })}
        />
        <input
          name="password"
          ref={register({
            required: "Required"
          })}
        />
        <button type="submit">Submit</button>
      </form>
    )
};   
    
export default Login;
    
