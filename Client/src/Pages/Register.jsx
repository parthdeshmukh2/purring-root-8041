import React, { useState } from "react";
import {
  Image,
  Container,
  Heading,
  InputGroup,
  Input,
  InputLeftAddon,
  InputRightElement,
  Button,
  Alert,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Redux/AuthReducer/action";

const Register = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [LastName, setLastName] = useState("");
  const [show, setShow] = React.useState(false);
  const [Password, setPassword] = React.useState("");
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.AuthReducer.isError);
  const errorMessgae = useSelector((state) => state.AuthReducer.message);
  const navigate = useNavigate();

  const handlesubmit = () => {
    const loginobj = { Name, Email, LastName, Password };
    dispatch(registerUser(loginobj));
    alert("Registered SuccessFully")
    navigate("/Login", { replace: true });
  };

  return (
    <Container maxW="550px" color="white" h="100vh">
      {isError ? <Alert>{errorMessgae}</Alert> : null}
      <Image
        boxSize="sm"
        m="auto"
        src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg"
        alt="Dan Abramov"
      />
      <Heading as="h3" size="md" color="black">
        Enter details to Sign-up
      </Heading>
      <InputGroup m="20px auto">
        <InputLeftAddon
          children="name"
          bg="black"
          boxShadow="0px 0px 0px 1px black"
        />
        <Input
          boxShadow="0px 0px 0px 1px black"
          type="text"
          placeholder="name"
          color={"black"}
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputGroup>
      <InputGroup m="20px auto">
       
        <Input
          boxShadow="0px 0px 0px 1px black"
          type="text"
          placeholder="Last Name"
          color={"black"}
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </InputGroup>
      <InputGroup m="20px auto">
        <InputLeftAddon
          children="Email"
          bg="black"
          boxShadow="0px 0px 0px 1px black"
        />
        <Input
          boxShadow="0px 0px 0px 1px black"
          type="email"
          color={"black"}
          placeholder="@gmail.com"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputGroup>
      <InputGroup
        size="md"
        m="20px auto"
        boxShadow="0px 0px 0px 1px black"
        borderRadius="5px"
      >
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          color={"black"}
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick} bg="black">
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button
        w="100%"
        bg="rgb(16,163,16)"
        m="5px auto 20px 0px"
        onClick={handlesubmit}
      >
        Continue
      </Button>
      <Heading
        as="h5"
        size="sm"
        color="rgb(16,163,16)"
        onClick={() => navigate("/login")}
        cursor="pointer"
      >
        Log In
      </Heading>
    </Container>
  );
};

export default Register;
