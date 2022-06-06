import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// const Login = () => {
 


 
// };





function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useContext(AppContext);

  const Login = (e) => {
    e.preventDefault();
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email,
        password
      }
    })
      .then((res) => {
        alert("success");
        dispatch({
          type: "LOGIN_SUCCESS",
          token: res.data.token
        });
      })
      .catch((err) => {
        console.log(err.message);
        alert("error");
      });
  };

  if (state.isAuth) {
    return <Navigate to="/users" />;
  }
  return (
    <div>
      <form onSubmit={Login}>
              
            <div>
            <input data-cy="login-email" />
            <input data-cy="login-password" />
            <button data-cy="login-submit">Submit</button>
          </div>
        
      </form>
    </div>
  );
}


export default Login;
