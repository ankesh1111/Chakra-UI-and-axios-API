import { Container, FormControl, Stack ,Input, Button} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContextProvider, { AuthContext } from "../Context/AuthContext/AuthContextProvider";

// 0. axios should be used for making network requests;

// 1. input boxes which takes email and password from the user

// 2. in this page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`

const Login = () => {

  // const {LoginUser} = useContext(AuthContext)


  const [formstate, setFromState] = useState({
    email:"",
    password:""
  })

  const navigate= useNavigate()

  function handleChange(e){
      const {name, value} = e.target;
      setFromState({
        ...formstate,
        [name]:value
      })
  }

  function handleSubmit(e){
       e.preventDefault();
       fetch(`https://reqres.in/api/login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formstate)

       })
       .then((res)=>res.json())
       .then((res)=>{
        console.log(res);
        // LoginUser(res.token)
        navigate("/")
       })
  }

  return  (
    <Container>
     
    <FormControl onSubmit={handleSubmit}>
      <Stack>
        <Input
        placeholder="Email"
        type="email"
        name="email"
        value={formstate.email}
        onChange={handleChange}
        /> 
         <Input
        placeholder="Password"
        type="password"
        name="password"
        value={formstate.password}
        onChange={handleChange}
        /> 
        <Button bgColor="teal" onClick={handleSubmit}>Submit</Button>
      </Stack>

    </FormControl>
  </Container>
  )
 
};

export default Login;
